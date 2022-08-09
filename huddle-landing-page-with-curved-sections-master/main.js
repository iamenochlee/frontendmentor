
const errorMessage = document.getElementById('form-error');
const form = document.getElementById('form');
const emailInput = document.getElementById('form-email');
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// this function checks the input feed on onkeyup event
function emailInputValidation() {
    if(emailInput.value == "" || emailInput.value == null){
        errorMessage.innerHTML = "please input your mail";
        errorMessage.style.display = "block";
        return false;
    }
    if (!emailInput.value.match(mailFormat)){
        errorMessage.innerHTML = "wrong email format";
        errorMessage.style.display = "block";
        return false;
    }else{
        errorMessage.innerHTML = "";
        errorMessage.style.display = "block";
        return true;
    }
}

// this function checks if the input meets the criteria before submitting the form
function emailValidation(e) {
    let messages = [];
    if (emailInput.value == "" || !emailInput.value.match(mailFormat)) {
        messages.push('check your email please')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = messages.join(', ');
        errorMessage.style.display = "block";
        setTimeout(function() {
            errorMessage.style.display = "none";
        }, 3000);
    }
}

form.addEventListener("submit", emailValidation);




























































// const errorMessage = document.getElementById('form-error');
// const submitBtn = document.getElementById('form-submit');
// const form = document.getElementById('form');
// const emailInput = document.getElementById('form-email');

// var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// function emailValidation(e) {
//     let messages = [];
//     if (emailInput.value == "" || !emailInput.value.match(mailFormat)) {
//         messages.push('check your email please')
//     }

//     if (messages.length > 0) {
//         e.preventDefault()
//         errorMessage.innerText = messages.join(', ');
//     }
// }

// form.addEventListener("submit", emailValidation);