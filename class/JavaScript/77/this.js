//"use strict";

var name = "Hillary Clinton";
var email = "hclinton@clinton.com";

function printPerson() {
    console.log('Name:', this.name, 'Email:', this.email);
}

var donald = {
    name: "Donald Trump",
    email: 'dtrump@whitehouse.gov',
    /*print: function () {
        console.log('Name:', this.name, 'Email:', this.email);
    }*/
    print: printPerson
};

var mike = {
    name: "Mike Pence",
    email: 'mpence@whitehouse.gov',
    /*print: function () {
        console.log('Name:', this.name, 'Email:', this.email);
    }*/
    print: printPerson
};

donald.print();
//printPerson();
mike.print();

var printFromDonald = donald.print;
printFromDonald();

printPerson.call(donald);
printPerson.call(mike);
printFromDonald.call(mike);
donald.print.call(mike);
donald.print.apply(mike);

///////////////

var greeter1 = {
    greeting: "Hello"
};

var greeter2 = {
    greeting: "Shalom"
};

function greet(firstName, lastName) {
    console.log(this.greeting + ' ' + firstName + ' ' + lastName);
}

greet.call(greeter1, "Donald", "Trump");
greet.call(greeter2, "Donald", "Trump");
greet.apply(greeter2, ["Donald", "Trump"]);





