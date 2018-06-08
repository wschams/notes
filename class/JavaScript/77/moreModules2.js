var app = app || {};

app.views = (function (views) {
    "use strict";

    views.viewFunction = function () {
        console.log("Im a view function");
    };

    return views;
}(app.views || {}));