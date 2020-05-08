const options = document.querySelector('.options').children;
const quesNum =document.querySelector('.ques-num-value');
const totalNumQ=document.querySelector('.total-que-num');
const question =document.querySelector('.question');
const correctAnswerSpan =document.querySelector('.correct-answers');
const totalQuestionsSpan2 =document.querySelector('.total-questions');
const overalScore =document.querySelector('.totalscore');
const game = document.querySelector('.container');

const percentage =document.querySelector('.percentage');
const opt1 =document.querySelector('.option1');
const opt2 =document.querySelector('.option2');
const opt3 =document.querySelector('.option3');
const opt4 =document.querySelector('.option4');

let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score =0;



const questions =[
    {
        q:'What does Js mean?',
        options:['Java Sc','Javascript','John Solang','Justice Sava'],
        answer:1
    },

    {
        q:'What does HTML mean?',
        options:['HyperText MarkUp Language','Hyper Test mock Language','High Trans Ma Li','Hyer text Major Language'],
        answer:0
    },

    {
        q:'What is the full meaning of CSS?',
        options:['Canvas Style Sheet','Creative Styling System','Computer Style Sheet','Cascading Style Sheet'],
        answer:3
    },

    {
        q:'What does  HTTP stand for?',
        options:['HyperText transmission protocol','HyperText Transfer Protocol','High transfer Transmission Protocol','High Transmission Transfer Protocol'],
        answer:1
    },

    {
        q:'What does www stand for?',
        options:['world wide werbs','web wide world','world wide web','world web wan'],
        answer:2
    }
]


function check(element){
    if(element.id==questions[questionIndex].answer){
        element.classList.add('correct');
        score++;
        overalScore.textContent=`Score:${score}`;
      

        
    }else{
        element.classList.add('wrong');
    }
    disabledOption()
}

function disabledOption(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add('disabled');
        
    }
   
}

function enabledOption(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove('disabled','correct','wrong');

        
    }
}

function validate(){
    if(!options[0].classList.contains('disabled')){
        alert('please select an option');
    }else{
        enabledOption();
        randomQuestion();
    }
}
function next(){
   validate();
   
  
}

function randomQuestion(){
    let randonNumber = Math.floor(Math.random()*questions.length);
   let hitDuplicate =0;
    if(index==questions.length){
        quizOver();
    }
    else{
        if(myArray.length>0){
            for(let i=0; i<myArray.length; i++){
                if(myArray[i]==randonNumber){
                    hitDuplicate=1;
                    break;
                }
            }
            if(hitDuplicate==1){
                randomQuestion();
            }else{
                questionIndex=randonNumber; 
                load();  
                myArr.push(questionIndex);
            }
        }

        if(myArray.length==0){
         questionIndex=randonNumber; 
         load(); 
         myArr.push(questionIndex);
        }

     
     myArray.push(randonNumber);
   
    }  
}                

totalNumQ.innerHTML =questions.length;

function load(){
    quesNum.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    opt1.innerHTML=questions[questionIndex].options[0];
    opt2.innerHTML=questions[questionIndex].options[1];
    opt3.innerHTML=questions[questionIndex].options[2];
    opt4.innerHTML=questions[questionIndex].options[3];
    index++;
}

function quizOver(){
    document.querySelector('.quiz-over').classList.add('show');
    correctAnswerSpan.innerHTML=`Quiz Over Your Overall Score is:${score}`;
    game.style.display='none';
}



function exit(){
    document.location.reload();
    

}


window.onload=function(){
    randomQuestion()

    
}

let toggleMenu = document.querySelector('.fa-bars');
let link1 = document.querySelector('.container');
let link2 =document.querySelector('.options');
let toggleStatus = false;
toggleMenu.addEventListener('click', ()=>{

    if(toggleStatus===false){
        link1.style.visibility ="visible";
         toggleStatus = true;
    }


    
    else if(toggleStatus===true){
        link1.style.visibility ="hidden";
       

         toggleStatus = false;
    }
});


