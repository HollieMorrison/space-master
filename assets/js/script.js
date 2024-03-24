

if (document.getElementById('quiznos')) {
var quiz = document.getElementById('quiznos');
const alienQuestion = document.getElementById('aliens_question');
const spaceQuestion = document.getElementById('space_question');
const butterflyQuestion = document.getElementById('butterfly_question');
var questions = [
   {
      id: "moonQuestion",
      title: "How far is the Moon?",
      A: "it lives next door",
      B: "no idea",
      C: "i am sure it is pretty far",
      D: "some km",
      correctAnswer: "C"
   },
     {
      id: "planetQuestion",
      title: "What planet is closest to the sun?",
      A: "it lives next door",
      B: "no idea",
      C: "i am sure it is pretty far",
      D: "some km",
      correctAnswer: "C"
   },
     {
      id: "saturnQuestion",
      title: "How many rings does Saturn have?",
      A: "it lives next door",
      B: "no idea",
      C: "i am sure it is pretty far",
      D: "Mercury",
      correctAnswer: "D"
   },
] ;


var quizContainer = document.getElementById('quiznos');

questions.forEach(function(question) {
   var div = document.createElement('div');
   div.innerHTML = `
   <h2>${question.title}</h2>
   <label for="${question.id}" class="form_elem">
   <input type="radio" name="${question.id}" value="A">
   ${question.A}
    </label>
       <label for="${question.id}" class="form_elem" >
       <input type="radio" name="${question.id}" value="B">
       ${question.B}
    </label>
       <label for="${question.id}" class="form_elem">
       <input type="radio" name="${question.id}" value="C">
       ${question.C}
    </label>
       <label for="${question.id}" class="form_elem">
       <input type="radio" name="${question.id}" value="D">
       ${question.D}
    </label>


   `;
   quizContainer.appendChild(div);
});


  
let rightAnswers = 0;
var maxRightAnswers = questions.length;
let totalQuestions = questions.length;
let totalPoints = 0;

var maxPoints = 300;

var selectedAnswer = "";


document.getElementById('total_questions').textContent = totalQuestions;
document.getElementById('right_answers').textContent = rightAnswers;
document.getElementById('total_points').textContent = totalPoints;

document.getElementById('quiznos').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('right_answers').textContent = rightAnswers;
    document.getElementById('total_points').textContent = totalPoints;
});


var radioButton = document.querySelector(`input[name="${questions.id}"]:checked`);
if (radioButton) {
    var selectedAnswer = radioButton.value;
} else {
    console.log("No option selected for question " + questions.id);
}


function checkAnswer(e) { 
    e.preventDefault();

  
questions.forEach(function(question) {
    var selectedAnswer = document.querySelector(`input[name="${question.id}"]:checked`).value;

    if (question.correctAnswer === selectedAnswer) {
      if (rightAnswers < maxRightAnswers) {
        rightAnswers++;
      }
        totalPoints += 100;
        console.log('right answer: ' + question.correctAnswer);
    } else {
        console.log('wrong answer, correct was: ' + question.correctAnswer);
    }
});

    
    
   //  if (totalPoints >= 300) {
   //  quiz.style.display = 'none';
    
   //  } 
   //  if (totalPoints >= 300) {
   //  winner.style.display = 'block';
    
   //  } 
  }
}




console.log(selectedAnswer)