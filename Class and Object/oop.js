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
