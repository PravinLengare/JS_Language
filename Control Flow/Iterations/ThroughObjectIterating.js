const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {

    console.log(`The shortcut ${key} for the ${myObject[key]}`);
    
}
const programming = ["js","java","python"]
for (const key in programming) {
    
    console.log(`The key is ${key} and value is ${programming[key]}`);
    
}

/**
 * The map in not iterable in the for in loop 
 */
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


for (const key in map) {
   console.log(key);    
}
