console.log("Welcome to Programming in javaScipt");

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

