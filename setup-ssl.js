import { Client } from 'ssh2';

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

conn.on('ready', async () => {
  console.log('SSH Connection Established for SSL Setup!');

  try {
    console.log('--- Updating Nginx Configuration for warkop1001cc.cloud ---');
    const nginxConf = `
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    server_name warkop1001cc.cloud www.warkop1001cc.cloud 202.155.157.13;

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
    await executeCommand(conn, 'ln -sf /etc/nginx/sites-available/warkop /etc/nginx/sites-enabled/default');
    await executeCommand(conn, 'nginx -t && systemctl restart nginx');

    console.log('--- Installing Certbot ---');
    await executeCommand(conn, 'apt-get update && apt-get install -y certbot python3-certbot-nginx');

    console.log('--- Requesting SSL Certificate from Let\'s Encrypt ---');
    const certbotRes = await executeCommand(
      conn,
      'certbot --nginx -d warkop1001cc.cloud -d www.warkop1001cc.cloud --non-interactive --agree-tos --email admin@warkop1001cc.cloud --redirect'
    );

    console.log('Certbot Output Code:', certbotRes.code);

    console.log('--- Reloading Nginx ---');
    await executeCommand(conn, 'systemctl reload nginx');

    console.log('SSL Setup Completed Successfully!');
    conn.end();
  } catch (error) {
    console.error('Error during SSL setup:', error);
    conn.end();
  }
}).connect(config);
