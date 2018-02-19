var Ur = function() {};
new Ur() //=> Ur {}
new Ur() === new Ur() //=> false
Ur.prototype //=> Ur {}
Ur.prototype.language = 'JavaScript';
var continent = new Ur();
continent.language //=> 'JavaScript'
// That’s very interesting! Instances seem to behave as if they had the same
// elements as their constructor’s prototype.
continent.language = 'CoffeeScript';
continent //=> Ur { language: 'CoffeeScript' }
continent.language //=> 'CoffeScript'
// You can set elements of an instance, and they “override” the constructor’s
// prototype, but they don’t actually change the constructor’s prototype
var another = new Ur();
another.language //=> 'JavaScript'
continent.constructor //=> [Function]
continent.constructor === Ur //=> true
// Every instance acquires a constructor element that is initialized to their
// constructor. This is true even for objects we don’t create with new in our
// own code:
// {}.constructor //=> [Function: Object]
Ur.prototype.constructor //=> [Function]
Ur.prototype.constructor === Ur //=> true
Ur.constructor //=> [Function: Function]

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

console.log(Vehicle.prototype.drive); // [Function: drive];
console.log(Lexus.prototype.drive); // [Function: drive];
console.log(vehicle.__proto__); // Vehicle {}; -> Vehicle.prototype
console.log(lexus.__proto__); // Lexus {}; -> Lexus.prototype
console.log(Lexus.__proto__); // [Function: Vehicle];

