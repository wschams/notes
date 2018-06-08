const http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path'),
    mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript'
    };

http.createServer((request, response) => {
    const theUrl = url.parse(request.url, true);
    const ext = mimeTypes[path.extname(theUrl.pathname)];
    if (ext) {
        response.setHeader('Content-Type', ext);
    }

    const theFile = 'public/' + theUrl.pathname;
    const readStream = fs.createReadStream(theFile);

    /*readStream.on('data', data => {
        response.write(data);
    });

    readStream.on('end', () => {
        response.end();
    });*/

    readStream.pipe(response);

    readStream.on('error', err => {
        response.statusCode = 500;
        response.setHeader('Content-Type', 'text/html');
        response.write(`<h2>Error: ${err.message}</h2>`);
        response.end();
    });

    /*fs.readFile(theFile, (err, fileContents) => {
        if (err) {
            response.statusCode = 500;
            response.write(`<h2>Error: ${err.message}</h2>`);
        } else {
            response.write(fileContents);
        }
        response.end();
    });*/
}).listen(80);