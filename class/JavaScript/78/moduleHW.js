var app = app || {};

app.utils = (function (module) {
    "use strict";

    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    /*function getMonthNumber(name) {
        for (var i = 0; i < months.length; i++) {
            if (months[i] === name) {
                return i + 1;
            }
        }
        return -1;
    }

    function getMonthName(num) {
        return months[num - 1];
    }*/

    //console.log("getMonthName(5)", getMonthName(5));
    //console.log("getMonthNumber('May')", getMonthNumber('May'));

    /*return {
        getMonthNumber: getMonthNumber,
        getMonthName: getMonthName
    }*/
    /*return {
        getMonthNumber: function (name) {
            for (var i = 0; i < months.length; i++) {
                if (months[i] === name) {
                    return i + 1;
                }
            }
            return -1;
        },
        getMonthName: function (num) {
            return months[num - 1];
        }
    };*/
    module.getMonthNumber = function (name) {
        for (var i = 0; i < months.length; i++) {
            if (months[i] === name) {
                return i + 1;
            }
        }
        return -1;
    };

    module.getMonthName = function (num) {
        return months[num - 1];
    };

    return module;
}(app.utils || {}));

console.log("app.utils.getMonthName(5)", app.utils.getMonthName(5));
console.log("app.utils.getMonthNumber('May')", app.utils.getMonthNumber('May'));

var monthObject = {
    months: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"],
    getMonthNumber: function (name) {
        "use strict";
        for (var i = 0; i < this.months.length; i++) {
            if (this.months[i] === name) {
                return i + 1;
            }
        }
        return -1;
    },
    getMonthName: function (num) {
        "use strict";
        return this.months[num - 1];
    }
};


console.log("monthObject.getMonthName(5)", monthObject.getMonthName(5));
console.log("monthObject.getMonthNumber('May')", monthObject.getMonthNumber('May'));