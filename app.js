const randomNumber = parseInt(Math.random() * 100 + 1);
const submitGuessButton = document.querySelector('#subt');
const userGuesses = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

const prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submitGuessButton.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userGuesses.value)
        ValidateGuess(guess)
    })
}

function ValidateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a number')
    } else if (guess < 1) {
        alert('Please enter a number between 1 and 100')
    } else if (guess > 100) {
        alert('Please enter a number between 1 and 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`)
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    userGuesses.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(Message) {
    lowOrHi.innerHTML = `<h2>${Message}</h2>`
}

function endGame() {

}

function newGame() {

}