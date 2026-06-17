/*
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

/*

console.log(nameN.trim());  // remove the white spaces only

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(url.split('%')) // based on the input it will split the values in the array but that checking char will not come in the array 

*/


const name1 = "pravin"
console.log(name1)
console.log(typeof name1);


const name = new String('Pravin')
console.log(name);
console.log(typeof name);

console.log(`My name is ${name1} and my capital name is ${name}`);

console.log(name1.length);
console.log(name1.charAt(2));
console.log(name1.indexOf('a'));
console.log(name.toLowerCase());
console.log(name1.includes('pa')); // it takes continuous values to match
console.log(name1[2]);
console.log(name.__proto__);

const k = " Amol        "
console.log(k);
console.log(k.trim());

const j = "lengarepravin115@gmail.com"
console.log(j.split('@'));


//console.log(name1.substring(-6,3));
console.log(name1.slice(-4,2));  // first it convert into the len + (-4) and then slice(2,2) so results in empty string

console.log(name1.slice(-5));
console.log(name1.substring(-4)); // it treats negative value as zero

console.log(name1.substring(3,2)); // if st > en it swaps the numbers
console.log(name1.slice(3,2));  // empty string because start > end

// console.log(name1.splice(2,4)); it is an array method





















/**
 * 1. Theory of slice() :-
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