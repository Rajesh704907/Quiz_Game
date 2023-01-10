const quizDB = [
    [
        {
            question: "Q1: What is the full form of HTML ?",
            a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2:What is the smallest header in HTML by default? ",
        a: "h1 ",
        b: "h2 ",
        c: "h5",
        d: "h6",
        ans: "ans4"  
    },
    {
        question: "Q3: HTML files are saved by default with the extension ?",
        a: ".htmlt",
        b: ".ht",
        c: ".html",
        d: ".h",
        ans: "ans3"  
    },
    {
        question: "Q4: We enclose HTML tags within ?",
        a: "{}",
        b: "<>",
        c: "[]",
        d: "None of the above",
        ans: "ans2"  
    }
    
] ,

[
     {
        question: "Q1: What is the full form of CSS ?",
        a: "Cascading Style Short",
        b: "Cascading Short Style",
        c: "Cascading Style Sheets",
        d: "None of the above",
        ans: "ans3"  
    },
    {
        question: "Q2: Are the negative values allowed in padding property ?",
        a: "Yes",
        b: "No",
        c: "Can't be say",
        d: "May be",
        ans: "ans2" 

    } ,
    {
        question: "Q3: The CSS property used to specify the transparency of an element is -",
        a: "Opacity",
        b: "Filter",
        c: "Visibility",
        d: "None of the above",
        ans: "ans1"  
    },
    {
        question: "Q4: How to select the elements with the class name example ?",
        a: "#example",
        b: ".example",
        c: "@example",
        d: "class example",
        ans: "ans2"  
    }
] ,
[
    {
        question: "Q1: What is the full form of JS ?",
        a: "Javascript",
        b: "Javashow",
        c: "Scriptjava",
        d: "Javasuper",
        ans: "ans1" 
       
    },
    {
        question: "Q2: Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"  

    } ,
    {
        question: "Q3:Which one of the following is the correct way for calling the JavaScript code?",
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
        ans: "ans4"  
    },
    {
        question: "Q4: Which one of the following also known as Conditional Expression in js:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "immediate if",
        d: "Javasuper",
        ans: "ans3"  
    }
],
[
    
    {
        question: "Q1: Which of the following is not a Java features?",
        a: "Dynamic",
        b: "Use of pointers",
        c: "Object-oriented",
        d: "Architecture Neutral",
        ans: "ans2"  
    },
    {
        question: "Q2: What is the size of float and double in java?",
        a: "32 and 64",
        b: "64 and 64",
        c: "64 and 32",
        d: "3 and 6",
        ans: "ans1" 

    } ,
    {
        question: "Q3: _____ is used to find and fix bugs in the Java programs.",
        a: "JVM",
        b: "JRE",
        c: "JDK",
        d: "JDB",
        ans: "ans4"  
    },
    {
        question: "Q4:Which of the following is a reserved keyword in Java?",
        a: "object",
        b: "strictfp",
        c: "main",
        d: "system",
        ans: "ans2"  
    }
]
];


document.querySelector('.login').style.display = 'none'
    document.querySelector('.main-div').style.display = 'none'

    function login(){
        document.querySelector('.main-div').style.display = 'none'
        document.querySelector('.boxes').style.display = 'none'
        document.querySelector('.login').style.display = 'block'
    }
let i=0;
let questionCount=0;
let score =0;
function html(){
    i=0;
    questionCount=0;
    score =0;
    document.getElementById("vall").value = i;
    document.querySelector('.main-div').style.display = 'block'
    document.querySelector('#showScore').style.display = 'none'
    document.querySelector('.boxes').style.display = 'none'
    // document.querySelectorAll('.main-box')[0].style.display = 'none'
    loadQuestion();

}

function css(){
    i=1;
    questionCount=0;
    score =0;
    document.getElementById("vall").value = i;
    document.querySelector('.main-div').style.display = 'block'
     document.querySelector('#showScore').style.display = 'none'
     document.querySelector('.boxes').style.display = 'none'
    // document.querySelectorAll('.main-box')[1].style.display = 'none'
    loadQuestion();
}
function js(){
    i=2;
    questionCount=0;
    score =0;
    document.getElementById("vall").value = i;
    document.querySelector('.main-div').style.display = 'block'
    document.querySelector('#showScore').style.display = 'none'
    document.querySelector('.boxes').style.display = 'none'
    loadQuestion();

    // document.querySelector('.main-box').style.display = 'none'
    // document.querySelectorAll('.main-box')[2].style.display = 'none'
}
 function back(){
    document.querySelector('.boxes').style.display = 'flex' ;
    document.querySelector('.login').style.display = 'none'
    document.querySelector('.main-div').style.display = 'none'
 }
function java(){
    i=3;
    questionCount=0;
    score =0;
    document.getElementById("vall").value = i;
    document.querySelector('.main-div').style.display = 'block'
    document.querySelector('#showScore').style.display = 'none'
    document.querySelector('.boxes').style.display = 'none'
    loadQuestion();
    // document.querySelector('.main-box').style.display = 'none'
    // document.querySelectorAll('.main-box')[3].style.display = 'none'
}
const question =document.querySelector('.question');
const option1 =document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 =document.querySelector('#option3');
const option4 =document.querySelector('#option4');
const submit =document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


const loadQuestion = () =>{
   let ff =  document.getElementById("vall").value;
    const questionList = quizDB[ff][questionCount];
    console.log("fdgdgfgd", ff)
    console.log("fdgg", questionList)
  question.innerText = questionList.question;
  option1.innerText =questionList.a;
  option2.innerText =questionList.b;
  option3.innerText =questionList.c;
  option4.innerText =questionList.d;

}
loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) =>{
if(curAnsElem.checked){
    answer=curAnsElem.id;   
}
    });
    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',()=> {
const checkedAnswer = getCheckAnswer();
if(checkedAnswer)
{
    document.querySelector('#error').style.display = 'none'
    if(checkedAnswer === quizDB[i][questionCount].ans){
        score++;
        };
        
        questionCount++;
        
        deselectAll();
        if(questionCount < quizDB[i].length){
            loadQuestion();
        }
        else{
            document.querySelector('#showScore').style.display = 'block'
        
            showScore.innerHTML =  `
            <h3> You scored ${score}/${quizDB[i].length} &#9996;</h3>
            <button  id ="btn" class="btn" onclick="location.reload()"> Play Again </button>
           `;
        
        
        showScore.classList.remove('scoreArea');
        }
}
else{
    document.querySelector('#error').style.display = 'block';
}
});