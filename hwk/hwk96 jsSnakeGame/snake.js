/* jshint -W104 */
(function () {
    "use strict";

    let canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d');


    function resizeCanvas() {
        canvas.width = window.innerWidth - 22;
        canvas.height = window.innerHeight - 19;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    let img = document.createElement('img');
    img.src = "images/snake.png";
    let moveX = 0;
    let moveY = 0;
    let move;
    let appleX = 0;
    console.log(canvas.width, canvas.height);
    let appleY = 0;
    let prevMoveX;
    let prevMoveY;

    function createApple() {
        appleX = getRandomNumberBetween(0, 20) * 64;
        appleY = getRandomNumberBetween(0, 5) * 64;
        context.fillStyle = 'red';
        context.fillRect(appleX, appleY, 64, 64);
    }

    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    img.onload = function () {
        context.drawImage(img, 0, 0, 64, 64);
    };
    window.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case 37:
                move = 'left';
                break;
            case 38:
                move = 'up';
                break;
            case 39:
                move = 'right';
                break;
            case 40:
                move = 'down';
                break;
        }
    });

    createApple();

    let gameInterval = setInterval(function () {
        prevMoveX = moveX;
        prevMoveY = moveY;
        switch (move) {
            case 'left':
                moveX -= 64;
                break;
            case 'up':
                moveY -= 64;
                break;
            case 'right':
                moveX += 64;
                break;
            case 'down':
                moveY += 64;
                break;
        }
        if (moveX === appleX && moveY === appleY) {
            context.clearRect(appleX, appleY, 64, 64);
            createApple();
        }
        if (moveX >= canvas.width || moveX < 0 || moveY >= canvas.height || moveY < 0) {
            clearInterval(gameInterval);
            console.log('you lost', moveX, moveY);
        } else {
            context.clearRect(prevMoveX, prevMoveY, 64, 64);
            context.drawImage(img, moveX, moveY, 64, 64);
        }
    }, 150);
}());