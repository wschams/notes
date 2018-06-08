(function () {
    "use strict";

    var theButton = document.getElementById("theButton");
    var intervalId;
    var i = 0;
    //var running = false;
    var startString = 'Start';
    var stopString = 'Stop';

    function moveIt() {
        i += 10;
        theButton.style.top = i + 'px';
        // setTimeout(moveIt, 250);
    }


    var theMoveItButton = document.getElementById("theMoveItButton");
    theMoveItButton.innerHTML = startString;

    theMoveItButton.addEventListener('click', function () {
        //if (!running) {
        //if (!intervalId) {
        if (theMoveItButton.innerHTML === startString) {
            intervalId = setInterval(moveIt, 250);
            theMoveItButton.innerHTML = stopString;
            //running = true;
        } else {
            clearInterval(intervalId);
            theMoveItButton.innerHTML = startString;
            //running = false;
            //intervalId = 0;
        }
    });

    //moveIt();

}());