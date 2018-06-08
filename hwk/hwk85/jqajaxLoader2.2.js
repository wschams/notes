//this file proves that data type parameter is needed in the get
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
                if (url) {
                    $.get(url, function (loadedData) {
                        if (dataType !== 'js') {
                            $('body').append(loadedData);
                        }
                    })
                        .fail(function (xhr, status, statusText) {
                            $('body').append(pcs.messagebox.show("File " + url + " " + statusText));
                        });
                }
            });
        });
}());