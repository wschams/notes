(function () {
    "use strict";

    var contactTable = get("contactTable"),
        contacts = [];

    function get(id) {
        return document.getElementById(id);
    }

    function addContact() {
        var contact = {
            firstName: 'Donald',
            lastName: 'Trump',
            email: 'theDonald@whiyehouse.gov',
            phone: '1234567890'
        };

        contacts.push(contact);

        if (contacts.length === 1) {
            contactTable.deleteRow(1);
        }

        var row = contactTable.insertRow();
        var firstNameCell = row.insertCell();
        var lastNameCell = row.insertCell();
        var emailCell = row.insertCell();
        var phoneCell = row.insertCell();

        firstNameCell.innerHTML = "Donald";
        lastNameCell.innerHTML = "Trump";
        emailCell.innerHTML = "thedonald@whitehouse.gov";
        phoneCell.innerHTML = "1234567890";
    }

    get("add").addEventListener("click", addContact);
}());