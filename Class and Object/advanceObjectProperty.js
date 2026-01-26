// console.log(Math.PI);
// Math.PI = 3;
// console.log(Math.PI);

/**
 * It gives the properties of the object is it writable , iterable and all like 
 * By this we can get what to do on this object 
 */
const decriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(decriptor);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

const objDec = Object.getOwnPropertyDescriptor(chai,'name')
console.log(objDec);

Object.defineProperty(chai,'name',{
    writable : false,
    enumerable : false,
})

// chai.name = "pravin"
// console.log(chai.name)

for (const [key,value] of Object.entries(chai)) {
   if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}