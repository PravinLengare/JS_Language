// let a = 2;
// var b = 4;
// const c = 5
var b = 39
if(true){
    let a = 2;
    var b = 4;
    const c = 5     
}

// console.log(a);
console.log(b);
// console.log(c);


function one(){
    const username = "pravin"

    function two(){
        const website = " youtube"
        console.log(username + website);
        
    }
    console.log(username);
    // console.log(website);
    
    two()

}
one()

// ++++++++++++++++++++++++ Intresting Things ++++++++++++++++++++++++++++

/**
 * In js variables are very powerful 
 * They can hold any type of data 
 */
 
function Addone(num){
    return num + 1
}
console.log(`Using the function defination : ${Addone(4)}`);

const addTwo = function(num){
    return num + 2
}
console.log(`Using the var function : ${addTwo(4)}`);
