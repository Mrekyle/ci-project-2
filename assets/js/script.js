const startButton = document.getElementById('start-btn');
const sounds = document.getElementById('sounds');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answers = document.getElementById('answer-btn')

let shuffledQuestions;
let currentQuestionI;

startButton.addEventListener('click', startNewGame);

/**
 * Starts a new game when the quiz is loaded and the button is pressed
 */
function startNewGame() {
    console.log('Game Started');
    startButton.classList.add('hidden');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionI = 0;
    questionContainer.classList.remove('hidden');
    nextQuestion();
}

/**
 * Sets the next question in the quiz, regardless of a correct answer
 * or wrong answer
 */
function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionI]);
}

/**
 * Shows the next question in the quiz once the quiz is started
 */
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn');
        if (answers.correct) {
            btn.dataset.correct = answers.correct
        }
        btn.addEventListener('click', selectAnswer);
    });
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

/**
 * Questions for the quiz
 */
const questions = [
    {
        question: 'What is 2 + 2',
        answer: [
            {
                text: '4', correct: true,
                text: '32', correct: false,
                text: '3', correct: false,
                text: '19', correct: false
            }
        ]
    }
]