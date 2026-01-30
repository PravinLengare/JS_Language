/**
 * In js arrays are dynamic and resizeable 
 * and they can hold any type of data ,like it is build like special object in javascript
 * It has no type safety
 */

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const arr = marvel_heros.concat(dc_heros) // returns a new array with the concate array values
console.log(arr);

// alternate for the concat mehtod is spread operator
/**
 * it takes the multiple arrays to be concate 
 */
const newArr = [...marvel_heros,...dc_heros]
console.log(newArr);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);


console.log(Array.isArray("pravin"));
console.log(Array.from("pravin"));  // it convert into the array
console.log(Array.from({ name:"ravin"})); // interesting it always returns the empty array []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



// const myObj = { name: "ravin" };

// // To get keys
// console.log(Object.keys(myObj)); // Output: ['name']

// // To get values
// console.log(Object.values(myObj)); // Output: ['ravin']
// // A valid "Array-like" object

const myObj = {
    0: "ravin",   // Index 0
    length: 1     // Essential!
};

console.log(Array.from(myObj)); 
// Output: ['ravin']