function myMap(array, callback) {
    "use strict";
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i]);
    }
    return newArray;
}

var numbers = [2, 4, 6];

function doubleIt(number) {
    "use strict";
    return number * 2;
}

console.log("myMap(numbers, doubleIt)", myMap(numbers, doubleIt));
console.log("numbers", numbers);
