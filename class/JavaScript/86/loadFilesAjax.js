/*global $*/
(function () {
    'use strict';

    var theFilenameInput = $('#filename'),
        textElement = $('#loadedText'),
        theSpinner = $('#spinner'),
        errorElement = $('#error');

    $('#load').click(function () {
        var fileToLoad = theFilenameInput.val();

        errorElement.hide();
        theSpinner.show();
        $.get(fileToLoad, function (loadedText) {
            textElement.text(loadedText);
        }).fail(function (jqxhr, status, statusText) {
            errorElement.text("Failed to load file: " + jqxhr.status + " " + statusText);
            errorElement.show();
        }).always(function () {
            theSpinner.hide();
        });
    });
}());