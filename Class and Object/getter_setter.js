/**
 * Maximum call stack size exceeded --> this error comes when there are constructor and getter and setter which are going to set the values
 * use the extra new variable instead so they can be distinguish 
 * 
 */
class User{
    constructor(name,email,password){
        this.name = name
        this.email = email
        this.password = password
    }

    get name(){
        return this._name

    }
    set name(name){
        this._name = name
    }
}

const u1 = new User("pravin","lengare@12",123)
console.log(u1);
console.log(u1.name);

