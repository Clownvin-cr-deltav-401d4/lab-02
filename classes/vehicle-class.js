'use strict';

class Vehicle {
  //Name should be called model, imo, but I'll keep it as name here at least, so code doens't need to be changed
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return 'Moving Forward';
  }
  
  stop() {
    return 'Stopping';
  }
}

class Car extends Vehicle {
  constructor(model) {
    super(model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(model) {
    super(model, 2);
  }

  wheelie() {
    return 'Wheee!';
  }
}

function createVehicle(model, wheels) {
  switch (wheels) {
  case 2:
    return new Motorcycle(model);
  case 4:
    return new Car(model);
  default:
    return new Vehicle(model, wheels);
  }
}

module.exports = { Vehicle, Car, Motorcycle, createVehicle };