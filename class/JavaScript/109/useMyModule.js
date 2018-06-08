const myModule = require('./myModule');

//myModule.getGreeting();
myModule.sayHi();

const Person = require('./Person');
const donald = new Person("Donald", "dtrump@whitehouse.gov");
donald.print();