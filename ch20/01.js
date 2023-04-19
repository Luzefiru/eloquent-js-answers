const fs = require('fs');

const regExp = new RegExp(process.argv[2]);
const filesToSearch = process.argv.slice(3);

for (file of filesToSearch) {
  const text = fs.readFileSync(file, 'utf8');
  if (regExp.test(text)) {
    process.stdout.write(`${file}\n`);
  }
}
