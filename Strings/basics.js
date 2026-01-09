const name = "pravin"
const s = 50;
// dont use this instead use string interpolation
console.log(name + s);

// string interpolation
console.log(`The concat is ${name} and ${s}`);

const nameN = new String("     Pravin     ")
/*
console.log(nameN.toString);
console.log(nameN.toLowerCase());
console.log(nameN.length);
console.log(nameN[3]);
console.log(nameN.charAt(2));
console.log(nameN.indexOf('a'));
console.log(nameN.__proto__);

console.log(nameN.substring(0,3));
console.log(nameN.substring(-2,3));

console.log(nameN.slice(2,4));
console.log(nameN.slice(-8,2));

*/

console.log(nameN.trim());  // remove the white spaces only

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(url.split('%')) // based on the input it will split the values in the array 







