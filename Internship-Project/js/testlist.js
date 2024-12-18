let questioncount = 0;
const li1=document.getElementById('#li1');
li1.onclick=()=>{
    questioncount++;
    showquestions(questioncount);
}

function showquestions(index) {
    const questionText=document.querySelector(".question-text");
    questionText.textContent = `${questions[index].que}`
    let optionsTag= `<div class="ans ml-2 "><label class="radio"> <input type="radio" name="question1"value="A. Acceleration"><span>${questions[index].opt[0]}</span></label></div>
    <div class="ans ml-2 "><label class="radio"> <input type="radio" name="question1"value="A. Acceleration"><span>${questions[index].opt[1]}</span></label></div>
    <div class="ans ml-2 "><label class="radio"> <input type="radio" name="question1"value="A. Acceleration"><span>${questions[index].opt[2]}</span></label></div>
    <div class="ans ml-2 "><label class="radio"> <input type="radio" name="question1"value="A. Acceleration"><span>${questions[index].opt[3]}</span></label></div>`;
    optionList.innerHTML=optionsTag;
    
    
}



