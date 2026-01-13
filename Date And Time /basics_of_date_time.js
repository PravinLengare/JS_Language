// Dates

/*
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.getTime());  // gives the time in the millisecond .
console.log(myDate.toLocaleString()); 
console.log(myDate.getMinutes()); 
console.log(typeof myDate);

*/

/*
// let myCurrentDate = new Date(2026,0,23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
 let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());

*/

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',
    {
        weekday : "long",
    }
)






