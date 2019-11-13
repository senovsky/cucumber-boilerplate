/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */

const fs = require('fs');
const readline = require('readline');
const { removeSync } = require('fs-extra');
const execFile = require('child_process').execFile;
const pageObjects = require('./features/pageObjects.json');

removeSync('./features/parsed');

execFile('find', ['features/**/*.feature'], (err, stdout) => {
    const fileList = stdout.split('\n');
    for (let i = 0; i < fileList.length - 1; i++) {
        readline.createInterface({
            input: fs.createReadStream(fileList[i]),
            terminal: false,
        }).on('line', (line) => {
            let pageObject = '';
            let id = line.match(new RegExp('__(.*)__'));
            if (id !== null) {
                pageObject = pageObjects[id[1]];
                id = id[0];
            }
            const replaced = line.replace(id, `"${pageObject}"`);
            console.log(`${replaced}`);
        });
    }
});
