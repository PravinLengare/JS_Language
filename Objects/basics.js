// singleton
// Object.create

// object literals
const mySy = Symbol("key1")
console.log(typeof mySy);

const myUser = {
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

myUser.greeting = function(){
    console.log("Hello JS user");
}
myUser.greeting = function(){
    console.log(`Hello JS user ,${myUser.name}`);
}


console.log(myUser.greeting());





