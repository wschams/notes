var monthUtils = (function () {
    "use strict";

    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    function getNumber(name) {
        for (var i = 0; i < months.length; i++) {
            if (months[i] === name) {
                return i + 1;
            }
        }
        return -1;
    }

    return {
        getMonthName: function (num) {
            return months[num - 1];
        },
        getMonthNumber: getNumber/*function (name) {
            for (var i = 0; i < months.length; i++) {
                if (months[i] === name) {
                    return i + 1;
                }
            }
            return -1;
        }*/
    };
}());

console.log("monthUtils.getMonthName(5)", monthUtils.getMonthName(5));
console.log("monthUtils.getMonthNumber('May')", monthUtils.getMonthNumber('May'));