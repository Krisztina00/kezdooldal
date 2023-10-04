let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('userGuess').value);
  const message = document.getElementById('message');
  
  if (Number.isInteger(userGuess)) {
    if (userGuess === randomNumber) {
      message.style.color = 'turquoise';
      message.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
      message.style.color = 'purple';
      message.textContent = 'Too low, try again.';
    } else {
      message.style.color = 'rgb(255, 153, 102)';
      message.textContent = 'Too high, try again.';
    }
  } else {
    message.style.color = 'red';
    message.textContent = 'Please enter a valid integer.';
  }

  
  if (userGuess === randomNumber) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
}
