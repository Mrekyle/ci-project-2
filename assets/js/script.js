const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const gameContainer = document.getElementById('game-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer-btn')
const correctAnswer = document.getElementById('score');
const wrongAnswer = document.getElementById('wrong');
const endGame = document.getElementById('end-game');

let correctScoreCount = 0;
let wrongAnswerCount = 0;

let shuffledQuestions;
let currentQuestionI;

startButton.addEventListener('click', startNewGame);
nextButton.addEventListener('click', () => {
    currentQuestionI++
    nextQuestion();
})

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
    resetQuiz();
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
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
            
        }
        btn.addEventListener('click', selectAnswer, checkAns);
        answerElement.appendChild(btn);
        startButton.classList.add('hidden');
    });
}

/**
 * Resets the quiz questions to replace the default html
 */
function resetQuiz() {
    clearStatus(document.body);
    nextButton.classList.add('hidden');
    answerElement.classList.remove('hidden');
    questionElement.classList.remove('hidden');
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}

/**
 * Checks the answer to see if it is correct or wrong
 */
function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    setStatus(document.body, correct);
    Array.from(answerElement.children).forEach(btn => {
        setStatus(btn, btn.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionI +1) {
        nextButton.classList.remove('hidden');
    } else {
        startButton.classList.remove('hidden');
        gameContainer.classList.add('hidden');
        endGame.classList.remove('hidden');
        answerElement.classList.add('hidden');
        questionElement.classList.add('hidden');
    }
    
}

/**
 * Adds correct or wrong classes to the html elements.
 */
function setStatus(element, correct) {
    clearStatus(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**
 * Clears the correct or wrong classes from the html elements.
 */
function clearStatus(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/**
 * Changes the stats of the quiz score and timer
 */
function checkAns(userInput) {
    let currentQ = questions[currentQuestionI];
    console.log('hello World')
    if (userInput == currentQ.answersI) {
        nextQuestion();
        incrementScore();
    } else {
        nextQuestion();
        incrementWrongScore();
    };
}

function incrementScore() {
    correctScoreCount++;
    score.innerText = correctScoreCount;
}

function incrementWrongScore() {
    wrongAnswerCount++;
    wrongAnswer.innerText = wrongAnswerCount;
}

function gameOver() {
    if (shuffledQuestions.length > 20) {
        startButton.innerText = 'Restart';
        correctAnswer.innerText = correctScoreCount;
        wrongAnswer.innerText = wrongAnswerCount;
        gameContainer.classList.add('hidden');
        endGame.classList.remove('hidden');
        startButton.addEventListener('click', startNewGame);
    }
}

/**
 * Questions for the Quiz
 */
const questions = [
    {
    question: 'What is 2 + 2?',
    answers: [
        { text: '4', correct: true },
        { text: '32', correct: false },
        { text: '5', correct: false },
        { text: 'Fish?', correct: true } 
    ],
},
{
    question: 'What is the capital of Finland?',
    answers: [
        { text: 'Tokyo', correct: false },
        { text: 'London', correct: false },
        { text: 'Helsinki', correct: true },
        { text: 'New York', correct: false }
    ]
},
{ 
    question: 'How many bones does a shark have?',
    answers: [
        { text: 'None, Its all cartilage', correct: true },
        { text: '43', correct: false },
        { text: '76', correct: false },
        { text: '1', correct: false }
    ]
},
{
    question: 'Area 51 is located in which American state?',
    answers: [
        { text: 'Mississippi', correct: false },
        { text: 'Texas', correct: false },
        { text: 'Idaho', correct: false },
        { text: 'Nevada', correct: true }
    ]
},
{
    question: 'What is a group of ravens called?',
    answers: [
        { text: 'Pack', correct: false },
        { text: 'Conglomerate', correct: false },
        { text: 'An Unkindness', correct: true },
        { text: 'Gaggle', correct: false }
    ]
},
{ 
    question: 'What is David Bowies original surname?',
    answers: [
        { text: 'Hollister', correct: false },
        { text: 'Humphries', correct: false },
        { text: 'Dann', correct: false },
        { text: 'Jones', correct: true }
    ]
},
{
    question: 'Who won the X Factor in 2011?',
    answers: [
        { text: 'Ollie Murs', correct: false },
        { text: 'Little Mix', correct: true },
        { text: 'Lincoln Park', correct: false },
        { text: 'Alexandra Burke', correct: false }
    ]
},
{ 
    question: 'What grain is the Japanese spirit Sake made from?',
    answers: [
        { text: 'Barley', correct: false },
        { text: 'Rice', correct: true },
        { text: 'quinoa', correct: false },
        { text: 'Oats', correct: false }
    ]
}, 
{ 
    question: 'Who is the manager of the England football team as of 2020?',
    answers: [
        { text: 'Sam Allardyce', correct: false },
        { text: 'Fabio Capello', correct: false },
        { text: 'Stebe McClaren', correct: false },
        { text: 'Gareth Southgate', correct: true }
    ]
},
{ 
    question: 'What year was Google Images invented?',
    answers: [
        { text: 'July 2001', correct: true },
        { text: 'August 2003', correct: false },
        { text: 'March 2001', correct: false },
        { text: 'April 2002', correct: false }
    ]
},
{
    question: 'How many sides does a heptadecagon have?',
    answers: [
        { text: '13', correct: false },
        { text: '17', correct: true },
        { text: '21', correct: false },
        { text: '19', correct: false }
    ]
},
{
    question: 'How many time zones are in Russia?',
    answers: [
        { text: '18', correct: false },
        { text: '11', correct: true }, 
        { text: '14', correct: false },
        { text: '9', correct: false }
    ]
}, 
{
    question: 'Which UK city is the artist Banksy from?',
    answers: [
        { text: 'Bristol', correct: true },
        { text: 'Chelmsford', correct: false },
        { text: 'Colchester', correct: false },
        { text: 'Manchester', correct: false }
    ]
},
{ 
    question: 'Who invented the World Wide Web in 1990?',
    answers: [
        { text: 'Jimmy Carr', correct: false },
        { text: 'Barack Obama', correct: false },
        { text: 'Tim Burners-Lee', correct: true },
        { text: 'Stephan Hawking', correct: false }
    ]
},
{
    question: 'What is a group of spiders called?',
    answers: [
        { text: 'Gathering', correct: false },
        { text: 'Cluster', correct: true },
        { text: 'Pocahontas', correct: false },
        { text: 'Huddle', correct: false }
    ]
},
{
    question: 'What is the smallest country in the world?',
    answers: [
        { text: 'Vatican City', correct: true }, 
        { text: 'Latvia', correct: false },
        { text: 'Canada', correct: false },
        { text: 'Libya', correct: false }
    ]
}, 
{
    question: 'What is the name for a donkey crossed with a zebra?', 
    answers: [
    { text: 'Cheetah', correct: false },
    { text: 'Koala', correct: false },
    { text: 'Pangolin', correct: false },
    { text: 'Zeedonk', correct: true }
    ]
}, 
{ 
    question: 'How many Prime Ministers did the UK have in 2022?',
    answers: [
        { text: '3', correct: true },
        { text: '1', correct: false },
        { text: '2', correct: false },
        { text: '5', correct: false }
    ]
},
{
    question: 'Who was the barista in friends?', 
    answers: [
        { text: 'Harry', correct: false }, 
        { text: 'Gunther', correct: true },
        { text: 'Ross', correct: false }, 
        { text: 'Janice', correct: false }
    ]
},
{ 
    question: 'What does "He" stand for in the periodic table?',
    answers: [
        { text: 'Hydrogen', correct: false }, 
        { text: 'Calcium', correct: false },
        { text: 'Gold', correct: false },
        { text: 'Helium', correct: true }
    ]
}
]