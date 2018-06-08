const fs = require('fs'),
    readStream = fs.createReadStream(process.argv[2], 'utf-8');

readStream.on('data', data => {
    console.log('Got data:', data);
});

readStream.on('end', () => {
    console.log('Got end');
});

readStream.on('error', err => {
    console.log('Got error:', err);
});