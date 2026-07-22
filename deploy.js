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
      // Ensure remote dir exists
      await new Promise((res) => {
        sftp.mkdir(remoteDir, { mode: '0755' }, () => res());
      });

      const entries = fs.readdirSync(localDir, { withFileTypes: true });

      for (const entry of entries) {
        const localPath = path.join(localDir, entry.name);
        const remotePath = path.posix.join(remoteDir, entry.name);

        if (entry.isDirectory()) {
          await uploadDirectory(sftp, localPath, remotePath);
        } else {
          console.log(`Uploading ${localPath} -> ${remotePath}`);
          await new Promise((res, rej) => {
            sftp.fastPut(localPath, remotePath, (err) => {
              if (err) rej(err);
              else res();
            });
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
  console.log('SSH Connection Established!');

  try {
    console.log('--- Updating APT & Installing Nginx ---');
    await executeCommand(conn, 'apt-get update && apt-get install -y nginx');

    console.log('--- Creating /var/www/warkop/html ---');
    await executeCommand(conn, 'mkdir -p /var/www/warkop/html && rm -rf /var/www/warkop/html/*');

    console.log('--- Uploading build assets via SFTP ---');
    const sftp = await new Promise((res, rej) => {
      conn.sftp((err, sftp) => (err ? rej(err) : res(sftp)));
    });

    const localDist = path.resolve('dist');
    await uploadDirectory(sftp, localDist, '/var/www/warkop/html');
    sftp.end();

    console.log('--- Configuring Nginx ---');
    const nginxConf = `
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    root /var/www/warkop/html;
    index index.html;

    server_name _;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
`;

    // Write nginx config
    const confBase64 = Buffer.from(nginxConf).toString('base64');
    await executeCommand(conn, `echo "${confBase64}" | base64 -d > /etc/nginx/sites-available/warkop`);
    await executeCommand(conn, 'rm -f /etc/nginx/sites-enabled/default');
    await executeCommand(conn, 'ln -sf /etc/nginx/sites-available/warkop /etc/nginx/sites-enabled/default');

    console.log('--- Testing and Restarting Nginx ---');
    await executeCommand(conn, 'nginx -t && systemctl restart nginx');

    console.log('SUCCESS! Deployment complete.');
    conn.end();
  } catch (error) {
    console.error('Error during deployment:', error);
    conn.end();
  }
}).connect(config);
