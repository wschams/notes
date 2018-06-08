var app = app || {};

app.stringUtils = (function (stringUtils) {
    "use strict";

    stringUtils.stringCompare = function (string1, string2) {
        return string1.toUpperCase() === string2.toUpperCase();
    };
     

    return stringUtils;
}(app.stringUtils || {}));