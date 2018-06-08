var app = (function (theModuleObject) {
    "use strict";

    console.log('module1 got', theModuleObject);

    theModuleObject.a = function () {
        console.log('Function a');
    };

    theModuleObject.b = function () {
        console.log('Function b');
    };

    return theModuleObject;
}(app || {}));

/*var x = 1;
var y = 4;
var z = x || y;
console.log(z);*/