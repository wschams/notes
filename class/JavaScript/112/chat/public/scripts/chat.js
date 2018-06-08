(function () {
    'use strict';

    const socket = io(),
        messageInput = $('#message'),
        messagesElem = $('#messages');

    function addMessage(msg) {
        messagesElem.append(`<li>${msg}</li>`);
    }

    socket.on('message', msg => {
        addMessage(msg);
    });

    $('#send').click(() => {
        const msg = messageInput.val();
        messageInput.val('');
        addMessage(msg);
        socket.emit('message', msg);
    });
}());