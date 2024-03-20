

if (document.getElementById('quiznos')) {
const quiz = document.getElementById('quiznos');
const alienQuestion = document.getElementById('aliens_question');
const spaceQuestion = document.getElementById('space_question');
const butterflyQuestion = document.getElementById('butterfly_question');
const questions = [alienQuestion, spaceQuestion, butterflyQuestion];

 

  
let rightAnswers = 0;
let totalQuestions = questions.length;
let totalPoints = 0;


document.getElementById('total_questions').textContent = totalQuestions;
document.getElementById('right_answers').textContent = rightAnswers;
document.getElementById('total_points').textContent = totalPoints;

document.getElementById('quiznos').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('right_answers').textContent = rightAnswers;
    document.getElementById('total_points').textContent = totalPoints;
});

function checkAnswer(e) { 
    e.preventDefault();
    
  
   
    
    switch(alienQuestion.value) {
    case '1':
    rightAnswers+= 1;
    totalPoints+= 100;
    break;
    default:
       console.log('wrong');
    }

    switch(spaceQuestion.value) {
    case '2':
    rightAnswers+= 1;
    totalPoints+= 100;
    break;
    default:
       console.log('wrong');
    }

    switch(butterflyQuestion.value) {
    case '3':
    rightAnswers+= 1;
    totalPoints+= 100;
    break;
    default:
       console.log('wrong');
    }

    if (totalPoints >= 300) {
    quiz.style.display = 'none';
    
    } 
    if (totalPoints >= 300) {
    winner.style.display = 'block';
    
    } 
  }
}




