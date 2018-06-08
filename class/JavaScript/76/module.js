/*
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getDayName(num) {
    return days[num];
}

function getDayNumber(name) {
    for (var i = 0; i < days.length; i++) {
        if (days[i] === name) {
            return i;
        }
    }
    return "NO SUCH DAY!";
}

console.log("getDayName(6)", getDayName(6));
console.log('getDayNumber("Friday")', getDayNumber("Friday"));*/

/*
var theGreatPCSDayUtils = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

    getDayName: function (num) {
        return this.days[num];
    },

    getDayNumber: function (name) {
        for (var i = 0; i < this.days.length; i++) {
            if (this.days[i] === name) {
                return i;
            }
        }
        return "NO SUCH DAY!";
    }
};

console.log("theGreatPCSDayUtils.getDayName(6)", theGreatPCSDayUtils.getDayName(6));
console.log('theGreatPCSDayUtils.getDayNumber("Friday")', theGreatPCSDayUtils.getDayNumber("Friday"));*/

/*function dayUtils() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    / *function getDayName(num) {
        return days[num];
    }
    
    function getDayNumber(name) {
        for (var i = 0; i < days.length; i++) {
            if (days[i] === name) {
                return i;
            }
        }
        return "NO SUCH DAY!";
    }

    return {
        getDayName: getDayName,
        getDayNumber: getDayNumber
    };* /

    return {
        getDayName: function (num) {
            return days[num];
        },
        getDayNumber: function (name) {
            for (var i = 0; i < days.length; i++) {
                if (days[i] === name) {
                    return i;
                }
            }
            return "NO SUCH DAY!";
        }
    };
}

var theDayUtils = dayUtils();
console.log("theDayUtils.getDayName(6)", theDayUtils.getDayName(6));
console.log('theDayUtils.getDayNumber("Friday")', theDayUtils.getDayNumber("Friday"));*/

var theDayUtils = (function () {
    'use strict';

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return {
        getDayName: function (num) {
            return days[num];
        },
        getDayNumber: function (name) {
            for (var i = 0; i < days.length; i++) {
                if (days[i] === name) {
                    return i;
                }
            }
            return "NO SUCH DAY!";
        }
    };
}());

console.log("theDayUtils.getDayName(6)", theDayUtils.getDayName(6));
console.log('theDayUtils.getDayNumber("Friday")', theDayUtils.getDayNumber("Friday"));