var app = app || {};

app.views = (function (views) {
    "use strict";

    views.viewFunction2 = function () {
        console.log("Im view function 2");
    };

    return views;
}(app.views || {}));