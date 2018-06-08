var app = app || {};

app.monthUtils.getMonthNumber = (function (getMonthNumber) {
    'use strict';

    var months = [
            "January",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December" 
        ];

        getMonthNumber.getNumber = function (month){
            for(var i = 0; i < months.length; i++) {
                if(months[i] === month) {
                    return i + 1;
                }
            }
        };
    
        return getMonthNumber;
}(app.monthUtils.getMonthNumber || {}));