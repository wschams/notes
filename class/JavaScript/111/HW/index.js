const express = require('express'),
    app = express();

app.get('/about', (req, res, next) => {
    res.end('PCS is a great company');
});

app.get('/home', (req, res, next) => {
    res.end('This is the PCS home page');
});

app.use((req, res, next) => {
    if (req.query.magicWord === 'please') {
        next();
    } else {
        const err = new Error('You didnt say please!');
        err.statusCode = 401;
        next(err);
    }
});

app.get('/special', (req, res, next) => {
    res.end('This is the special page');
});

app.use((err, req, res, next) => {
    res.statusCode = err.statusCode || 500;
    res.end(err.message);
});

app.listen(80);