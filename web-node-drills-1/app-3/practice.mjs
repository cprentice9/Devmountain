// Part 2: Solution
// note that this is where you're "naming" the function since it's a single export
import addTwoFunction from './addTwoFunction.js';
console.log(addTwoFunction(5));




// Part 3: Solution
// in this case, the functions were named in the other file 
import myFunctions from './functions.js';
const { addTwo, minusOne, ageText } = myFunctions;

console.log(addTwo(3))
console.log(minusOne(3))
console.log(ageText(3))

// OR
import functions from './functions.js';
console.log(functions.addTwo(3))
console.log(functions.minusOne(3))
console.log(functions.ageText(3))

