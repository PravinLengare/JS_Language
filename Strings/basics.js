const name = "pravin"
const s = 50;
// dont use this instead use string interpolation
console.log(name + s);

// string interpolation
console.log(`The concat is ${name} and ${s}`);

const nameN = new String("     Pravin     ")
/*
console.log(nameN.toString);
console.log(nameN.toLowerCase());
console.log(nameN.length);
console.log(nameN[3]);
console.log(nameN.charAt(2));
console.log(nameN.indexOf('a'));
console.log(nameN.__proto__);

console.log(nameN.substring(0,3));
console.log(nameN.substring(-2,3));

console.log(nameN.slice(2,4));
console.log(nameN.slice(-8,2));

*/

console.log(nameN.trim());  // remove the white spaces only

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(url.split('%')) // based on the input it will split the values in the array but that checking char will not come in the array 







/**
 * 1. Theory of slice() (The Observer)
    Concept: Immutability.

    Theory: slice follows the principle of Pure Functions. It takes an input (the array), performs an operation (selecting elements), and produces a new output without modifying the original input. It creates a Shallow Copy of the selected portion.

    Use Case: When you want to use data without risking side effects or bugs caused by changing the original source (common in React/Redux).

    2. Theory of splice() (The Modifier)
    Concept: Mutability.

    Theory: splice follows the Imperative programming model. It operates directly on the memory address of the array, performing In-Place modification. It is efficient because it doesn't create a full copy, but it is "destructive" because the original state is lost forever.

    Use Case: When memory efficiency is critical and you need to manage a list dynamically (like a playlist queue) where the old state doesn't matter.

Summary
    Slice = Creation (New Array).

    Splice = Modification (Same Array).
 */