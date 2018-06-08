//(function () {
//'use strict';

//const $ = require('jquery');
import $ from 'jquery';

const foo = "It really really Works";

setTimeout(() => {
    $('#theDiv').css({ color: 'red', backgroundColor: 'black', fontSize: '72px' })
        .text(`Hello class. ${foo}!!`);
}, 2000);

//bar();
//x = 5;
//}());