const http = require('http');

var theDonald = {
    name: 'Donald Trump',
    email: 'dtrump@whitehouse.gov'
};

http.createServer((request, response) => {
    response.setHeader('content-type', 'text/plain');
    //response.write("Hello World!");
    //response.setHeader('content-type', 'application/json');
    //response.write(JSON.stringify(theDonald));

    response.statusCode = 404;
    response.write("Sorry, this is not the page you are looking for. 404");
    response.end();
}).listen(80);