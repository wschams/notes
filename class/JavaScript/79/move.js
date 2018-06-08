(function () {
    "use strict";

    var theButton = document.getElementById("theButton");

    /*for (var i = 0; i < 100; i++) {
        theButton.style.top = i + 'px';
    }*/

    var i = 0;
    var theMoveItButton = document.getElementById("theMoveItButton");
    theMoveItButton.addEventListener('click', function () {
        i += 10;
        theButton.style.top = i + 'px';
    });
}());