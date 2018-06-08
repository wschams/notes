const fs = require('fs'),
    path = require('path');

module.exports = function (directory, ext, callback) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            return callback(err);
        }
        ext = '.' + ext;

        callback(null, files.filter(f => path.extname(f) === ext));
    });
}