const balance = 199;

if(balance > 200){
    console.log(`more than ${balance}`);
    
}
else if(balance < 199){
    console.log(`less than ${balance}`);
}
else if(balance < 499 && balance > 199){
    console.log(`more than ${balance} and less than 500`);
}
else{
    console.log("less than balance");
    
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy course ");
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in ");
    
}

