"use strict";

var p = {
    first: 'Donald',
    last: 'Trump',
    print: function () {
        console.log("First: " + this.first, " Last: " + this.last);
    }
};

p.print();

function createPerson(first, last) {
    return {
        first: first,
        last: last,
        print: function () {
            console.log("First: " + this.first, " Last: " + this.last);
        }
    };
}

var mike = createPerson("Mike", "Pence");
var jared = createPerson("Jared", "Kushner");
mike.print();
jared.print();

function Person(first, last) {
    this.first = first;
    this.last = last;
    /*this.print = function () {
        console.log("First: " + this.first, " Last: " + this.last);
    };*/

    //return {};
}

Person.prototype.print = function () {
    console.log("First: " + this.first, " Last: " + this.last);
};

var hillary = new Person("Hillary", "Clinton");
hillary.print();

//var bill = Person("Bill", "Clinton");
//bill.print();

Person.prototype.foo = function () { console.log('bar'); };
hillary.foo();


function Employee(first, last, department) {
    // this.first = first;
    // this.last = last;
    Person.call(this, first, last);
    this.department = department;
}

Employee.prototype = /*Person.prototype*/ /*new Person()*/ Object.create(Person.prototype);
Employee.prototype.print = function () {
    console.log("First: " + this.first, " Last: " + this.last + " Department: " + this.department);
};

var bill = new Employee("Bill", "Gates", "IT");
bill.print();
hillary.print();
