var app = app || {};

app.models = (function (models) {
    "use strict";

    models.modelFunction = function () {
        console.log("Im a model function");
    };

    return models;
}(app.models || {}));