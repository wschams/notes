const express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

/*app.get('/', (req, res, next) => {
    res.end('Hello!');
});*/

io.on('connection', socket => {
    console.log('Got a connection');

    //socket.emit('message', 'Hello there. This is a message sent over a socket');

    socket.on('message', msg => {
        //io.emit('message', msg);
        socket.broadcast.emit('message', msg);
    });
});

http.listen(80);