const startButton = document.getElementById('start-btn');
const sounds = document.getElementById('sounds');
const questionContainer = document.getElementById('question-container');

startButton.addEventListener('click', startNewGame);

/**
 * Starts a new game when the quiz is loaded and the button is pressed
 */
function startNewGame() {
    console.log('Game Started');
    startButton.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    nextQuestion();
}

/**
 * Sets the next question in the quiz, regardless of a correct answer
 * or wrong answer
 */
function nextQuestion() {

}

/**
 * Checks the answer to see if it is correct or wrong
 */
function selectAnswer() {

}

/**
 * Controls the sounds by turning them on or off for the quiz
 */
function soundControl() {

}

/**
 * Changes the stats of the quiz score and timer
 */
function stats() {

}