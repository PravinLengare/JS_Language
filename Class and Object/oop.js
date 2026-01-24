/**
 * Js is prototype language
 * It is oops but since the 2015 it introduced the oop concept in the js
 */

const user = {
    username: 'Pravin',
     loginCount: 8,
    signedIn: true,

    getUserDetails:function(){
        console.log(this.username);
        console.log(this);
        
    }
}

//console.log(user);
//console.log(user.getUserDetails());

/**
 * This is special type of function used to initialize the values of the objects 
 * This special function called the constuctor in the programming 
 * so , oops is the paradigm in programming only so some languages work on the oops and some of them works on the funtional programming
 */
function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

}

const userOne = new User("Pravin",4,true) // after adding the new keyword the value for the every user will be diff
//console.log(userOne);
const userTwo = new User("ChaiAurCode", 11, false)
//console.log(userTwo);


console.log(userOne.constructor);
