(function () {
    "use strict";

    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d');


    function resizeCanvas() {
        canvas.width = window.innerWidth - 10;
        canvas.height = window.innerHeight - 10;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    var img = document.createElement('img');
    img.src = "images/snake.png";

    /*setTimeout(() => {
        context.drawImage(img, 0, 0, 64, 64);
    }, 1000);*/
    img.onload = function () {
        context.drawImage(img, 0, 0, 64, 64);
    };
}());