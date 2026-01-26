// class User{
//     constructor(username,password){
//         this.username = username
//         this.password = password
//     }
//     callMe(){
//         console.log("user called by",this.username);
        
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const obj = new User("abc",123)
// obj.callMe()
// console.log(obj.encryptPassword());


// Behind the scene


function User(username,password){
    this.username = username
    this.password = password
}
User.prototype.callMe = function(){
    console.log("user called by",this.username);
}
User.prototype.encrypt = function(){
    return `${this.password}abc`
}


const user = new User("kbc",11)
user.callMe()
console.log(user.encrypt());
