/*global $, tzvi*/
(function () {
    "use strict";

    var form = $('form');
    var noteInput = $('textarea');
    var categoryInput = $('input');
    var ul = $('ul');

    $.getJSON("getNotes.php", function (notesData) {
        ul.empty();
        notesData.forEach(function (n) {
            displayNote(n);
        });
    }).fail(function (jqxhr) {
        tzvi.messagebox.show("Error: " + jqxhr.responseText);
    });

    form.on("submit", function (event) {
        var newNote = {
            note: noteInput.val(),
            category: categoryInput.val()
        };
        $.post("addNote.php", newNote, function () {
            displayNote(newNote);
            resetNote();
        }).fail(function (jqxhr) {
            tzvi.messagebox.show("Error: " + jqxhr.responseText);
        });

        event.preventDefault();
    });

    function resetNote() {
        form[0].reset();
    }

    function displayNote(n) {
        ul.append('<li class = "list-group-item">' + n.note + '</li>');
    }
}());