const url = require('url'),
    fs = require('fs'),
    path = require('path');
    

module.exports = function (req, res, next) {
    req.query = url.parse(req.url, true).query;
    if (req.query.magicWord === 'please') {
            next();
        } else {
            const error = new Error("wrong magic word");
            //error.statusCode = 501;
            next(error);
        }
    }