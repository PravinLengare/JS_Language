const userEmail = []
if(userEmail){
    console.log("Logged !");
    
}
else{
    console.log("Else run");
    
}
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const obj = {};
if(Object.keys(obj).length === 0){
     console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val;
val = 5 ?? 10
console.log(val);
val = null ?? 10
console.log(val);
val = undefined ?? 10
console.log(val);
val = null ?? 10 ?? 20
console.log(val);

// Ternary Operator
// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice < 100 ? console.log("Nice") : console.log("Bad");









