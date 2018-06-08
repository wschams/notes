var app = app || {};

app.monthUtils.getMonthName = (function (getMonthName) {
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
        getMonthName.getName = function (number){
            return months[number - 1];
        };
    
        return getMonthName;
}(app.monthUtils.getMonthName || {}));