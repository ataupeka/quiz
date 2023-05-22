/*   All answer options   */

const option1 = document.querySelector('.option1'),
     option2 = document.querySelector('.option2'),
     option3 = document.querySelector('.option3');
   

/*   All options   */
const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'),
      numberOfQuestion = document.getElementById('number-of-question'),
      numberOfAllQuestions = document.getElementById('number-of-all-questions');


let indexOfQuestion, /* index of questuion   */
    indexOfPage = 0;  /* index of page   */

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');


let score=0; /* result of quiz */


const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestion2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');


const questions = [
{
    question: ' You are driving throught a vilage unfamiliar to you and cannot find a single sign indicating the speed limit. What is the maximum speed at wich you must travel?',
    options: [
        '70 km/h',
        '90 km/h',
        '50 km/h',    
    ],
    rightAnswer: 1
},

{
    question: ' The maximum speed for gravel roads is',
    options: [
        '80 km/h',     
        '90 km/h',
        '70 km/h',
      
    ],
    rightAnswer: 3
},


{
    question: 'No person may drive a road vehicule',
    options: [
        'If the spare is missing',
        'If an animal or an object obstructs the drivers view',
        'If the back seat is missing',
       
    ],
    rightAnswer: 2
},


];


numberOfAllQuestions.innerHTML = questions.length;   /* quantity of questions */



function load() {
    question.innerHTML = questions[indexOfQuestion].question;

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];



    numberOfQuestion.innerHTML = indexOfPage + 1; /* number of current page*/
    indexOfPage++;
}

let completedAnswers =[];


const randomQuestion = () => {
    let randomNumber =   Math.floor(Math.random() * questions.length);
    let hitDuplicate = false;

    if(indexOfPage == questions.length) {
        quizOver();

    } else{
        if(completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if(item == randomNumber) {
                    hitDuplicate = true;

                }
                
            });

            if(hitDuplicate == true) {
                randomQuestion();

            } else {
                indexOfQuestion = randomNumber;
                load();
            }

        };

if(completedAnswers == 0) {
    indexOfQuestion = randomNumber;
    load();
}



};
