//can accept multiple inputs
/*global $ */
(function () {
    "use strict";

    $(document).ajaxStart(function () {
        $('div').addClass('spinner');
    });
    $(document).ajaxStop(function () {
        $('div').removeClass('spinner');
    });

    $('button')
        .click(function () {
            var urlArray = $('input').val().split(', ');
            urlArray.forEach(function (element) {
                var url = element;
                if (url) {
                    $.get(url, function (loadedData) {
                        $('body').append(loadedData);
                    }).fail(function (xhr, status, statusText) {
                        $('body').append(pcs.messagebox.show("File " + url + " " + statusText));
                    });
                }
            });
        });
}());