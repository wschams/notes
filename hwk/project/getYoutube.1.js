/*global $, pcs*/
(function () {
    "use strict";

    $.get("getYoutube.php", function (loadedYoutube) {
        var x = loadedYoutube;
        $('body').append(x);
    }).fail(function (jqxhr) {
        pcs.messagebox.show("Error: " + jqxhr.responseText);
    });
    $('body').contextmenu(function (event) {
        if (event.target.nodeName === 'IMG') {
            var video = $(event.target).closest('img').attr('src');
            var video1 = video.slice(0, video.lastIndexOf('/'));
            var video2 = video1.slice(video1.lastIndexOf('/'));
            var video3 = video2.slice(1);
            $.get("getYoutubeVideo.php", { video: video3 }, function (loadedYoutubeVideo) {
                $('body').remove(x);
                $('body').append(loadedYoutubeVideo);
            }).fail(function (jqxhr) {
                pcs.messagebox.show("Error: " + jqxhr.responseText);
            });
        }
    });
}());