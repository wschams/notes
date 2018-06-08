(function () {
    "use strict";

    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        x = 0,
        y = 50,
        changeX = 1,
        changeY = 1;

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
        if (x >= canvas.width || y >= canvas.height) {
            changeX = -getRandomNumberBetween(1, 10);
            changeY = -getRandomNumberBetween(1, 10);
        }
        if (x < 0 || y < 0) {
            changeX = getRandomNumberBetween(1, 10);
            changeY = getRandomNumberBetween(1, 10);
        }
        x += changeX;
        y += changeY;
        context.arc(x, y, 50, 0, Math.PI * 2);
        context.fillStyle = "red";
        context.fill();
    }, 1);
    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}());
(function () {
    "use strict";

    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        x = 0,
        y = 50,
        changeX = 1,
        changeY = 1;

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
        if (x >= canvas.width || y >= canvas.height) {
            changeX = -getRandomNumberBetween(1, 10);
            changeY = -getRandomNumberBetween(1, 10);
        }
        if (x < 0 || y < 0) {
            changeX = getRandomNumberBetween(1, 10);
            changeY = getRandomNumberBetween(1, 10);
        }
        x += changeX;
        y += changeY;
        context.arc(x, y, 50, 0, Math.PI * 2);
        context.fillStyle = "red";
        context.fill();
    }, 1);
    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}());
(function () {
    "use strict";

    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        x = 0,
        y = 50,
        changeX = 1,
        changeY = 1;

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
        if (x >= canvas.width || y >= canvas.height) {
            changeX = -getRandomNumberBetween(1, 10);
            changeY = -getRandomNumberBetween(1, 10);
        }
        if (x < 0 || y < 0) {
            changeX = getRandomNumberBetween(1, 10);
            changeY = getRandomNumberBetween(1, 10);
        }
        x += changeX;
        y += changeY;
        context.arc(x, y, 50, 0, Math.PI * 2);
        context.fillStyle = "red";
        context.fill();
    }, 1);
    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}());
(function () {
    "use strict";

    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        x = 0,
        y = 50,
        changeX = 1,
        changeY = 1;

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
        if (x >= canvas.width || y >= canvas.height) {
            changeX = -getRandomNumberBetween(1, 10);
            changeY = -getRandomNumberBetween(1, 10);
        }
        if (x < 0 || y < 0) {
            changeX = getRandomNumberBetween(1, 10);
            changeY = getRandomNumberBetween(1, 10);
        }
        x += changeX;
        y += changeY;
        context.arc(x, y, 50, 0, Math.PI * 2);
        context.fillStyle = "red";
        context.fill();
    }, 1);
    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}());