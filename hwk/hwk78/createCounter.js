var app = app || {};
app.createCounters = (function (ACounterObject) {
    "use strict";
    
    var createdCounters = 0;
    ACounterObject.createCounter = function() {
        createdCounters++;
        //counter = 0;
        var counter = 0;
        return {
            //counter: counter,
            increment : function () {
                counter++;
        },
            getCounter : function() {
                return counter;
        }
        };
    };
    ACounterObject.getAmountCreated = function() {
        return createdCounters;
    };
    
    return ACounterObject;
}(app.createCounters || {}));


