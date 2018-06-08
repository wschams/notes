(function () {
    "use strict";

    var colorPicker = get("color");
    var backgroundPicker = get("bgcolor");

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(elem, property, value) {
        elem.style[property] = value;
    }

    get("theForm").addEventListener("submit", function (event) {
        setCss(document.body, 'color', colorPicker.value);
        setCss(document.body, 'backgroundColor', backgroundPicker.value);

        event.preventDefault();
    });

}());