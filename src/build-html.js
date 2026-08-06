const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello World</title>
</head>
<body>
  <h1>Hello World</h1>
  <script src="index.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
console.log('dist/index.html generated.');
