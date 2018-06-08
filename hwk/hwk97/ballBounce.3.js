(function () {
    "use strict";

    class Ball {
        constructor() {
            this.x = 0;
            this.y = 50;
            this.changeX = 1;
            this.changeY = 1;
        }
        move() {
            /* context.beginPath();
            context.clearRect(this.x - 50 - 1, this.y - 50 - 1, 102, 102);
            context.closePath(); */

            /* context.beginPath();
            context.arc(this.x, this.y, 50, 0, 2 * Math.PI, false);
            context.clip();
            context.clearRect(this.x - 50 - 1, this.y - 50 - 1, 102, 102); */
            context.save();
            context.globalCompositeOperation = 'destination-out';
            context.beginPath();
            context.arc(this.x, this.y, 50, 0, 2 * Math.PI, false);
            context.fill();
            context.restore();
            if (this.x >= canvas.width || this.y >= canvas.height) {
                this.changeX = -Ball.getRandomNumberBetween(1, 10);
                this.changeY = -Ball.getRandomNumberBetween(1, 10);
            }
            if (this.x < 0 || this.y < 0) {
                this.changeX = Ball.getRandomNumberBetween(1, 10);
                this.changeY = Ball.getRandomNumberBetween(1, 10);
            }
            this.x += this.changeX;
            this.y += this.changeY;
            context.arc(this.x, this.y, 50, 0, Math.PI * 2);
            context.fillStyle = "black";
            context.fill();
        }
        static getRandomNumberBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        /* x = 0,
        y = 50, */
        balls = [];
    /* changeX = 1,
    changeY = 1; */

    function resizeCanvas() {
        var width = window.innerWidth - 10;
        var height = window.innerHeight - 10;

        canvas.width = width;
        canvas.height = height;
    }
    resizeCanvas();
    for (let i = 0; i < 15; i++) {
        balls.push(new Ball());
    }
    setInterval(() => {
        balls.forEach(function (ball) {
            ball.move();
        });
    }, 1);
}());