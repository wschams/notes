'use strict';

var person = {
    firstName: 'Donald',
    lastName: 'Trump',
    position: 'President',
    print: function () {
        console.log('First Name:' + this.firstName);
        console.log('Last Name:' + this.lastName);
        console.log('Position:' + this.position);
    }
};

var person2 = {
    firstName: 'Jared',
    lastName: 'Kushner',
    position: 'Presidents Helper',
    print: function () {
        console.log('First Name:' + this.firstName);
        console.log('Last Name:' + this.lastName);
        console.log('Position:' + this.position);
    }
};

console.log('person', person);

function printPerson(person) {
    console.log('First Name:' + person.firstName);
    console.log('Last Name:' + person.lastName);
    console.log('Position:' + person.position);
}

printPerson(person);
person.print();

printPerson(person2);
person2.print();

function createPerson(firstName, lastName, position) {
    return {
        firstName: firstName,
        lastName: lastName,
        position: position,
        print: function () {
            console.log('First Name:' + this.firstName);
            console.log('Last Name:' + this.lastName);
            console.log('Position:' + this.position);
        }
    };
}

var melania = createPerson("Melania", "Trump", "FLOTUS");
var ivanka = createPerson("Ivanka", "Trump", "Presidents Daughter");

melania.print();
ivanka.print();

///

var someJSON = '{"name": "Bill", "age": 30, "hobbies": ["golf", "fishing"]}';
console.log(someJSON, typeof someJSON);

var asAnObject = JSON.parse(someJSON);
console.log(asAnObject, typeof asAnObject);

var backAsAString = JSON.stringify(asAnObject);
console.log(backAsAString, typeof backAsAString);

console.log(JSON.stringify(ivanka));