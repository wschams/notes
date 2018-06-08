/*global $*/
(function () {
    "use strict";

    var theParts = $('.part');

    theParts
        .draggable({
            stack: '.part',
            stop: function (event, ui) {
                var currentState = [];
                theParts.each(function () {
                    var part = $(this);
                    currentState.push({
                        part: part.attr('src'),
                        x: part.css('left'),
                        y: part.css('top')
                    });
                });
                localStorage.parts = JSON.stringify(currentState);
            }
        });

    if (localStorage.parts) {
        var oldPositions = JSON.parse(localStorage.parts);
        oldPositions.forEach(function (oldPosition) {
            var part = $('img[src="' + oldPosition.part + '"]');
            part.css({ left: oldPosition.x, top: oldPosition.y });
        });
    }
}());