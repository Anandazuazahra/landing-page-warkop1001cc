import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const ASSETS_SRC = path.join(__dirname, 'assets');
const ASSETS_DIST = path.join(DIST_DIR, 'assets');

// Utility function to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Utility function to remove directory recursively
function cleanDirSync(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

console.log('--- Warkop 1001cc Static Builder: Starting Build ---');

try {
  // 1. Clean existing dist/ folder
  console.log('Cleaning dist directory...');
  cleanDirSync(DIST_DIR);
  fs.mkdirSync(DIST_DIR, { recursive: true });

  // 2. Copy index.html, style.css, and script.js
  console.log('Copying static source files (HTML, CSS, JS)...');
  fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(DIST_DIR, 'index.html'));
  fs.copyFileSync(path.join(__dirname, 'style.css'), path.join(DIST_DIR, 'style.css'));
  fs.copyFileSync(path.join(__dirname, 'script.js'), path.join(DIST_DIR, 'script.js'));

  // 3. Copy assets/ folder recursively
  console.log('Copying assets recursively...');
  copyDirSync(ASSETS_SRC, ASSETS_DIST);

  console.log('--- Warkop 1001cc Static Builder: Build Successful! ---');
  process.exit(0);
} catch (err) {
  console.error('--- Build Failed ---');
  console.error(err);
  process.exit(1);
}
