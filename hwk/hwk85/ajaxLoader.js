/*global $ */
(function () {
    "use strict";

    document.getElementById('button').addEventListener('click', function () {
        var url = document.getElementById('input').value;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (url && request.readyState === 2) {
                document.getElementById('div').classList.add('spinner');
            }
            if (url && request.readyState === 4) {
                document.getElementById('div').classList.remove('spinner');
                if (request.status < 400) {
                    document.body.append(request.responseText);
                } else {
                    document.body.append(pcs.messagebox.show("File " + url + " " + request.statusText));
                }
            }
        };

        request.open('GET', url);
        request.send();
    });
}());