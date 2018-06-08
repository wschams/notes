var organism = {};
var animal = Object.create(organism);
var mammal = Object.create(animal);
var dog = Object.create(mammal);

dog.print = function () {
    console.log("Name: ", this.name);
    console.log("Color: ", this.color);
    console.log("Breed: ", this.breed);
    console.log("Weight: ", this.weight);
}

var spot = Object.create(dog);
spot.name = "Spot";
spot.color = "White";
spot.breed = "Poodle";
spot.weight = "50";

var rover = Object.create(spot);
rover.name = "Rover";
rover.color = "Black";

spot.print();
rover.print();

