// const user = new Object();  --> singleton object 
// console.log(user);

const tinderUser = {}; // --> object literal
tinderUser.id = 1;
tinderUser.name = "pravin"
tinderUser.age = 20

// console.log(tinderUser);
console.log(tinderUser);

const regularUser = {
    fullname : "Pravin Lengare",
    username : {
         address : {
            first : "Pravin",
            last : "Lengare"
        }
    }
}
console.log(regularUser.username?.address?.first); // This syntax if inner object does not contain the key value pairs


const obj1 = {1:"a",2:"b"}
const obj2 =  {3:"c",4:"d"}

const obj3 = {...obj1,...obj2}  // spread operator

const obj32 = Object.assign({},obj1,obj2) // static method to copy all objects in the one

console.log(obj32);

console.log(obj3);

const users = [     // Array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "pravin@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('id'));


const course = {
    name:"pravin",
    coursename : "js in hindi",
    price : "999"
}

const {coursename : cname,name : coursename,price: courseprice} = course
console.log(cname);
console.log(coursename);
console.log(courseprice)


/**
 * Object Destructuring is a 
 * JavaScript feature that lets you extract values from an object and store them in variables easily.
 */

 


// const regularUser = {
//     name : "Amol",
//     fullname :{
//         username:{
//             firstname: "Pravin",
//             lastname: "Lengare"
//         }
//     }
// }
// // console.log(regularUser.fullname.username.firstname);
// // console.log(regularUser.fullname.username.lastname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = {obj1 ,obj2}
// // console.log(obj3);
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// /**
//  * concating the objects using the spread operator
//  */
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log("Array of objects : ");

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]
// console.log(users[2]);
// console.log(users[2].age);


// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(tinderUser.hasOwnProperty('age'));


// /**
//  * Object de-structuring with the array of objects 
//  * It allows you to unpack the values of the object
//  * We can assign or set the property if needed 
//  */

// const course = {
//     name:"pravin",
//     coursename : "js in hindi",
//     price : "999"
// }

// const {name:nameas,price,coursename,isActive = false} = course
// console.log(nameas);
// console.log(price);
// console.log(isActive);





