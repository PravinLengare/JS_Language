const user = {
    username : "pravin",
    price : 999,

    welcomeMessage : function(){
        console.log(`The user is ${this.username}`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this); // it gives empty object 

/**
 * We can't use the this in the function
 * What is this in this context?
    Reason: Standalone Function Invocation.

    You called the function simply as chai(). You did not call it as object.chai().

    In JavaScript, when a regular function is called by itself, this defaults to the Global Object.

    In a Browser: It prints the window object.

    In Node.js: It prints the global object (which contains timers, setImmediate, etc.).
 */

const chai = function(){
    const username = "amol"
    console.log(this.username);
    console.log(this);

}
chai()

/**
 * Arrow Functions 
 */

// const two = (num1,num2)=>{
//     return num1 + num2
// }

// const two = (num1,num2) => (num1 + num2)

/**
 * if we are willing to return the object 
 */
const two = (num1,num2) => ( {user:"Pravin"} )
console.log(two(2,3));

