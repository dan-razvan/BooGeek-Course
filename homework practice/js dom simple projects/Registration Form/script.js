let username = document.getElementById("Username")
let email = document.getElementById("Email")
let password = document.getElementById("Password")
let pswConfirmation = document.getElementById("Password confirmation")
let button = document.getElementById("button")
let error = document.querySelector("p")

// showing the error messages when it didn't pass the requirements
const showError = (input, errorMessage) => {
    input.parentElement.classList.remove("success")
    input.parentElement.classList.add("error")
    input.parentElement.querySelector("p").textContent = errorMessage
}

// making the green borders if it passes the requirements
const showSuccess = (input) => {
    input.parentElement.classList.remove("error")
    input.parentElement.classList.add("success")
    // error.textContent = errorMessage
}

// checking if there is an empty input 
function checkRequired(arr){
    arr.forEach((input) =>{
        if(input.value === ""){
            showError(input,  `Required ${input.id.toLowerCase()} input`)
        }else{
            showSuccess(input)
        } 
    })
}

//checking the minimum length required
const checkLength = (input, min) => {
    if(input.value.length < min){
        showError(input, `${input.id} must have at least ${min} characters!`)

    }else{
        
        showSuccess(input)
    }
}

//checking if the email has the required characters
const checkEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSuccess(input)

    }else{
        showError(input, "Email is not valid")
    }
}

//checking if the password values match

const checkPasswordsMatch = (pass1, pass2, min) => {
    if(pass2.value.length >= min){
        if(pass1.value === pass2.value){
            showSuccess(pass2)
        }else{
            showError(pass2, "Passwords don't match")
        }
    }else {
        showError(pass2,  `${pass2.id} must have at least ${min} characters!`)
    }
    
}

//adding event listener on the button to trigget the checker functions
button.addEventListener("click", () => {
    checkRequired([username, email, password, pswConfirmation])
    checkLength(username, 3, 15)
    checkEmail(email)
    checkLength(password, 6, 25)
    checkPasswordsMatch(password, pswConfirmation, 6)
    
    
    // checkLength(pswConfirmation, 6, 25)

})


