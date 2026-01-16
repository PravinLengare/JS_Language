for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    
    
}
console.log(`Table printing to 10 `);

for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
     console.log(`${i} * ${j} = ${i*j}`);
     
   }
}

// break and continue
for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("Detected 5 ");
        continue 
    }
    console.log("The value is ",i);

    
}