(function () {
    "use strict";

    function get(id) {
        return document.getElementById(id);
    }

    var firstName;
    var lastName;
    var email;
    var phone;
    //create loop
    get("firstName").addEventListener("input", function () {
        firstName = get("firstName").value;
    });
    get("lastName").addEventListener("input", function () {
        lastName = get('lastName').value;
    });
    get("email").addEventListener("input", function () {
        email = get('email').value;
    });
    get("phone").addEventListener("input", function () {
        phone = get('phone').value;
    });

    var contactTable = get("contactTable"),
        contacts = [];

    function addContact() {
        var contact = {
            firstNam: firstName,
            lastNam: lastName,
            emai: email,
            phon: phone
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

        firstNameCell.innerHTML = contact.firstNam;
        lastNameCell.innerHTML = contact.lastNam;
        emailCell.innerHTML = contact.emai;
        phoneCell.innerHTML = contact.phon;
    }

    get("add").addEventListener("click", addContact);

    get("theForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });
}());