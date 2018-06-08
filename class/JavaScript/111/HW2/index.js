const express = require('express'),
    app = express();

app.get('/about', (req, res, next) => {
    res.end('PCS is a great company');
});

app.get('/home', (req, res, next) => {
    res.end('This is the PCS home page');
});

app.use(require('./basicAuth')({
    realm: 'The PCS App',
    users: {
        donald: 'trump',
        me: 'p@$$w0rd'
    }
}));

app.get('/special', (req, res, next) => {
    res.end('This is the special page');
});

app.use((err, req, res, next) => {
    res.statusCode = err.statusCode || 500;
    res.end(err.message);
});

app.listen(80);