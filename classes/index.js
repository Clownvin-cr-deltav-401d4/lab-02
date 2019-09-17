'use strict';

const { createVehicle, Vehicle, Car, Motorcycle } = require('./vehicle-constructor.js');

// Implement a car and motorcycle using a Constructor
const mazda = new Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class


