function Person(name, email) {
    this.name = name;
    this.email = email;
}

Person.prototype.print = function () {
    console.log(this.name, this.email);
}

module.exports = Person;