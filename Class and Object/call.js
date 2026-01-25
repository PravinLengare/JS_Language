function setUserName(username){
    this.username = username
    console.log("called !");
}

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const user = new createUser("pravin","@123",3424)
console.log(user);




/**
 *  The Problem (Without .call):-
    When setUserName is called normally, it has its own this context.

    In a standard function call, this defaults to the Global Object (Window) or undefined.

    So, setUserName would essentially say: "I am setting window.username = "pravin"". It would not touch the user object you are trying to build.

    The Solution (With .call)
    The .call() method allows you to pass your own this context to another function.

    Inside createUser, this refers to the new empty object being created.

    By writing setUserName.call(this, username), you are effectively saying:    

    "Hey setUserName, run your code, but use MY this (the new user object) instead of your own global this."
 */