/*global $, pcs*/
(function () {
    "use strict";

    var contactTable = $("#contactTable tbody"),
        contacts = [];

    contactTable.click(function (event) {
        if (event.target.nodeName === 'BUTTON') {
            var tr = $(event.target).closest('tr'),
                contactId = tr.data('contactId');
            $.post("deleteContact.php", { id: contactId }, function () {
                tr.remove();
            }).fail(function (jqxhr) {
                pcs.messagebox.show("Error: " + jqxhr.responseText);
            });
        }
    });

    function addContact(contact) {
        // ignore dups (which we shouldnt really be getting)
        if (contacts.find(function (elem) {
            return elem.Id === contact.Id;
        })) {
            return;
        }

        contacts.push(contact);

        if (contacts.length === 1) {
            contactTable.empty();
        }

        var theRow = $('<tr>' +
            '<td>' + contact.firstName + '</td>' +
            '<td>' + contact.lastName + '</td>' +
            '<td>' + contact.email + '</td>' +
            '<td>' + contact.phone + '</td>' +
            '<td><button>delete</button></td>' +
            '</tr>'
        ).appendTo(contactTable)
            .data('contactId', contact.Id);
        /*theRow.find('button')
            .click(function () {
                $.post("deleteContact.php", { id: contact.Id }, function () {
                    theRow.remove();
                }).fail(function (jqxhr) {
                    pcs.messagebox.show("Error: " + jqxhr.responseText);
                });
            });*/
    }

    var firstNameInput = $("#first");
    var lastNameInput = $("#last");
    var emailInput = $("#email");
    var phoneInput = $("#phone");
    var addContactForm = $("#addContactForm");

    function hideAddContactForm() {
        addContactForm.slideUp();
        addContactForm[0].reset();
    }

    addContactForm.on("submit", function (event) {
        var newContact = {
            firstName: firstNameInput.val(),
            lastName: lastNameInput.val(),
            email: emailInput.val(),
            phone: phoneInput.val()
        };
        $.post("addContact.php", newContact, function (id) {
            newContact.Id = id;
            addContact(newContact);
            hideAddContactForm();
        }).fail(function (jqxhr) {
            pcs.messagebox.show("Error: " + jqxhr.responseText);
        });

        event.preventDefault();
    });

    $("#cancel").click(hideAddContactForm);

    $("#add").click(function () {
        addContactForm.slideDown();
    });

    function loadContacts() {
        // should pass timestamp or last id to only get new data
        $.getJSON("getContacts.php?callback=?", function (loadedContacts) {
            loadedContacts.forEach(addContact);
        })
            .fail(function (jqxhr) {
                pcs.messagebox.show("Error: " + jqxhr.responseText);
            });
    }

    loadContacts();
    setInterval(loadContacts, 5000);
}());