/*global app*/
(function () {
    "use strict";

    var c = app.counter2();
    var c2 = app.counter2();

    var i;
    for (i = 0; i < 10; i++) {
        app.counter.increment();
    }

    for (i = 0; i < 5; i++) {
        c.increment();
    }

    for (i = 0; i < 15; i++) {
        c2.increment();
    }

    console.log(app.counter.getCount(), c.getCount(), c2.getCount());

}());