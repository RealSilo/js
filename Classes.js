require('babel-register')({
   presets: [ 'es2015' ]
});

function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'driving';
}

var car = new Car({ title: 'Focus' });
console.log(car.drive());
console.log(car);

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

var toyota = new Toyota({ color: 'red', title: 'Corolla' });
console.log('Toyota ' + toyota.drive());
console.log(toyota.honk());
console.log(toyota);

console.log('----- ES6 -----');

class Vehicle {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'driving';
  }
}

const vehicle = new Vehicle({ title: 'Lexus' });
console.log(vehicle);
console.log(vehicle.drive());

class Lexus extends Vehicle {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const lexus = new Lexus({ color: 'blue', title: 'RX 350'} );
console.log('Lexus ' + lexus.drive());
console.log(lexus.honk());
console.log(lexus);
