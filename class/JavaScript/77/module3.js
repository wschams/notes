var app = (function (theModuleObject) {
    "use strict";

    console.log('module3 got', theModuleObject);

    theModuleObject.e = function () {
        console.log('Function e');
    };

    theModuleObject.f = function () {
        console.log('Function f');
    };

    return theModuleObject;
}(app || {}));
