const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(val){
    console.log(val);
    
})
console.log("Using the arrow function");

coding.forEach( (val) => {
    console.log(val);
    
})

function printMe(item){
    console.log(item);
}
/**
 * only pass the ref do not pass function
 */
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

/**
 * Array of objects 
 * Looping or iterating through the objects
 * Accessing the objects data through the loop
 */
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName,":- ",item.languageName);
    
})
