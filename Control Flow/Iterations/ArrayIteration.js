const arr = [1,2,3,3,4]

for (const element of arr) {
    console.log(element);
    
}
const greetings = "Hello World"
for (const s of greetings) {
    console.log(s);
    
}

// Maps 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
/*
for (const element of map) {
    console.log(element);
    
}
*/
for (const [key,value] of map) {
    console.log(key," :- ",value);
}

// Object 
/**
 * The object in js not iterable with the for of loop 
 */
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const element of myObject) {
    console.log(element);
    
}
// for (const [key,value] of myObject) {
//     console.log(key," :- ",value);
// }