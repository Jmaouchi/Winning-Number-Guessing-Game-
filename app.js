// Game Values 
let min=1,
    max=10,
    winningNum=getRandomNum(min,max),
    guessesLeft=3;

// UI Elements
const game = document.querySelector('#game'),
      container = document.querySelector('.container'),
      minNum = document.querySelector ('.min-num'),  
      maxNum = document.querySelector ('.max-num'),
      guessBtn = document.querySelector ('#guess-btn'),
      guessInput = document.querySelector ('#guess-input'),
      message = document.querySelector ('.message');
      body = document.querySelector('.body');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
game.addEventListener('mousedown' ,function(e){
  if(e.target.className==='play-again'){
    window.location.reload();
  }
})

//function to let the device bet the winning num
getRandomNum (min,max);
function getRandomNum (min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

//function for the click 
guessBtn.addEventListener ('click', add);
function add (){
  let guess = parseInt (guessInput.value); // this is a rapped in a parseInt and that will display the value as a number and it will be NaN instead of ''
  //validate
  if(isNaN(guess) || guess<min || guess>max ){
  message.textContent = `plesae enter number between ${min} and ${max} `;
  message.style.color= 'red';
  }
  // check if won 
  if (guess === winningNum){

    guessInput.disabled = true; // disable the value and with that you cant type after you get the winningNum
  //change color
    guessInput.style.borderColor = 'green';
  // set message and make some stylling
  message.textContent='great! you got it';
  message.style.color='black';
  body.style.backgroundColor = 'green';
  body.style.color = 'white';
  container.style.border = 'black 5px solid';
// play again
  guessBtn.value = 'Play again';
  guessBtn.className += 'play-again'; 
   }
  else{
  //wrong number
  guessesLeft = guessesLeft -1;
  if(guessesLeft === 0){
       //game over - lost
        message.textContent = `Game over, you lost. the correct answer was ${winningNum}`;
        message.style.color = 'black';
        guessInput.disabled = true;
        body.style.backgroundColor = 'red';
        body.style.color = 'white';
        container.style.border = 'black 5px solid';
      // play again
        guessBtn.value = 'Play again';
        guessBtn.className += 'play-again';    
   
  } else if (guess != winningNum){
      message.textContent = `Wrong! try again , you have ${guessesLeft} guesses left`;
      message.style.color = 'red';
    }
  }
};
