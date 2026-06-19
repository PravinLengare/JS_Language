/**
 * Learning about the functions in javascript 
 * Can store in the variable ..
 */

function addNumber(number1 = 1 , number2 = 2){ // this is the default value gave to the parameters
    return number1 + number2;
}
console.log(addNumber());  // if no values passed then NaN result 

//console.log(addNumber); This is the reference of the function

function loginUserMessage(username){
    if(username === undefined){
        console.log(`please enter the name `);
        return
        
    }
    return `The ${username} just logged in `
}

console.log(loginUserMessage());
/**
 * we can assign the function to variable also 
 */
const user = function(username){
    if(username === undefined){
        console.log(`please enter the name `);
        return
        
    }
    return `The ${username} just logged in `
}
console.log(user("Amol"));


/**
 * Handling the objects in the functions
 */
const users = {
    username: "hitesh",
    price: 199
}
function handledObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

console.log(handledObject(users));

function buses(var1,value,...num){
    console.log("The buses will be ");
    return num
    
}
console.log(buses("olectra","electric","petrol","disel"));

function cartValues(var1,var2,...num1){  // acts like spread seperator operator 
    console.log(typeof num1);
    
    return num1;
}

console.log(cartValues(234,44,40))

const myNewArray = [200, 400, 100, 600]


function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));