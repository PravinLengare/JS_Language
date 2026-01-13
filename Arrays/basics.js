console.log("------------------ARRAYS------------------------");

const arr = [2,3,4,5]
console.log(arr[2]);
arr.push(7)
console.log(arr);
arr.pop()
console.log(arr);

arr.unshift(0);
console.log(arr);
arr.shift()
console.log(arr);

console.log(arr.includes(4));
console.log(arr.indexOf(4));

console.log(arr.join());

/**
 * Array in the javascript are shallow copy means can be mutable and which has the same ref
 * they share the same fef 
 */

// slice and splice methods 
console.log("slice and splice methods -->");


// console.log(arr.slice(3));
/*
console.log(arr.slice(-1));
console.log(arr.slice(0,3));

console.log(`The slice is ${arr.slice(0,3)}`);
console.log(`The slice is ${arr}`);
console.log(`The splice is ${arr.splice(0,3)}`);
*/

/**
 * slice does not modify the original array splice do
 * after applied the splice then that part of array will be removed from the array 
 * slice exclude the range and splice take whole range in includes 
 * Start at Index 2, delete 4 items.
 * slice is immutable and splice is mutable 
 */ 


console.log("A ", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3)
console.log("C ", arr);  /**
    * after the splice the part of that slice will be removed from the array and remainig part will remain
*/
console.log(myn2);








