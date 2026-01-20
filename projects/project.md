# Solution for first project

# 1. Color Scheme Changer

``` JavaScript

const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector("body")
// console.log(body)

buttons.forEach((item)=>{
  console.log(item)
  item.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    switch(e.target.id){
      case 'grey':
        body.style.backgroundColor = e.target.id
        break;
      case 'white':
        body.style.backgroundColor = e.target.id
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id
        break;

      default:
        break;
    }
  
  })
});



```

# 2. BMI Calculator

``` JavaScript
const form = document.querySelector('form')
form.addEventListener("submit",(e)=>{
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = (document.querySelector('#results').value)
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}: Under Weight</span>`;
    } 
    else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}: Normal Range</span>`;
    } 
    else {
      results.innerHTML = `<span>${bmi}: Overweight</span>`;
    }
  }

})


```
# 3. Digital Clock

``` JavaScript
const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```