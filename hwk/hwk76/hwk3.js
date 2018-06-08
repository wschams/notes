var theMonthUtils = (function(){
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
    function getMonthName(number){
        return months[number - 1];
    }
    function getMonthNumber(month){
        for(var i = 0; i < months.length; i++) {
            if(months[i] === month) {
                return i + 1;
            }
        }
    }
    return {
        getMonthName: getMonthName,
        getMonthNumber: getMonthNumber
    };
}());
console.log('theMonthUtils.getMonthName(1)', theMonthUtils.getMonthName(1));
console.log('theMonthUtils.getMonthNumber("April")', theMonthUtils.getMonthNumber('April'));

var theCalculateInterest = (function(){
    'use strict';
    var rate;
    var yearAmount;
    return {
        setInterest: function(interest) {
             rate = interest;
        },
        setYears: function(years) {
             yearAmount = years;
        },
        getInterest: function(principle) {
            for(var i = 0; i < yearAmount; i++) {  
                principle += principle * rate;
            }
            return principle;
        }
    };
}());
theCalculateInterest.setInterest(.1);
theCalculateInterest.setYears(3);
console.log(theCalculateInterest.getInterest(100));