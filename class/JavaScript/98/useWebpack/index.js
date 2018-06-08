'use strict';

const moment = require('moment');

//(function () {
const datePicker = document.getElementById('selectedDate'),
    result = document.getElementById('result');

datePicker.addEventListener('change', () => {
    result.innerHTML = moment(datePicker.value).fromNow();
});
//}());