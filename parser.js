const fs = require('fs-extra');
const find = require('find');
const pageObjects = require('./features/pageObjects.json');

fs.removeSync('./features/parsed');

find.file(/\.feature$/, './features', (files) => {
    files.forEach((file) => {
        const parsedFile = file.replace('features', 'features/parsed');
        fs.createFileSync(parsedFile);
        const contents = fs.readFileSync(file, 'utf8');
        const delimiter = '__';
        let parsedContents = '';

        for (let i = 0; i < contents.length; i += 1) {
            if (contents[i].concat(contents[i + 1]) === delimiter) {
                let j = 2;
                let key = '';
                while (contents[i + j].concat(contents[i + j + 1]) !== delimiter) {
                    key += contents[i + j];
                    j += 1;
                }
                i = i + j + 1;
                parsedContents += `"${pageObjects[key]}"`;
            } else {
                parsedContents += contents[i];
            }
        }
        fs.writeFile(parsedFile, parsedContents, (err) => { if (err) throw err; });
    });
});
