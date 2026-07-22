import { Client } from 'ssh2';
import fs from 'fs';
import path from 'path';

const config = {
  host: '202.155.157.13',
  port: 22,
  username: 'root',
  password: 'Warkop@123'
};

const conn = new Client();

function executeCommand(conn, cmd) {
  return new Promise((resolve, reject) => {
    console.log(`Executing: ${cmd}`);
    conn.exec(cmd, (err, stream) => {
      if (err) return reject(err);
      let stdout = '';
      let stderr = '';
      stream.on('close', (code, signal) => {
        resolve({ code, stdout, stderr });
      }).on('data', (data) => {
        stdout += data.toString();
        console.log(data.toString());
      }).stderr.on('data', (data) => {
        stderr += data.toString();
        console.error(data.toString());
      });
    });
  });
}

function uploadDirectory(sftp, localDir, remoteDir) {
  return new Promise(async (resolve, reject) => {
    try {
      await new Promise((res) => sftp.mkdir(remoteDir, { mode: '0755' }, () => res()));

      const entries = fs.readdirSync(localDir, { withFileTypes: true });

      for (const entry of entries) {
        const localPath = path.join(localDir, entry.name);
        const remotePath = path.posix.join(remoteDir, entry.name);

        if (entry.isDirectory()) {
          await uploadDirectory(sftp, localPath, remotePath);
        } else {
          console.log(`Uploading ${localPath} -> ${remotePath}`);
          await new Promise((res, rej) => {
            sftp.fastPut(localPath, remotePath, (err) => (err ? rej(err) : res()));
          });
        }
      }
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

conn.on('ready', async () => {
  console.log('SSH Connection Established for VPS Update!');

  try {
    const sftp = await new Promise((res, rej) => {
      conn.sftp((err, sftp) => (err ? rej(err) : res(sftp)));
    });

    console.log('--- Cleaning & Uploading updated static dist ---');
    await executeCommand(conn, 'rm -rf /var/www/warkop/html/* && mkdir -p /var/www/warkop/html');
    await uploadDirectory(sftp, path.resolve('dist'), '/var/www/warkop/html');
    sftp.end();

    console.log('--- Cleaning up backend CMS service (if exists) ---');
    await executeCommand(conn, 'systemctl stop warkop-cms || true');
    await executeCommand(conn, 'systemctl disable warkop-cms || true');
    await executeCommand(conn, 'rm -f /etc/systemd/system/warkop-cms.service /var/www/warkop/server.mjs || true');
    await executeCommand(conn, 'systemctl daemon-reload || true');

    console.log('--- Updating Nginx configuration (Static Only) ---');
    const nginxConf = `
server {
    listen 80;
    listen [::]:80;
    server_name warkop1001cc.cloud www.warkop1001cc.cloud 202.155.157.13;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name warkop1001cc.cloud www.warkop1001cc.cloud 202.155.157.13;

    ssl_certificate /etc/letsencrypt/live/warkop1001cc.cloud/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/warkop1001cc.cloud/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    root /var/www/warkop/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
`;

    const confBase64 = Buffer.from(nginxConf).toString('base64');
    await executeCommand(conn, `echo "${confBase64}" | base64 -d > /etc/nginx/sites-available/warkop`);
    await executeCommand(conn, 'nginx -t && systemctl reload nginx');

    console.log('--- VPS Update & Deployment Completed Successfully! ---');
    conn.end();
  } catch (error) {
    console.error('Error during VPS update:', error);
    conn.end();
  }
}).connect(config);
