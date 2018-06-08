(function () {
    'use strict';

    var theCanvas = document.getElementById("canvas"),
        ctx = theCanvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 100, 100, 1000);

    ctx.beginPath();
    ctx.moveTo(475, 150);
    ctx.lineTo(500, 175);
    ctx.lineTo(500, 125);
    ctx.fill();
}());