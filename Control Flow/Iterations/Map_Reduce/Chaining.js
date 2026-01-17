/**
 * We can do as many time chaining 
 * and also apply same function again and again in chaining
 * each time method applied then result by that will transfter to another method in the chaining
 */
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = myNumers
                .map( (num) => num * 2)
                .map( (num) => num + 2)
                .filter( (num) => num > 2)

console.log(result);
                