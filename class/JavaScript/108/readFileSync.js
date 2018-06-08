const fs = require('fs');

const fileContents = fs.readFileSync('c:/xampp/htdocs/class/javascript/108/readFileSync.js');
console.log('File contents: ', fileContents.toString());
console.log('Done');