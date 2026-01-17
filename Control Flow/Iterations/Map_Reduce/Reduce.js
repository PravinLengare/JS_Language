const myNums = [1, 2, 3]

const result = myNums.reduce((acc,currVal)=>{
   console.log(`acc: ${acc} and currval: ${currVal}`)
   return acc + currVal
    
},0)
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log("The result is : ",result,myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce( (num,item) => num + item.price ,0)

console.log(priceToPay);

