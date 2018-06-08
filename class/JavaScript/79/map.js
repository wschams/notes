(function () {
    "use strict";

    function map(theArray, callback) {
        var result = [];
        theArray.forEach(function (element) {
            result.push(callback(element));
        });
        return result;
    }

    /*if (!Array.prototype.map) {
        Array.prototype.map = function map(callback) {
            var result = [];
            this.forEach(function (element) {
                result.push(callback(element));
            });
            return result;
        }
    }s*/

    function double(number) {
        return number * 2;
    }

    var numbers = [2, 4, 6, 8, 10];
    var doubled = map(numbers, double);

    console.log(numbers, doubled);

    console.log(numbers, map(numbers, function (n) {
        return n * 3;
    }));

}());