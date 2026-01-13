// const user = new Object();
// console.log(user);

const tinderUser = {};
tinderUser.id = 1;
tinderUser.name = "pravin"
tinderUser.age = 20

// console.log(tinderUser);


const regularUser = {
    name : "Amol",
    fullname :{
        username:{
            firstname: "Pravin",
            lastname: "Lengare"
        }
    }
}
// console.log(regularUser.fullname.username.firstname);
// console.log(regularUser.fullname.username.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1 ,obj2}
// console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj2}
console.log(obj3);

console.log("Array of objects : ");

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
console.log(users[2]);
console.log(users[2].age);


console.log(Object.keys(users));
console.log(Object.values(users));
console.log(tinderUser.hasOwnProperty('age'));




