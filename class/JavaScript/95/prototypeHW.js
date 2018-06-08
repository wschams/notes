(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log("Now going ", this.speed);
    };

    Vehicle.prototype.print = function () {
        console.log("Color", this.color);
        console.log("Speed", this.speed);
    };

    var vehicle = new Vehicle("White");
    vehicle.go(20);

    Vehicle.prototype.crash = function () {
        console.log("Crash!");
        this.go(0);
    };

    vehicle.crash();
    vehicle.print();

    function Plane(color) {
        this.color = color;
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.constructor = Plane;

    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log("Now FLYING ", this.speed);
    };

    var plane = new Plane("Red");
    plane.go(25);
    plane.print();
    plane.crash();
}());