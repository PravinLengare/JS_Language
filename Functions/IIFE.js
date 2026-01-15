// named iife -> which has the name to the function

/**
 * We use because of the global polution problem 
 * The function executes after immediately Invoked Funcition Expression
 */

(function chai(){
    console.log("DB CONNECTD");
    
}) (); // This semicolon indicate where to stop the function

((name) =>{
    console.log("DB CONNECTD",name);
    
}) ('Pravin')
