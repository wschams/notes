/*global $*/
(function () {
    "use strict";

    var tagInput = $('#tag'),
        picturesElem = $("#pictures");

    $("#go").click(function () {
        $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
            { format: "json", tags: tagInput.val() }, function (data) {
                data.items.forEach(function (picture) {
                    picturesElem.append('<figure>' +
                        '<img src="' + picture.media.m + '"/>' +
                        '<figcaption><h2>' + picture.title + '</h2></figcaption>' +
                        '</figure>');
                });
            });
    });
}());
