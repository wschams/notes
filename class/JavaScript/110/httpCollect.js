const http = require('http');

http.get(process.argv[2], res => {
    let result = '';
    res.setEncoding('utf8');
    res.on('data', data => result += data);
    res.on('error', console.error); //err => console.error(err));
    res.on('end', () => {
        console.log(result.length);
        console.log(result);
    });
}).on('error', err => console.error('error: ', err));