// check if an element with the id 'quiznos' exists within the document.
if (document.getElementById('quiznos')) {

// get the element with the id 'quiznos'
var quiz = document.getElementById('quiznos');

// array of questions, each question is an object that contains the question id, a title and options of the answers and shows the correct answer
var questions = [
   {
      id: "moonQuestion",
      title: "How far is the Moon?",
      A: "it lives next door",
      B: "no idea",
      C: "i am sure it is pretty far",
      D: "some km",
      correctAnswer: "A"
   },
     {
      id: "planetQuestion",
      title: "What planet is closest to the sun?",
      A: "it lives next door",
      B: "no idea",
      C: "i am sure it is pretty far",
      D: "some km",
      correctAnswer: "B"
   },
     {
      id: "saturnQuestion",
      title: "How many rings does Saturn have?",
      A: "it lives next door",
      B: "no idea",
      C: "i am sure it is pretty far",
      D: "Mercury",
      correctAnswer: "C"
   },
    {
      id: "saturnQuestionsss",
      title: "How many rings does Saturn have?",
      A: "it lives next door",
      B: "no idea",
      C: "i am sure it is pretty far",
      D: "Mercury",
      correctAnswer: "C"
   },
    {
      id: "saturnQuestionsssss",
      title: "How many rings does Saturn have?",
      A: "it lives next door",
      B: "no idea",
      C: "i am sure it is pretty far",
      D: "Mercury",
      correctAnswer: "C"
   },
    {
      id: "saturnQuestionssssssss",
      title: "How many rings does Saturn have?",
      A: "it lives next door",
      B: "no idea",
      C: "i am sure it is pretty far",
      D: "Mercury",
      correctAnswer: "C"
   },
    {
      id: "saturnQuestionssssssssssss",
      title: "How many rings does Saturn have?",
      A: "it lives next door",
      B: "no idea",
      C: "i am sure it is pretty far",
      D: "Mercury",
      correctAnswer: "C"
   },
] ;


// get the element container for the quiz questions
var quizContainer = document.getElementById('questions');
// turn on variables to keep track of quiz points, answers and maximum amount of points.
let rightAnswers = 0;
var maxRightAnswers = questions.length;
let totalQuestions = questions.length;
let totalPoints = 0;

var maxPoints = questions.length + "00";

var selectedAnswer = "";

// this loop is used to loop through the questions and create HTML elements to display the quiz.
questions.forEach(function(question, index) {
    var div = document.createElement('div');
    div.id = `question-${index}`;
    div.classList.add('question_cont');
    div.innerHTML = `
    <h2>${question.title}</h2>
    <label for="${question.id}" class="form_elem">
    <input type="radio" name="${question.id}"  value="A">
    ${question.A}
    </label>
    </label>
    <label for="${question.id}" class="form_elem" >
    <input type="radio" name="${question.id}"  value="B">
    ${question.B}
    </label>
    <label for="${question.id}" class="form_elem">
    <input type="radio" name="${question.id}"  value="C">
    ${question.C}
    </label>
    <label for="${question.id}" class="form_elem">
    <input type="radio" name="${question.id}"  value="D">
    ${question.D}
    </label>
    `;
    quizContainer.appendChild(div);
});


// update the elements with the quiz answers.
document.getElementById('total_questions').textContent = totalQuestions;
document.getElementById('right_answers').textContent = rightAnswers;
document.getElementById('total_points').textContent = totalPoints;

// Event listener for submitting the answers.
document.getElementById('quiznos').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('right_answers').textContent = rightAnswers;
    document.getElementById('total_points').textContent = totalPoints;
});


// A function that checks the correct answers with the users input.
function checkAnswer(e) { 
    questions.forEach(function(question, index) {

      var questionDiv = document.getElementById(`question-${index}`);
      var selectedAnswer = questionDiv.querySelector(`input[name="${question.id}"]:checked`);
      

// Check to see if user has submitted correct answers.
        if (selectedAnswer && selectedAnswer.value === question.correctAnswer) { 

            if(!question.answeredCorrectly) {

                if (rightAnswers < maxRightAnswers) {
                    rightAnswers+= 1;
                }
                if (totalPoints < maxPoints) {
                    totalPoints+= 100;
                }
                question.answeredCorrectly = true;
                selectedAnswer.classlist.add('correct')
            }
            if (questions.length === rightAnswers) {
                console.log('you have finished the quiz!');
               
                alert('We win!!');
             
            document.querySelector('.checkAnswers').classlist.add('winner');
            // selectedAnswered.classlist.add('correct');
            }

        console.log('right answer: ' + question.correctAnswer);
        document.getElementById("total_questions").textContent = totalQuestions;
        document.getElementById("right_answers").textContent = rightAnswers;
        document.getElementById("total_points").textContent = totalPoints;
        
        } else {
            console.log('wrong answer, correct was: ' + question.correctAnswer +  "" + question.title);
        }
    });
}

// Event listener to check the answers when the answers are submitted.
document.getElementById('quiznos').addEventListener('submit', function(e) {
    e.preventDefault();
    checkAnswer(e);
 
});


}