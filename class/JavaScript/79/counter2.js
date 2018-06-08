var app = app || {};
app.counter2 = (function () {
    "use strict";

    var numCounters = 0;

    /*return {
        create: function () {
            numCounters++;
            var count = 0;

            return {
                increment: function () {
                    count++;
                },

                getCount: function () {
                    return count;
                }
            };
        },
        getNumberOfCounters: function () {
            return numCounters;
        }
    };*/

    return function () {
        numCounters++;
        var count = 0;

        return {
            increment: function () {
                count++;
            },
            getCount: function () {
                return count;
            },
            getNumberOfCounters: function () { // a little weird...
                return numCounters;
            }
        };
    };
}());

//var c = app.counter2.create();
//var c2 = app.counter2.create();
/*var c = app.counter2();
var c2 = app.counter2();

for (var i = 0; i < 10; i++) {
    c.increment();
    c2.increment();
}
c2.increment();

console.log(c.getCount(), c2.getCount());

console.log("There are ", /*app.counter2* /c.getNumberOfCounters(), " counters");*/