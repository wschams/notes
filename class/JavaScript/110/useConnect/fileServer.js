const url = require('url'),
    fs = require('fs'),
    path = require('path'),
    mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript'
    };

module.exports = (request, response, next) => {
    const theUrl = url.parse(request.url, true);
    const ext = mimeTypes[path.extname(theUrl.pathname)];
    if (ext) {
        response.setHeader('Content-Type', ext);
    }

    const theFile = 'public/' + theUrl.pathname;
    const readStream = fs.createReadStream(theFile);

    readStream.pipe(response);

    readStream.on('error', err => {
        if (err.code === 'ENOENT') {
            next();
        } else {
            next(err);
        }
    });
}