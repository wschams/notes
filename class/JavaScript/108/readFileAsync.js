const fs = require('fs');

const fileContents = fs.readFile('helloWorld.js', (err, fileContents) => {
    if (err) {
        console.error('OOPS. Couldnt read file', err);
    } else {
        console.log('File contents: ', fileContents.toString());
    }
});

console.log('Done');