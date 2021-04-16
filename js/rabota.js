
const fs = require('fs');
const Dotenv = require('dotenv');

Dotenv.config({
    path: '.env',
});

fs.mkdirSync('./public/', { recursive: true });

fs.readdirSync('./src/').forEach((file) => {
    const srcPath = `./src/${file}`;
    const destPath = `./public/${file}`;

    const fileContent = fs.readFileSync(srcPath, 'utf8');
    const result = fileContent.replace(/{{EMBED_URL}}/g, process.env.EMBED_URL);

    if (fs.existsSync(destPath)) {
        fs.unlinkSync(destPath);
    }

    fs.writeFileSync(destPath, result, 'utf8');
});

const robotsFile = fs.readFileSync('./robots.txt', 'utf8');

fs.readdirSync('./').forEach((file) => {
    const destPath = `./public/${file}`;
    if (!destPath.includes('robots.txt')) {
        return;
    }

    if (fs.existsSync(destPath)) {
        fs.unlinkSync(destPath);
    }

    fs.writeFileSync(destPath, robotsFile, 'utf8');
});

// eslint-disable-next-line no-console
console.log('All files compiled');
