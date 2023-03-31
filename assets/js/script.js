const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const sounds = document.getElementById('sounds');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer-btn')
const incrementScore = document.getElementById('score');
const timeDecrease = document.getElementById('time');
let scoreCount = 0;

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
        btn.addEventListener('click', selectAnswer);
        answerElement.appendChild(btn);
    });
}

/**
 * Resets the quiz questions to replace the default html
 */
function resetQuiz() {
    clearStatus(document.body);
    nextButton.classList.add('hidden');
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
        startButton.innerText = 'Restart';
        startButton.classList.remove('hidden');
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

function checkAns() {
    let currentQ = questions[currentQuestionI];

    if (userInput == currentQ.correct) {
        incrementScore();
        nextQuestion();
    };

    console.log(userInput);
}

function incrementScore() {
    scoreCount++;
    score.innerText = scoreCount;
}

/**
 * Questions for the quiz
 */
const questions = [
    {
        question: 'What is 2 + 2?',
        answers: ['4', '5', '3', 'Fish'],
        answersI: 1,
    },
    {
        question: 'What is the capital of Finland?',
        answers: ['Tokyo', 'London', 'Helsinki', 'New York'],
        answersI: 3,
    },
    { 
        question: 'How many bones does a shark have?',
        answers: ['None its all cartilage', '43', '76', '1'],
        answersI: 1,
    },
    {
        question: 'Area 51 is located in which American state?',
        answers: ['Mississippi', 'Texas', 'Idaho', 'Nevada'],
        answersI: 4,
    },
    {
        question: 'What is a group of ravens called?',
        answers: ['Pack', 'Conglomerate', 'An Unkindness', 'Gaggle'],
        answersI: 3,
    },
    { 
        question: 'What is David Bowies original surname?',
        answers: ['Hollister', 'Humphries', 'Dann', 'Jones'],
        answersI: 4,
    },
    {
        question: 'Who won the X Factor in 2011?',
        answers: ['Ollie Murs', 'Little Mix', 'Lincoln Park', 'Alexandra Burke'],
        answersI: 2,
    },
    { 
        question: 'What grain is the Japanese spirit Sake made from?',
        answers: ['Barley', 'Rice', 'Quiona', 'Oats'],
        answersI: 2,
    }, 
    { 
        question: 'Who is the manager of the England football team as of 2020?',
        answers: ['Sam Allardyce', 'Fabio Capello', 'Stebe McClaren', 'Gareth Southgate'],
        answersI: 4,
    },
    { 
        question: 'What year was Google Images invented?',
        answers: [' July 2001', 'August 2003', 'March 2001', 'April 2002'],
        answersI: 1,
    },
    {
        question: 'How many sides does a heptadecagon have?',
        answers: ['13', '17', '21', '19'],
        answersI: 2,
    },
    {
        question: 'How many time zones are in Russia?',
        answers: ['18', '11', '14', '9'],
        answersI: 2,
    }, 
    {
        question: 'Which UK city is the artist Banksy from?',
        answers: ['Bristol', 'Chelmsford', 'Colchester', 'Manchester'],
        answersI: 1,
    },
    { 
        question: 'Who invented the World Wide Web in 1990?',
        answers: ['Jimmy Carr', 'Barack Obama', 'Tim Burners-Lee', 'Stephan Hawking'],
        answersI: 3,
    },
    {
        question: 'What is a group of spiders called?',
        answers: ['Gathering', 'Cluster', 'Pocahontas', 'Huddle'],
        answersI: 2,
    },
    {
        question: 'What is the smallest country in the world?',
        answers: ['Vatican City', 'Latvia', 'Canada', 'Libya'],
        answersI: 1,
    }, 
    {
        question: 'What is the name for a donkey crossed with a zebra?', 
        answers: ['Cheetah', 'Koala', 'Pangolin', 'Zeedonk'],
        answersI: 4,
    }, 
    { 
        question: 'How many Prime Ministers did the UK have in 2022?',
        answers: ['3', '1', '2', '5'],
        answersI: 1,
    },
    {
        question: 'Who was the barista in friends?', 
        answers: ['Harry', 'Gunther', 'Ross', 'Janice'],
        answersI: 2,
    },
    { 
        question: 'What does "He" stand for in the periodic table?',
        answers: ['Hydrogen', 'Calcium', 'Gold', 'Helium'],
        answersI: 4,
    }, 
    {
        question: 'What city had the first fashion week?',
        answers: ['New York', 'Milan', 'Paris', 'London'],
        answersI: 1,
    }, 
    { 
        question: 'What is the nut in the middle of a Ferrero Rocher?',
        answers: ['Peanut', 'Macadamia', 'Pilly Nut', 'Hazelnut'],
        answersI: 4,
    },
    {
        question: 'Who is the highest spiritual leader of Tibet?',
        answers: ['The Pope', 'Jesus Christ', 'James Redfield', 'The Dalai Lama'],
        answersI: 4,
    },
    { 
        question: 'When was the first iPhone release?',
        answers: ['2019', '2003', '2007', '2009'],
        answersI: 3,
    },
    { 
        question: 'What is the largest organ in the human body?',
        answers: ['The skin', 'The Heart', 'The Liver', 'The Brain'],
        answersI: 1,
    }
]