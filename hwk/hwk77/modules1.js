var app = app || {};

app.monthUtils = (function (monthUtils) {
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
    monthUtils.getMonthName = function (number){
            return months[number - 1];
        };
    monthUtils.getMonthNumber = function (month){
        for(var i = 0; i < months.length; i++) {
            if(months[i] === month) {
                return i + 1;
            }
        }
    };
    
        return monthUtils;
}(app.monthUtils || {}));