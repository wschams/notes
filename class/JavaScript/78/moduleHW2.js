var app = app || {};

app.utils = (function (module) {
    "use strict";

    module.caseInsensitiveCompare = function (a, b) {
        return a.toUpperCase() === b.toUpperCase();
    };

    return module;
}(app.utils || {}));

console.log("app.utils.caseInsensitiveCompare('Donald', 'DONAld')", app.utils.caseInsensitiveCompare('Donald', 'DONAld'));
console.log("app.utils.caseInsensitiveCompare('Donald', 'Donalds')", app.utils.caseInsensitiveCompare('Donald', 'Donalds'));

