const connect = require('connect'),
    app = connect();
//url = require('url');

//const app = require('connect')();

app.use(require('./logger'));

app.use(require('./fileServer'));

const queryParser = require('./queryParser');
app.use(queryParser);

app.use((req, res, next) => {
    //res.write("<h1>Hello from PCS</h1>");
    res.setHeader('Content-Type', 'text/html');
    next();
});

app.use('/home', (req, res, next) => {
    res.end("<h2>The home page.</h2>");
    //next();
});

app.use('/about', (req, res, next) => {
    res.end("<h2>PCS is a great place.</h2>");
    //next();
});

/*app.use((req, res, next) => {
    res.end("<hr/><h5>Copyright PCS 2018</h5>");
});*/

app.use('/makeError', (req, res, next) => {
    foo.bar();
    //next();
});

app.use('/sayHello', (req, res, next) => {
    //const theUrl = url.parse(req.url, true);
    //res.end(`<h2>Hello ${theUrl.query.name ? theUrl.query.name : 'someone'}.</h2>`);
    res.end(`<h2>Hello ${req.query.name ? req.query.name : 'someone'}.</h2>`);
    //next();
});

app.use('/sayGoodbye', (req, res, next) => {
    //const theUrl = url.parse(req.url, true);
    //res.end(`<h2>Goodbye ${theUrl.query.name ? theUrl.query.name : 'someone'}.</h2>`);
    res.end(`<h2>Goodbye ${req.query.name ? req.query.name : 'someone'}.</h2>`);
    //next();
});


app.use((req, res, next) => {
    //res.statusCode = 404;
    //res.end("<h5>Page not found. 404</h5>");
    const error = new Error("Page not found. 404");
    error.statusCode = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.statusCode = err.statusCode ? err.statusCode : 500;
    res.end('<h4>Something went wrong<br/>' + err.message + '</h4>');
});

app.listen(80);