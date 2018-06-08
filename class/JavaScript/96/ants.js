(function () {
    "use strict";

    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        numberOfAntsInput = document.getElementById("numberOfAnts"),
        antColorInput = document.getElementById("antColor"),
        ants = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth - 10;
        canvas.height = window.innerHeight - 10;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    class Ant {
        constructor(color) {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.color = color || 'black';
            this.brains = 0;
        }

        move() {
            if (--this.brains <= 0) {
                this.brains = getRandomNumberBetween(1, 10);
                this.moveX = getRandomNumberBetween(-2, 2);
                this.moveY = getRandomNumberBetween(-2, 2);
            }

            this.x += this.moveX;
            this.y += this.moveY;

            if (this.x < 0) {
                this.x = 0;
            } else if (this.x >= canvas.width) {
                this.x = canvas.width - 1;
            }

            if (this.y < 0) {
                this.y = 0;
            } else if (this.y >= canvas.height) {
                this.y = canvas.height - 1;
            }

            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, 2, 2);
        }

        static getRandomNumberBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }



    /*var ant = new Ant();
    setInterval(() => {
        ant.move();
    }, 100);*/

    function addAnts(numberToAdd, color) {
        for (var i = 0; i < numberToAdd; i++) {
            ants.push(new Ant(color));
        }
    }

    document.getElementById("addAnts").addEventListener('click', () => {
        addAnts(numberOfAntsInput.value, antColorInput.value);
    });

    addAnts(1000);

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.move());
    }, 100);
}());