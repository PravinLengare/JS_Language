// singleton
// Object.create

// object literals
const mySy = Symbol("key1")
console.log(typeof mySy);

const myUser = {        // object literal
    name: "Hitesh",
    [mySy] : "New symbol",
    "full name": "Pravin Lengare",
    "college":"JSPM",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(myUser.age);
console.log(myUser["full name"]);
console.log(myUser["college"]);
console.log(myUser["mySy"]);

// // JsUser.email = "hitesh@microsoft.com"
// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
/**
 * 1. What it Prevents (The 3 "No"s)
    Once you freeze JsUser:

    1. No Modification: You cannot change the value of existing keys (e.g., changing name from "Pravin" to "Rahul").

    2. No Addition: You cannot add new keys (e.g., adding email: "test@test.com").

    3. No Deletion: You cannot remove keys (e.g., delete JsUser.name will fail).

    But ,if the object has nested objects then we can not modify the top layer only but inside it can be changed 

 */

myUser.greeting = function(){
    console.log("Hello JS user");
}
myUser.greeting = function(name){
    console.log(`Hello JS user ,${myUser.name}`);
}


console.log(myUser.greeting());





/**
 * 1. Object LiteralsAn Object Literal is the standard way to create a single object using curly braces {}.
 *  It is straightforward and direct.Behavior: Every time you define an object literal, you are creating a unique spot in memory. Even if two objects have the exact same contents,
 *  they are technically different "literals" or instances.Use Case: When you need a simple object to hold data (like a user profile, a list of items, etc.).
 * JavaScript// This is an Object Literal
const user1 = {
    name: "Pravin",
    id: 101
};

const user2 = {
    name: "Pravin",
    id: 101
};

// PROOF: They are NOT the same object
console.log(user1 === user2); // Output: false
2. SingletonA Singleton is a design pattern (a rule) that ensures a specific class or
  object has only ONE instance throughout the entire application.Behavior: No matter how many times you try to create a "new" copy, the code intercepts you and gives you back the original copy that was first created.Use Case: Critical shared resources where "duplicates" would cause bugs (e.g., Database Connections, Audio Player controls, or Redux Store).How to create a Singleton (2 Ways)A. The "Module" Singleton (Most Common in JS)In modern JavaScript (Node/React), if you create an object literal in a file and export it, it behaves like a Singleton. JavaScript modules are cached, so every file that imports it gets the same object.JavaScript// database.js
const dbConnection = {
    status: "Connected",
    url: "localhost:3000"
};
export default dbConnection; 

// Any file that imports this will modify the SAME object.
B. The "Class" Singleton (Strict)If you use a Class, you have to write logic to prevent multiple copies.JavaScriptlet instance = null;

class Database {
    constructor() {
        if (instance) {
            return instance; // STOP! Return the existing one.
        }
        this.connection = "Active";
        instance = this; // Save the first instance.
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // Output: true (They are the exact same single object)
Summary 
ComparisonFeatureObject LiteralSingletonDefinitionA way to write an object directly:
 { }A pattern to ensure only one instance exists.MemoryMultiple literals = Multiple memory slots.Always points to the same memory slot.Uniqueness{a:1} !== {a:1}instance1 === instance2Key PurposeData storage.Global state / Shared resources.
 */