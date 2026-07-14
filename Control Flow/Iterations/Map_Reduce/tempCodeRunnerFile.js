const myNums = [1, 2, 3]

const result = myNums.reduce(function (acc,curr){
    console.log(`${acc} and ${curr}`);
    return acc + curr;
},0)
// second way of writing 
const resultT = myNums.reduce( (acc,curr) => {
    return acc + curr
},0)
console.log(resultT);