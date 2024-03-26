

if (document.getElementById('quiznos')) {

var quiz = document.getElementById('quiznos');


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
] ;


var quizContainer = document.getElementById('quiznos');

questions.forEach(function(question) {
   var div = document.createElement('div');
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


  
let rightAnswers = 0;
var maxRightAnswers = questions.length;
let totalQuestions = questions.length;
let totalPoints = 0;

var maxPoints = questions.length + "00";

var selectedAnswer = "";


document.getElementById('total_questions').textContent = totalQuestions;
document.getElementById('right_answers').textContent = rightAnswers;
document.getElementById('total_points').textContent = totalPoints;

document.getElementById('quiznos').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('right_answers').textContent = rightAnswers;
    document.getElementById('total_points').textContent = totalPoints;
});



function checkAnswer(e) { 
    questions.forEach(function(question) {
        var selectedAnswer = document.querySelectorAll(`input[name="${question.id}"]:checked`);

        if (selectedAnswer && selectedAnswer.value === question.correctAnswer) { 
            if (rightAnswers < maxRightAnswers) {
                rightAnswers++;
            }
            if (totalPoints < maxPoints) {
                totalPoints += 100;
            }
            console.log('right answer: ' + question.correctAnswer);
        } else {
            console.log('wrong answer, correct was: ' + question.correctAnswer +  "" + question.title);
        }
    });
}



document.getElementById('quiznos').addEventListener('submit', function(e) {
    e.preventDefault();
    checkAnswer(e);

});

}