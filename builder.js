const fs = require("fs");
const path = require("path");

const cssFolder = path.join(__dirname, "stylesheets");
const outputFile = path.join(__dirname, "app.css");

let files = fs.readdirSync(cssFolder).filter(f => f.endsWith(".css"));

// garante que main.css seja o primeiro
files = [
    "main.css",
    ...files.filter(f => f !== "main.css")
];

let bundle = "";

files.forEach(file => {
    const filePath = path.join(cssFolder, file);
    const content = fs.readFileSync(filePath, "utf8");

    bundle += `\n/* ${file} */\n`;
    bundle += content;
});

fs.writeFileSync(outputFile, bundle);

console.log("CSS bundle criado:", files.length, "arquivos");