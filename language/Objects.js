// function constructor
// It is a normal function that is used to construct objects.
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

// What new does:
// 1. Creates a new (empty) object (john)
// 2. Gets the prototype property of the consturction func (Person.prototype)
//    and sets it as the empty object's prototype (john.__proto__ = Person.prototype)
// 3. Calls the constructor function with the new empty object as 'this'
// 4. Returns the new object

function myNew(constructor, ...constructorArgs) {
  // Step 1
  var newObject = {};

  // Step 2
  Object.setPrototypeOf(newObject, constructor.prototype);

  // Step 3 and 4 (if the constructor returns an object then that should be returned)
  return constructor.apply(newObject, constructorArgs) || newObject;
}

// __proto__ and prototype

// Every function has prototype starts out as empty object
// It is only used if the function is used as a function constructor

// The prototype property of the function is not the prototype of the function
// It is the prototype of any objects created with the function constructor

console.log(john.__proto__); // Person {}
console.log(Person.prototype); // Person {}

Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
}

console.log(john.getFullName());
