var app = app || {};
app.theCounter = (function (theCounterObject) {
    "use strict";
    
    var counter = 0;
    //var x;
    theCounterObject.increment = function () {
        counter++;
    };
    theCounterObject.getCounter = function() {
        //x = counter;
        //return x;
        return counter;
    };
    return theCounterObject;
}(app.theCounter || {}));

