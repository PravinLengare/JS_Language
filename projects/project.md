# Solution for projects :-

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

# 4. Random Number Guess

``` JavaScript

let randomNumber = parseInt(Math.random() * 10 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('PLease enter a valid number')
  }
  else if(guess < 1){
    alert('PLease enter number more than 1')
  }
  else if(guess > 100){
    alert('PLease enter number less than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()

    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```
