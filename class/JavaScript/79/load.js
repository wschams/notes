(function () {
    "use strict";

    window.onload = function () {
        var allowNavigation = false;

        var theButton = document.getElementById("theButton");
        theButton.style.color = "black";
        theButton.style.backgroundColor = "red";

        theButton.addEventListener('click', function () {
            console.log("Button was clicked");
            allowNavigation = true;
        });


        /// old browser support
        function addEventListener(elem, event, callback) {
            // browser sniffing
            /*if(naviagtor.userAgent.indexof("IE")) { // something like this...
                elem.attachEvent(event, callback);
            } else if (naviagtor.userAgent.indexof("chrome")) { // something like this...
                eleme.addEventListener(event, callback);
            } else {
                ...
            }*/

            // feature detection
            if (elem.addEventListener) { // if this std function exists use it
                elem.addEventListener(event, callback);
            } else if (elem.attachEvent) {
                elem.attachEvent(event, callback);
            }
        }

        addEventListener(theButton, 'click', function () {
            console.log("Button was clicked");
        });

        var theDiv = document.getElementById("theDiv");
        addEventListener(theDiv, 'click', function (event) {
            console.log("theDiv was clicked", event);
            if (event.target.innerHTML === '1') {
                console.log("Button 1 was clicked");
            } else if (event.target.innerHTML === '2') {
                console.log("Button 2 was clicked");
            } else if (event.target.innerHTML === '3') {
                console.log("Button 3 was clicked");
            }
        });

        var theFirstButton = document.getElementById("theFirstButton");
        addEventListener(theFirstButton, 'click', function (event) {
            console.log("theFirstButton was clicked");
            event.stopPropagation();
        });

        var theAnchor = document.getElementById("theAnchor");
        addEventListener(theAnchor, 'click', function (event) {
            console.log("theAnchor was clicked");
            if (!allowNavigation) {
                console.log("navigation blocked!");
                event.preventDefault();
            }
        });
    };

}());