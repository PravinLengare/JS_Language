console.log("Welcome to Programming in javaScipt")

name = "Pravin";
console.log("The name of programmer is : "+name);
age = 25;
console.log("The age of programmer is : "+age);
isProgrammer = true;
console.log("Is the person a programmer? : "+isProgrammer);

// Js is a dynamically typed language..

// Variable declaration in js

var name = "Pravin";
var name = "Lengare"; // ✅ allowed
console.log(name); // Output: Lengare



let city = "Pune";
city = "Mumbai"; // ✅ can update
 
console.log(city); 


const country = "India";
// country = "USA"; ❌ Error: Assignment to constant variable
console.log(country); // Output: India





// Non-primitive data types 

const student = {
    name:"Pravin",
    age:20,
    cgpa: 8.9
};

console.log(student);
console.log("Student Name: "+student.name);
console.log("Student Age: "+student.age);
console.log("Student CGPA: "+student.cgpa);

student.age = 21;

console.log("Student Updated Age: "+student["age"]);

let code;
console.log(code); // Output: undefined


// Null is a object 
let s = null;
let str = "string";
let b = 2;
console.log(s);
console.log(str,b);

// As a standard js......

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name1 = "hitesh"
let age1 = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object