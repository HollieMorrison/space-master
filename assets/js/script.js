// check if an element with the id 'quiznos' exists within the document.
if (document.getElementById('quiznos')) {

// get the element with the id 'quiznos'
var quiz = document.getElementById('quiznos');

// array of questions, each question is an object that contains the question id, a title and options of the answers and shows the correct answer
var questions = [
   {
      id: "moonQuestion",
      questionNumber: 1,
      title: "How far is the Moon from Earth?",
      A: "38400 km",
      B: "12000 km",
      C: "30000 km",
      D: "50000 km",
      correctAnswer: "A"
   },
//      {
//       id: "planetQuestion",      
//       questionNumber: 2,
//       title: "What planet is closest to the sun?",
//       A: "Saturn",
//       B: "Mercury",
//       C: "Earth",
//       D: "Uranus",
//       correctAnswer: "B"
//    },
//      {
//       id: "saturnQuestion",      
//       questionNumber: 3,
//       title: "How many rings does Saturn have?",
//       A: "24",
//       B: "6",
//       C: "8",
//       D: "3",
//       correctAnswer: "C"
//    },
//       {
//       id: "plutoQuestion",      
//       questionNumber: 4,
//       title: "What planet was removed as being classed as a planet?",
//       A: "Jupiter",
//       B: "Neptune",
//       C: "Mercury",
//       D: "Pluto",
//       correctAnswer: "D"
//    },
//      {
//     id: "marsQuestion",      
//     questionNumber: 5,
//     title: "What planet apart from Earth is said to be able to support life?",
//     A: "Jupiter",
//     B: "Neptune",
//     C: "Mercury",
//     D: "Mars",
//     correctAnswer: "D"
//  },
//  {
//     id: "jupiterQuestion",      
//     questionNumber: 6,
//     title: "What planet is the largest in our solar system?",
//     A: "Jupiter",
//     B: "Neptune",
//     C: "Venus",
//     D: "Earth",
//     correctAnswer: "A"
//  },
//  {
//     id: "starQuestion",      
//     questionNumber: 7,
//     title: "What is a star?",
//     A: "Dust",
//     B: "Water",
//     C: "Fire",
//     D: "Gas",
//     correctAnswer: "D"
//  },
//  {
//     id: "earthQuestion",      
//     questionNumber: 8,
//     title: "What is the center of the earth called?",
//     A: "Hole",
//     B: "Core",
//     C: "Hell",
//     D: "Pulp",
//     correctAnswer: "B"
//  },
] ;


// get the element container for the quiz questions
var quizContainer = document.getElementById('questions');
// turn on variables to keep track of quiz points, answers and maximum amount of points.
let rightAnswers = 0;
var maxRightAnswers = questions.length;
let totalQuestions = questions.length;
let totalPoints = 0;
let currentQuestionIndex = questions.length;

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

document.getElementById('question-0').style.display = 'block';
document.getElementById('question-0').classList.add('current_question');
// Event listener for the next button.
document.getElementById('next').addEventListener('click', function() {
    var currentQuestion = document.querySelector('.current_question');
    var nextQuestion = currentQuestion.nextElementSibling;
   
    
    currentQuestion.classList.remove('current_question');
currentQuestionIndex+= 1;
    if(nextQuestion) {
    currentQuestion.style.display = 'none';
    }
    if(nextQuestion) {
       currentQuestion.style.display = 'none';
       nextQuestion.classList.add('current_question');
       nextQuestion.style.display = 'block';
       document.getElementById('next').disabled = false;
    } else if(nextQuestion === null) {
        
        currentQuestion.classList.add('current_question');
    } else  {
        document.getElementById('question-0').classList.add('current_question');
        currentQuestion.style.display = 'block';
    } 
});
document.getElementById('prev').addEventListener('click', function() {
    var prevCurrentQuestion = document.querySelector('.current_question');
    var prevQuestion = prevCurrentQuestion.previousElementSibling;
    prevCurrentQuestion.classList.remove('current_question');
currentQuestionIndex--;
    if(prevQuestion) {
        prevQuestion.style.display = 'none';
    }
    if(prevQuestion) {
    prevCurrentQuestion.style.display = 'none';
       prevQuestion.classList.add('current_question');
       prevQuestion.style.display = 'block';
       document.getElementById('prev').disabled = false;
    }else if(prevQuestion === null) {
        prevCurrentQuestion.classList.add('current_question');
    } else {
     document.getElementById('question-0').classList.add('current_question');
     prevCurrentQuestion.style.display = 'block';
    }
});


// A function that checks the correct answers with the users input.
function checkAnswer(e) { 
    questions.forEach(function(question, index) {
      var questionDiv = document.getElementById(`question-${index}`);
      var selectedAnswer = questionDiv.querySelector(`input[name="${question.id}"]:checked`);
      var halfway = questions.length / 2;
     
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
            }
            if (rightAnswers.value >= halfway.value) {
            console.log('you are halfway through the quiz!');
            alert('You are halfway through the quiz!');
            }

            if(questionDiv === questions.length) {
                alert('LAST QUESTION FAM!!')
            }
                
            console.log('right answer: ' + question.correctAnswer);
            document.getElementById("total_questions").textContent = totalQuestions;
            document.getElementById("right_answers").textContent = rightAnswers;
            document.getElementById("total_points").textContent = totalPoints;

            
            if (rightAnswers === questions.length) {
             console.log('you have finished the quiz!');
             document.querySelector('.checkAnswers').classList.add('all-answered-true');

             document.querySelector('.winner_wrap').classList.add('show');
             
            }
        
        } else {
            console.log('wrong answer, correct was: ' + question.correctAnswer +  "" + question.title);
        }
        
    });

    console.log('right answers: ' + rightAnswers);

}

// Event listener to check the answers when the answers are submitted.
document.getElementById('quiznos').addEventListener('submit', function(e) {
    e.preventDefault();
    checkAnswer(e);
 
});


document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.winner_wrap').classList.remove('show');
});

}