const name = 'John';

console.log(name); // John

function foo () {
    console.log(name); 
    console.log(this.name);
}

foo(); // John, undefined

const bindName = 'John';

function bar () {
    console.log(name);
    console.log(this.name);
}

const object = { bar: bar, name: 'Oscar' };

object.bar(); // John, Oscar
bar.call(object); // John, Oscar
bar(); //John, undefined

