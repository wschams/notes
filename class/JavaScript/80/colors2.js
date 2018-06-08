(function () {
    "use strict";

    var colorPicker = get("color");
    var backgroundPicker = get("bgcolor");
    var someTextInput = get("sometext");

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(elem, property, value) {
        elem.style[property] = value;
    }

    someTextInput.addEventListener("input", function () {
        console.log('input', someTextInput.value);
    });

    someTextInput.addEventListener("change", function () {
        console.log('change', someTextInput.value);
    });

    colorPicker.addEventListener("change", function () {
        setCss(document.body, 'color', colorPicker.value);
    });

    backgroundPicker.addEventListener("change", function () {
        setCss(document.body, 'backgroundColor', backgroundPicker.value);
    });

}());