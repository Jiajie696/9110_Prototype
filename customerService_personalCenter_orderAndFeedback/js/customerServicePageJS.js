window.onload = function() {
    let questionBoxObjs = document.getElementsByClassName("questionBox"); 
    for( let i = 0; i < questionBoxObjs.length; i++ ){
        questionBoxObjs[i].addEventListener('click',displayModel);
    }

    let closeModelObj = document.getElementsByClassName("close");
    closeModelObj[0].addEventListener('click', closeModel);
}


function displayModel() {
    //console.log("enter fun");
    let myAnswerModalObj = document.getElementById("myAnswerModal");
    myAnswerModalObj.style.display = "block";
    let modalQuestionObj = document.getElementById("modalQuestion");
    modalQuestionObj.innerHTML = this.innerHTML;
}

function closeModel() {
    
    let myAnswerModalObj = document.getElementById("myAnswerModal");
    myAnswerModalObj.style.display = "";
}