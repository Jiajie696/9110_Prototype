window.onload = function() {
    lockInput();
    validCheck();
    let editButtonObj = document.getElementById("editButton");
    editButtonObj.addEventListener('click',editButtonReaction);

    let saveButtonObj = document.getElementById("saveButton");
    saveButtonObj.addEventListener('click', saveButtonReaction);

    let allInputObj = document.getElementsByTagName("input");
    let allSelectObj = document.getElementsByTagName("select");

    for (let i = 0; i < allInputObj.length; i++) {
        allInputObj[i].addEventListener('change',validCheck )
    }
}

function lockInput() {
    let allInputObj = document.getElementsByTagName("input");
    let allSelectObj = document.getElementsByTagName("select");
    
    for (let i = 0; i < allInputObj.length; i++) {
        allInputObj[i].setAttribute("disabled","disabled");
        console.log(i)
    }
    for (let i = 0; i < allSelectObj.length; i++) {
        allSelectObj[i].setAttribute("disabled","disabled");
        console.log(i)
    }

}

function editButtonReaction() {
    let allInputObj = document.getElementsByTagName("input");
    let allSelectObj = document.getElementsByTagName("select");
    for (let i = 0; i < allInputObj.length; i++) {
        let disabledValue = allInputObj[i].getAttribute("disabled");
        if (disabledValue == "disabled") {
            allInputObj[i].removeAttribute("disabled");
        }
    }
    for (let i = 0; i < allSelectObj.length; i++) {
        let disabledValue = allSelectObj[i].getAttribute("disabled");
        if (disabledValue == "disabled") {
            allSelectObj[i].removeAttribute("disabled");
        }
    }    
}

function saveButtonReaction() {
    let allInputObj = document.getElementsByTagName("input");
    let allSelectObj = document.getElementsByTagName("select");
    
    for (let i = 0; i < allInputObj.length; i++) {
        allInputObj[i].setAttribute("disabled","disabled");
        console.log(i)
    }
    for (let i = 0; i < allSelectObj.length; i++) {
        allSelectObj[i].setAttribute("disabled","disabled");
        console.log(i)
    }
}

function validCheck() {
    console.log("enter validCheck")
    let allInputObj = document.getElementsByTagName("input");

    //check input empty
    for (let i = 0; i < allInputObj.length; i++) {
        let valueOfInputObj = allInputObj[i].value;
        if(valueOfInputObj =="") {
            //delect warning firstly
            if(allInputObj[i].nextElementSibling.tagName == "P") {
                let warningBox = document.getElementById(allInputObj[i].nextElementSibling.id);
                warningBox.parentElement.removeChild(warningBox);
            }

            if(allInputObj[i].nextSibling.id != "noValueWarning") {
                allInputObj[i].style.borderColor = "red";
                let newWarningObj = document.createElement("p");
                newWarningObj.setAttribute("id","noValueWarning")
                newWarningObj.innerHTML = "Error!";
                newWarningObj.style.color ="red";
                newWarningObj.style.display ="inline";
                newWarningObj.style.fontSize= "0.7em";
                allInputObj[i].parentElement.insertBefore(newWarningObj,allInputObj[i].nextSibling);
            }

        }else {
            allInputObj[i].removeAttribute("style");
            
            if(allInputObj[i].nextSibling.id == "noValueWarning") {
                let noValueWarningObj = document.getElementById("noValueWarning");
                noValueWarningObj.parentElement.removeChild(noValueWarningObj);
            }

        }
    }

    //check email
    let emailRegRule = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
    if(allInputObj[1].value != "") {
        //check input empty

        if(allInputObj[1].nextElementSibling.tagName == "P") {
            let warningBox = document.getElementById(allInputObj[1].nextElementSibling.id);
            warningBox.parentElement.removeChild(warningBox);
        }

        if ( emailRegRule.test( allInputObj[1].value ) ) {
            // allInputObj[1].style.borderColor = "green";
            allInputObj[1].removeAttribute("style");
          }else {
              
              if(allInputObj[1].nextSibling.id != "invalidEmailWarning" ){
                 allInputObj[1].style.borderColor = "red";
                 let newWarningObj = document.createElement("p");
                 newWarningObj.setAttribute("id","invalidEmailWarning");
                 newWarningObj.innerHTML = "Invalid Email!";
                 newWarningObj.style.color ="red";
                 newWarningObj.style.display ="inline";
                 newWarningObj.style.fontSize= "0.7em";
                 allInputObj[1].parentElement.insertBefore(newWarningObj,allInputObj[1].nextSibling);
              }

     
          }
    }

    //check phone Number
    let phoneRegRule = /^[1][1,2,3,4,5,6,7,8,9][0-9]{9}$/;
    if(allInputObj[2].value != "") {
        if(allInputObj[2].nextElementSibling.tagName == "P") {
            let warningBox = document.getElementById(allInputObj[2].nextElementSibling.id);
            warningBox.parentElement.removeChild(warningBox);
        }

        if ( phoneRegRule.test( allInputObj[2].value ) ) {
            allInputObj[2].removeAttribute("style");
          }else {
              
              if(allInputObj[2].nextSibling.id != "invalidPhoneWarning" ){
                 allInputObj[2].style.borderColor = "red";
                 let newWarningObj = document.createElement("p");
                 newWarningObj.setAttribute("id","invalidPhoneWarning");
                 newWarningObj.innerHTML = "Invalid Phone!";
                 newWarningObj.style.color ="red";
                 newWarningObj.style.display ="inline";
                 newWarningObj.style.fontSize= "0.7em";
                 allInputObj[2].parentElement.insertBefore(newWarningObj,allInputObj[2].nextSibling);
              }

     
          }
    }

}
