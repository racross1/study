// Destructuring
// The destructuring assignment syntax is a JavaScript expression that makes it possible to 
// unpack values from arrays, or properties from objects, into distinct variables.

let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}


//Array destructuring - basic variable assignment
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

//Assignment separate from declaration
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2


// Default values
// A variable can be assigned a default, in the case that the value unpacked from the array is undefined.

let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7


// Object destructuring
// Basic assignment
const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true



// Array Destructuring
// A common challenge in a JavaScript interview asks you to remove the first two elements of an array using array destructuring. 
// Let’s look at the solution.

function removeFirstTwo(list) {
    const [, , ...arr] = list; 
    return arr;
  } 
  var arrLiteral = [8,9,10,11,12]
  console.log("arr contains: " + removeFirstTwo(arrLiteral))

  //arr contains: 10,11,12


  