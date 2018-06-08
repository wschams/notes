/*global $, pcs*/
(function () {
    "use strict";
    //drop extras on floor

    $.getJSON("https://jsonplaceholder.typicode.com/users", function (loadedBlog) {
        loadedBlog.forEach(user => {
            let theUser = $('<section><p>' + user.name + '</p><p>' + user.website +
                '</p><p>' + user.company.name + '</p></section>')
                .appendTo($('body'))
                .click(function () {
                    $.getJSON("https://jsonplaceholder.typicode.com/posts?=",
                        {
                            userId: user.id
                        }, function (loadedBlog2) {
                            loadedBlog2.forEach(blog => {
                                $('body').append(blog.body);
                            });
                        })
                        .fail(function (jqxhr) {
                            pcs.messagebox.show("Error: " + jqxhr.responseText);
                        });
                });
        });
    })
        .fail(function (jqxhr) {
            pcs.messagebox.show("Error: " + jqxhr.responseText);
        });
}());