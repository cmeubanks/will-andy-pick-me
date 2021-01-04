var userQuestion = document.querySelector('#question');
var userQuestionDisplay = document.querySelector('.your-question');
var userAnswerDisplay = document.querySelector('.random-answer');
var answerButton = document.querySelector('.form-button');
var eightBall = document.querySelector('#eight-ball');
var answerPage = document.querySelector('.answer');

answerButton.addEventListener('click', userAnswer);

function answerRandomizer(array) {
  return Math.floor(Math.random() * array.length);
};
function grabRandomAnswer() {
  var randomAnswer = answers[answerRandomizer(answers)];
  userAnswerDisplay.innerText = randomAnswer;
};
function switchView() {
eightBall.classList.add('hidden');
answerPage.classList.remove('hidden');
};
function clearField() {
userQuestion.value = '';
}

function userAnswer() {
switchView();
grabRandomAnswer();
userQuestionDisplay.innerText = userQuestion.value;
clearField();
}
