let questioncount = 0;
let questionnum = 1;
let userscore=0;

const nextbtn=document.querySelector(".next-btn");
const prevbtn=document.querySelector(".prev-btn");
const quizbox=document.querySelector(".border");
const resultbox=document.querySelector(".resultbox");
const tryagain=document.querySelector(".tryagain");
const gohome=document.querySelector(".gohome");


tryagain.onclick = () =>{
    quizbox.classList.remove('quizbox-inactive');
    resultbox.classList.remove('resultbox-active');
     questioncount = 0;
    questionnum = 1;
    userscore=0;
    showquestions(questioncount);
    questioncounter(questionnum);
    headerscore();
}



nextbtn.onclick = () =>{
    if(questioncount < questions.length-1){
    questioncount++;
    showquestions(questioncount);
    questionnum++;
    questioncounter(questionnum);
    }
    else{
        console.log('questions completed');
        showresultbox();
    }
    headerscore()
    nextbtn.classList.remove('active');
}
// prevbtn.onclick = () =>{
//     if(questioncount>=0){
//     questioncount--;
//     showquestions(questioncount);
//     questionnum--;
//     questioncounter(questionnum);
//     }
//     else{
//         console.log('this is the first question');
//     }
// }

const optionList=document.querySelector('.optionList')
showquestions(0)
function showquestions(index) {
    const questionText=document.querySelector(".question-text");
    questionText.textContent = `${questions[index].que}`
    let optionsTag= ` <div class="option"><span>${questions[index].opt[0]}</span></div>
    <div class="option"><span>${questions[index].opt[1]}</span></div>
    <div class="option"><span>${questions[index].opt[2]}</span></div>
    <div class="option"><span>${questions[index].opt[3]}</span></div>`;
    optionList.innerHTML=optionsTag;
    const option=document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick','optionSelected(this)');
        
    }
}

function optionSelected(answer) {
    let useranswer = answer.textContent;
     let correctanswer = questions[questioncount].answer;
     let alloptions=optionList.children.length;
    
    if(useranswer == correctanswer){
        console.log('correct answer');
        answer.classList.add('correct');
        userscore +=1;
        headerscore();
    }
    else{
        console.log('wrong answer');
        answer.classList.add('incorrect');
        for (let i = 0; i < alloptions; i++) {
            if(optionList.children[i].textContent == correctanswer){
                optionList.children[i].setAttribute('class','option correct')
            }
             
         }

    }
    for (let i = 0; i < alloptions; i++) {
       optionList.children[i].classList.add('disabled');
        
    }

    nextbtn.classList.add('active');
    
 
}

function questioncounter(index) {
    const questionTotal=document.querySelector('.question-total');
     questionTotal.textContent=`(${index} of ${questions.length})` ;
}
questioncounter(1);

function headerscore() {
    const headerscoretext=document.querySelector('.score');
    headerscoretext.textContent = `Score : ${userscore}/${questions.length}`
}
headerscore(0);

function showresultbox() {
    quizbox.classList.add('quizbox-inactive');
    resultbox.classList.add('resultbox-active');
    const scoretext=document.querySelector('.score-text');
    scoretext.textContent=`Your Score :${userscore} out of ${questions.length}`;
    const circularprogress=document.querySelector('.circular-progress');
    const progressvalue=document.querySelector('.progress-value');
    let progressStartValue=-1;
    let progressEndValue=(userscore/questions.length)*100;
    let progressSpeed=20;
    let progress= setInterval(() => {
        progressStartValue++;
        // console.log(progressStartValue);
      progressvalue.textContent=`${progressStartValue}%`;
      circularprogress.style.background = `conic-gradient(#3498DB ${progressStartValue*3.6}deg,rgb(47 42 42 / 10%) 0deg)`
        if(progressStartValue==progressEndValue){
            clearInterval(progress);
        }
    }, progressSpeed);

}
