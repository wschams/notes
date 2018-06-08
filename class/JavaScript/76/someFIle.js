var x = (function () {
    'use strict';

    var data = "some data";

    return {
        one: function () {
            console.log("one " + data);
        },
        two: function () {
            console.log("two " + data);
        }
    };
}());

x.one();
x.two();