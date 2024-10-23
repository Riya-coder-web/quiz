// hack3.js

// Function to show a specific page and hide others
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// Function to start the quiz based on the selected level
function startQuiz(level) {
    goToPage('quiz-page');
    // Initialize quiz questions based on the selected level
    loadQuestions(level);
}

// Function to load questions based on the selected level
function loadQuestions(level) {
    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices-container');
    
    // Example questions - replace with actual quiz data
    const questions = {
        easy: [
            { question: 'What is 2 + 2?', choices: ['3', '4', '5'], answer: '4' },
            { question: 'What is the color of the sky?', choices: ['Green', 'Blue', 'Red'], answer: 'Blue' }
        ],
        medium: [
            { question: 'What is the capital of France?', choices: ['Berlin', 'Madrid', 'Paris'], answer: 'Paris' },
            { question: 'What is 5 * 6?', choices: ['30', '35', '40'], answer: '30' }
        ],
        hard: [
            { question: 'What is the square root of 144?', choices: ['10', '12', '14'], answer: '12' },
            { question: 'Who wrote "To Kill a Mockingbird"?', choices: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway'], answer: 'Harper Lee' }
        ]
    };

    // Clear previous questions and choices
    questionText.textContent = '';
    choicesContainer.innerHTML = '';

    // Load a random question from the selected level
    const question = questions[level][Math.floor(Math.random() * questions[level].length)];
    questionText.textContent = question.question;

    // Create buttons for choices
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice, question.answer);
        choicesContainer.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedChoice, correctAnswer) {
    const resultMessage = document.getElementById('result-message');
    const scoreText = document.getElementById('score-text');
    
    if (selectedChoice === correctAnswer) {
        resultMessage.textContent = 'Correct!';
    } else {
        resultMessage.textContent = 'Wrong!';
    }

    // Display score - this example assumes only one question
    scoreText.textContent = 'Your answer: ' + selectedChoice;
    goToPage('result-page');
}

// Function to retry the quiz
function retryQuiz() {
    goToPage('topic-page');
}

// Initialize the start page
document.addEventListener('DOMContentLoaded', () => {
    goToPage('start-page');
});
