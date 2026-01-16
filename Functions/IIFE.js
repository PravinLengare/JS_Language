// named iife -> which has the name to the function

/**
 * We use because of the global polution problem 
 * The function executes after Immediately Invoked Funcition Expression
 * 
 * Global Scope Pollution"
        In JavaScript (especially in browsers), variables declared outside functions are Global. If you have two different files (e.g., script1.js and script2.js) and both create a variable named user, they will overwrite each other and crash your app.

 */
/// 
    // The variable 'connection' is destroyed immediately after running.
    // It does NOT exist in the global scope.
    // A. Data Privacy (Encapsulation)

    // This was the primary way to create "private" variables before Classes were introduced. Variables defined inside the IIFE cannot be accessed from the outside.
    // One-Time Initialization
    // If you need to run setup code (like your "DB CONNECTED" example) once when the app starts, but you don't want to leave utility variables floating around in memory afterwards, an IIFE is perfect. It runs, does the job, and cleans up memory.

    // Why use it? To create a private scope and execute code immediately without leaving a mess in the global memory.

    // Is it still used? Yes, but less than before. Modern Modules (ES6 import/export) and Block Scope (let/const) solve the same problems more cleanly. However, you will still see IIFEs everywhere in older libraries and initialization scripts.
/// 

(function chai(){
    console.log("DB CONNECTD");
    
}) (); // This semicolon indicate where to stop the function

((name) =>{
    console.log("DB CONNECTD",name);
    
}) ('Pravin')


// console.log(y);
// let y = 10
console.log(z);
const z = 10

