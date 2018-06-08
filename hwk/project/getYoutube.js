/*global $, pcs*/
(function () {
    "use strict";

    $.get("getYoutube.php", function (loadedYoutube) {
        $('body').append(loadedYoutube);
    }).fail(function (jqxhr) {
        pcs.messagebox.show("Error: " + jqxhr.responseText);
    });
    $('body').contextmenu(function (event) {
        var q = $('#masthead-search-term').val();
        $.get("getYoutubeVideo.1.php", { search: q }, function (loadedYoutubeVideo) {
            $('body').remove(loadedYoutube);
            $('body').append(loadedYoutubeVideo);
        }).fail(function (jqxhr) {
            pcs.messagebox.show("Error: " + jqxhr.responseText);
        });
    }
    });
}());