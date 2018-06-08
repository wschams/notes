const http = require('http'),
    url = require('url');

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    //console.log(request.url);
    const theUrl = url.parse(request.url, true);
    console.log(theUrl);
    switch (theUrl.pathname) {
        case '/':
            // or just fall through...
            response.statusCode = 302; // <--- added after class. Apparently browser wont redirect without one of the status codes that mean redirect
            response.setHeader('Location', '/index.html');
            break;
        case '/index.html':
            response.write('<h1>Welcome to PCS!</h1>');
            break;
        case '/about.html':
            response.write('<h1>PCS is a great place</h1>');
            break;
        case '/sayHello':
            response.write(`<h2>Hello ${theUrl.query.name ? theUrl.query.name : 'someone'}</h2>`);
            break;
        default:
            response.write('<h1 style="color: red">404 Page not found</h1>')
    }
    response.end();
}).listen(80);