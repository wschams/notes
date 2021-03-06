//can accept multiple inputs and works
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
                var dataType = element.split('.').pop();
                if (dataType === 'js') {
                    dataType = 'script';
                }
                if (url) {
                    $.get(url, function (loadedData) {
                        if (dataType !== 'script') {
                            $('body').append(loadedData);
                        }
                    }, null, dataType)
                        .fail(function (xhr, status, statusText) {
                            $('body').append(pcs.messagebox.show("File " + url + " " + statusText));
                        });
                }
            });
        });
}());