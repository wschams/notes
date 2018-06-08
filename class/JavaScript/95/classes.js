(function () {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log("Now going ", speed);
        }

        print() {
            console.log("Color", this.color);
            console.log("Speed", this.speed);
        }

        static foo() {
            console.log("static vehicle function called");
        }

        get speed() {
            return this._speed;
        }

        set speed(speed) {
            this._speed = speed;
        }
    }

    var v = new Vehicle("white");
    v.go(20);
    v.print();

    Vehicle.foo();
    //Vehicle.go(20);
    console.log(v.speed);
    v.speed = 100;
    console.log(v.speed);


    ///////////////////////////////////////
    class Car {
        drive() {
            console.log("Vroom!");
        }
    }

    function ConstructorCar() { }
    ConstructorCar.prototype.drive = function () { console.log("Vroom!"); };

    var factoryCarDrive = {
        drive: function () { console.log("Vroom!"); }
    };
    function factoryCar() {
        return Object.create(factoryCarDrive);
    }

    var car = new Car(),
        constructorCar = new ConstructorCar(),
        factoryCar1 = factoryCar();

    car.drive();
    constructorCar.drive();
    factoryCar1.drive();

    console.log(car, constructorCar, factoryCar1);

    ///////////////////////////////////////////////////////////////////////////

    function Person() {
        this.age = 0;

        var that = this;
        setInterval(function () {
            that.age++;
        }, 1000);
    }

    var p = new Person();
    setTimeout(function () {
        console.log(p.age);
    }, 5000);

    function Person2() {
        this.age = 0;

        setInterval(() => {
            this.age++;
        }, 1000);
    }

    var p2 = new Person2();
    setTimeout(() => {
        console.log(p2.age);
    }, 5000);


    ////////////////////////////////

    var myObj = {
        a: 1,
        b: 2,
        c: 3
    };

    for (var prop in myObj) {
        console.log(prop, myObj[prop]);
    }

    var mySecondObj = Object.create(myObj);
    mySecondObj.d = 4;

    for (prop in mySecondObj) {
        if (mySecondObj.hasOwnProperty(prop)) {
            console.log(prop, mySecondObj[prop]);
        }
    }

    Object.keys(mySecondObj).forEach(p => console.log(mySecondObj[p]));
}());