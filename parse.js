/* eslint-disable prefer-destructuring */

const fs = require('fs');
const readline = require('readline');
const pageObjects = require('./features/pageObjects.json');

const filename = 'features/1-Success/1_1-Scenario.feature';
readline.createInterface({
    input: fs.createReadStream(filename),
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
