var taskDetailsTrigger = false;
window.onload = function() {
    lockOrderAndFeedbackInput();
    hiddenTasksDetails();
    let orderObjGroup = document.getElementsByClassName("orderBlock");
    for( let i = 0; i< orderObjGroup.length; i++) {
        orderObjGroup[i].addEventListener('click',clickOrderReaction);
    }

}

function lockOrderAndFeedbackInput() {
    let inputObj = document.getElementsByTagName("input");
    for( let i = 0; i< inputObj.length; i++) {
        inputObj[i].setAttribute("disabled","disabled");
    }

}

function hiddenTasksDetails() {
    let taskDetailsObj = document.getElementById("tasksDetails");
    taskDetailsObj.style.display = "none";
}

function clickOrderReaction() {
    let taskDetailsObj = document.getElementById("tasksDetails"); 
    let promptStatObj = document.getElementById("promptStat");
    if(taskDetailsTrigger){
        taskDetailsObj.style.display = "none";
        taskDetailsTrigger = false;
        promptStatObj.style.display = "";
    }else{
        taskDetailsObj.style.display = "";
        taskDetailsTrigger = true;
        promptStatObj.style.display = "none";
    }
    
   
}