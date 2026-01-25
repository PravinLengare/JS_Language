/**
 * Prototypes are the mechanism JavaScript uses to allow objects to share features with one another.
 * In JavaScript, objects are never truly "alone." Nearly every object has a hidden link to another object. This linked object is called its Prototype.
 * Why is it Important?
 * 1. Performance: It saves massive amounts of memory by sharing methods instead of copying them.
 * 2. Extensibility: You can actually add your own methods to built-in prototypes (though this is risky).
 * What do you get?
 *   -->  The ability to share methods across instances without duplicating code.
 */








// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.pravin = function(){
    console.log(`Pravin is present everywhere in the objects`);
    
}

Array.prototype.pravinArray = function(){
    console.log(`Pravin is present in the arrays`);
    
}
/**
 * If we inject a mehtod in the Object then it can accessible to everyone 
 * Because ,js checks from the down to upper level and this is prototype behaviour of the js
 * 
 */
// myHeros.pravin()
// heroPower.pravin()
// heroPower.pravinArray() not access to this because it defined in the Array
myHeros.pravinArray()


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// Solved the question
const antoheruser = "Pravin    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
    
}
antoheruser.trueLength()
" pra".trueLength()
" amol".trueLength()


// my prototype 
function User1(name){
    this.name = name
}
User1.prototype.printMe = function(){
    console.log(`The user is ${this.name}`);
    
}
const user1 = new User1("pravin")
const user2 = new User1("amol")
const user3 = new User1("pra")
user1.printMe()
user2.printMe()
user3.printMe()