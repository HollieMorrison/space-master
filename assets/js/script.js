

if (document.getElementById('quiznos')) {
const quiz = document.getElementById('quiznos');
const alienQuestion = document.getElementById('aliens_question');
const spaceQuestion = document.getElementById('space_question');
const butterflyQuestion = document.getElementById('butterfly_question');
const questions = [alienQuestion, spaceQuestion, butterflyQuestion];
 

  
let rightAnswers = 0;
let totalQuestions = questions.length;

document.getElementById('total_questions').textContent = totalQuestions;
document.getElementById('right_answers').textContent = rightAnswers;

function checkAnswer(e) { 
   
    const answers = document.getElementById('answers');
    e.preventDefault();
    
    
    document.getElementById('right_answers').textContent = rightAnswers;
    
    
    switch(alienQuestion.value) {
    case 'millions':
    rightAnswers+= 1;
    break;
    default:
       console.log('wrong');
    }
    switch(spaceQuestion.value) {
    case 'She doesnt know':
    rightAnswers+= 1;
    break;
    default:
       console.log('wrong');
    }

    switch(butterflyQuestion.value) {
    case 'millions':
    rightAnswers+= 1;
    break;
    default:
       console.log('wrong');
    }
  }
}