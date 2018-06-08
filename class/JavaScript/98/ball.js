(function () {
    const canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        ballRadius = 20;

    let ballX = ballRadius,
        ballY = ballRadius,
        dx = 5,
        dy = 5;

    function resizeCanvas() {
        canvas.width = window.innerWidth - 10;
        canvas.height = window.innerHeight - 10;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    setInterval(() => {
        //context.clearRect(0, 0, canvas.width, canvas.height);
        //context.beginPath();
        context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
        context.stroke();
        //context.fillStyle = 'green';
        //context.fill();
        //context.closePath();

        if (ballX + dx < ballRadius || ballX + dx > canvas.width - ballRadius) {
            dx = -dx;
        }

        if (ballY + dy < ballRadius || ballY + dy > canvas.height - ballRadius) {
            dy = -dy;
        }

        ballX += dx;
        ballY += dy;
    }, 10);
}());