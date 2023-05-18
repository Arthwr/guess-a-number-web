// Find elements
const guessInput = document.getElementById('guess-input');

const guessButton = document.getElementById('guess-button');
guessButton.addEventListener('click', processGuess);

const feedbackContainer = document.getElementById('feedback');

const againButton = document.getElementById('again-button');
againButton.addEventListener('click', playAgain);


// Start
let randomNumber;
playAgain();


// Play Again function
function playAgain() {
    if (feedbackContainer) {
        feedbackContainer.innerHTML = '';
    }
    if (guessInput) {
        guessInput.value = '';
    }
    againButton.style.display = 'none';
    randomNumber = randomGuessNumber(20);
}

// Random number generator function
function randomGuessNumber(maximum) {
    let generatedNumber = Math.floor((Math.random() * maximum) + 1);
    console.log('Random number:', generatedNumber);
    return generatedNumber;
}

// Guess decision function
function processGuess() {
    let feedBackText;
    if (guessInput) {
        const guess = guessInput.valueAsNumber;

        if (guess === randomNumber) {
            feedBackText = 'You win!';
            console.log('Feedback text:', feedBackText);
            againButton.style.display = 'block';
        }
        else if (guess > randomNumber) {
            feedBackText = 'Too high! Try again!';
            console.log('Feedback text:', feedBackText);
        }
        else {
            feedBackText = 'Too low! Try again!';
            console.log('Feedback text:', feedBackText);
        }

        if (guessInput.value.trim() === '') {
            feedBackText = 'Please enter a number from 1 to 20';
        }

        if (feedbackContainer) {
            feedbackContainer.innerHTML += feedBackText + '<br>'
        }

    }
}
