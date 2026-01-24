/**
 * Promise is the object in the javascript which returns the resovle or reject upon the request 
 * it gives the promise to user that something will get as a resoponse but in the future 
 * It has three states fullfilled , pending and rejected ..
 * By this we can use it by the two ways 
 * 1. then and catch and finally 
 * 2. try catch block by using the await and asynch keywords
 */
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async tasks 1');
        resolve()
        
    }, 1000);
})
promiseOne.then(()=>{
    console.log('Promise consumed!');
    
})

// new one with syntax 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(()=>{
     console.log('Promise 2 consumed!');
    

})

// with passing the value to the then method
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"pravin",pass:"123"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
    
})

// with the two resolve and reject
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:"pravin",pass:"123"})
        }
        else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
})
.catch((error)=>{
    console.log("error !!!");
    
})
.finally(()=> console.log("The promise is either resolved or rejected"))

/**
 * Promise five for the extra concepts
 * like it will resolve means fulfilled and then reject means failed to promise
 */
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
});
async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
        
    }catch(error){
        console.log(error);
        
    }
    
}
consumePromiseFive()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })

/**
 * An async function is a modern JavaScript feature (introduced in ES2017) that makes working with asynchronous code (like fetch) much easier and cleaner.
 * 1. It automatically ensures the function returns a Promise.
 * 2. It allows you to use the await keyword inside it.
 * After the asynch keyword and await we have to handle the code in the try and catch block
 * 
 * - async: "I promise this function will handle asynchronous tasks."

 * - await: "Pause here until the data is ready."

 */
async function getusers() {
    try{
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await response.json()
        console.log(data);
        
    }catch(error){
        console.log(error);
        
    }
}
getusers()