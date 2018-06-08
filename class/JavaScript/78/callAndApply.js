(function () {
    "use strict";

    /*var account1 = {
        balance: 0
    };
    var account2 = {
        balance: 0
    }*/

    function createAccount(openingBalance) {
        return {
            balance: openingBalance
        };
    }

    function addInterest(amount) {
        this.balance += amount;
    }

    var account1 = createAccount(0);
    var account2 = createAccount(0);

    //addInterest(5);

    addInterest.call(account1, 5);
    addInterest.apply(account2, [15]);

    console.log(account1, account2);

    var add5ToAccount1 = addInterest.bind(account1, 5);
    add5ToAccount1();
    add5ToAccount1();

    console.log(account1, account2);

    function greeter(name) {
        console.log(this.greeting + ' ' + name);
    }

    var helloGreeter = {
        greeting: "Hello"
    };
    var howdyGreeter = {
        greeting: "Howdy"
    };

    var sayHelloToTheDonald = greeter.bind(helloGreeter, "Donald");
    var sayHowdyToTheDonald = greeter.bind(howdyGreeter, "Donald");

    for (var i = 0; i < 100; i++) {
        sayHelloToTheDonald();
        sayHowdyToTheDonald();
    }
}());