/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// console.log(winningNum);

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listenere
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage('Please enter a number between ' + min + ' and ' + max, 'red');
  } else {
    // Check if won
    if (guess === winningNum) {
      // Game over - won
      gameOver(true);
    } else {
      // Wrong number
      guessesLeft -= 1;
      if (guessesLeft === 0) {
        // Game over - lost
        gameOver(false);
      } else {
        // Game continues - answer wrong

        // Change border color
        guessInput.style.borderColor = 'red';
        // Clear Input
        guessInput.value = '';
        // Set message - tell user it's the wrong number
        setMessage(guess + ' is not correct. ' + guessesLeft + ' guesses left.', 'red');
      }
    }
  }
});

// Game over
function gameOver(won) {
  let color;
  won === true ? color = 'green' : color = 'red';

  let msg;
  won === true ? msg = winningNum + ' is correct. YOU WIN!' : msg = 'Game over. You lost. The correct number was ' + winningNum;

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}