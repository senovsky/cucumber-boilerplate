/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */

const fs = require('fs-extra');
const readline = require('readline');
const { execFile } = require('child_process');
const pageObjects = require('./features/pageObjects.json');

const parser = function parser() {
    fs.emptydirSync('./features/parsed');

    execFile('find', ['features/**/*.feature'], (err, stdout) => {
        const fileList = stdout.split('\n');
        for (let i = 0; i < fileList.length - 1; i++) {
            const parsedFile = fileList[i].replace('features', 'features/parsed');
            fs.createFileSync(parsedFile);

            readline.createInterface({
                input: fs.createReadStream(fileList[i]),
                terminal: false,
            }).on('line', (line) => {
                let pageObject;
                let id = line.match(new RegExp('__(.*)__'));
                if (id != null) {
                    pageObject = pageObjects[id[1]];
                    id = id[0];
                }
                const replaced = line.replace(id, `"${pageObject}"`);
                fs.appendFileSync(parsedFile, `${replaced}\n`);
            });
        }
    });
};

module.exports = parser;
