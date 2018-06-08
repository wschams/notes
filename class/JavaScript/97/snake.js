(function () {
    "use strict";

    const LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40,
        SNAKE_SIZE = 64;

    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        crunchSound = document.getElementById("crunch"),
        direction = RIGHT,
        snakeX = -64,
        snakeY = 0,
        appleX,
        appleY,
        score = 0,
        interval;

    function resizeCanvas() {
        var width = window.innerWidth - 10;
        var height = window.innerHeight - 10;

        canvas.width = width - width % SNAKE_SIZE;
        canvas.height = height - height % SNAKE_SIZE;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    var snakeHead = document.createElement('img');
    snakeHead.src = "images/snake.png";

    snakeHead.onload = function () {
        interval = setInterval(() => {
            var x = 0,
                y = 0;

            switch (direction) {
                case LEFT:
                    x = -SNAKE_SIZE;
                    break;
                case UP:
                    y = -SNAKE_SIZE;
                    break;
                case RIGHT:
                    x = SNAKE_SIZE;
                    break;
                case DOWN:
                    y = SNAKE_SIZE;
                    break;
            }

            if (snakeX + x < 0 || snakeY + y < 0 || snakeX + x >= canvas.width || snakeY + y >= canvas.height) {
                crunchSound.play(); // should be a crash sound
                clearInterval(interval);
                return;
            }

            if (snakeX + x === appleX && snakeY + y === appleY) {
                crunchSound.currentTime = 0;
                crunchSound.play();
                score++;
                console.log(score);
                placeApple();
            }

            context.clearRect(snakeX, snakeY, SNAKE_SIZE, SNAKE_SIZE);

            snakeX += x;
            snakeY += y;

            context.drawImage(snakeHead, snakeX, snakeY, SNAKE_SIZE, SNAKE_SIZE);

        }, 200);
    };

    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function placeApple() {
        appleX = getRandomNumberBetween(0, canvas.width);
        appleY = getRandomNumberBetween(0, canvas.height);
        appleX = appleX - appleX % SNAKE_SIZE;
        appleY = appleY - appleY % SNAKE_SIZE;
        context.drawImage(apple, appleX, appleY, SNAKE_SIZE, SNAKE_SIZE);
    }

    var apple = document.createElement('img');
    apple.src = "images/apple.png";

    apple.onload = placeApple;

    window.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case LEFT:
            case UP:
            case RIGHT:
            case DOWN:
                direction = event.keyCode;
                break;
        }
    });
}());