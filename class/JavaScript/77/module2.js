var app = (function (theModuleObject) {
    "use strict";

    console.log('module2 got', theModuleObject);

    theModuleObject.c = function () {
        console.log('Function c');
    };

    theModuleObject.d = function () {
        console.log('Function d');
    };

    return theModuleObject;
}(app || {}));
