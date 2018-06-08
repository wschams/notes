(function () {
    "use strict";

    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        x = 0,
        y = 50,
        change = 1;

    function resizeCanvas() {
        var width = window.innerWidth - 10;
        var height = window.innerHeight - 10;

        canvas.width = width;
        canvas.height = height;
    }
    resizeCanvas();
    setInterval(function () {
        context.beginPath();
        context.clearRect(x - 50 - 1, y - 50 - 1, 102, 102);
        context.closePath();
        if (x >= canvas.width) {
            change = -change;
        }
        if (x < 0) {
            change = 1;
        }
        x += change;
        //y += 1;
        context.arc(x, y, 50, 0, Math.PI * 2);
        context.fillStyle = "red";
        context.fill();
    }, 1);
}());