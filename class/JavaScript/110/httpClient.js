const http = require('http');

http.get(process.argv[2], res => {
    res.setEncoding('utf8');
    res.on('data', console.log); //data => console.log(data));
    res.on('error', console.error); //err => console.error(err));
}).on('error', err => console.error('error: ', err));