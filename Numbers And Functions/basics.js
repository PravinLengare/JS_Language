/*
const balance = 1000;
console.log(balance);

const newNumber = new Number(24);
console.log(newNumber.toString().length);
console.log(newNumber.toFixed(1));
console.log(typeof newNumber);
*/

/* 
const otherNumber = 123.34545;
console.log(otherNumber.toPrecision(5)); // how much precise the value should be

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));  // it gives the indian std of the values 

*/

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

/*
console.log(Math);
console.log(Math.max(1,2,3,53,3));
console.log(Math.min(1,2,3,53,3));
console.log(Math.floor(3.72));
console.log(Math.ceil(4.13243));
console.log(Math.round(3.56));
console.log(Math.abs(-2));
*/

let tiny = 0.00456789;
console.log(tiny.toPrecision(2));
console.log(tiny.toPrecision(2) + 3);  // it concatinate the number because the method returns the string


/**
 * Use of the random function in the javascript
 */


console.log(Math.random());  // Returns a pseudorandom number between 0 and 1.
console.log( (Math.random()* 10) + 1);
console.log(Math.floor( (Math.random()* 10) + 1));

const min = 10
const max = 20
// console.log(Math.random()*(max - min)+1);

console.log(Math.floor((Math.random()*(max - min) + 1)) + min);



















