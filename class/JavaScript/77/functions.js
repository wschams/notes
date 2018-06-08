"use strict";

var functions = [];

/*function createFunction(x) {
    return function () {
        console.log(x);
    };
}*/

for (var i = 0; i < 5; i++) {
    //for (let i = 0; i < 5; i++) {
    console.log('Creating function #' + i);
    /*functions[i] = function () {
        console.log(i);
    };*/

    //functions[i] = createFunction(i);

    /* jshint -W083 */
    functions[i] = (function (x) {
        return function () {
            console.log(x);
        };
    }(i));
    /*jshint -W083 */

    // functions[i](); works!
}

functions.forEach(function (func) {
    func();
});