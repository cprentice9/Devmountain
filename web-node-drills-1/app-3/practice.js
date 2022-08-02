// Part 2: Solution
// note that this is where you're "naming" the function since it's a single export
const addTwoFunction = require('./addTwoFunction.js');

console.log(addTwoFunction(5));





// Part 3: Solution
// in this case, the functions were named in the other file 
const { addTwo, minusOne, ageText } = require('./functions.js');

console.log(addTwo(3));
console.log(minusOne(3));
console.log(ageText(3));

// OR

const functions = require('./functions.js');

console.log(functions.addTwo(3));
console.log(functions.minusOne(3));
console.log(functions.ageText(3));
