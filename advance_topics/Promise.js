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