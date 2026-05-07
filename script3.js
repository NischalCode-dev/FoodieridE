let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let emailError = document.querySelector(".Emailerror");
let passwordError = document.querySelector(".Passworderror");
let result = document.querySelector(".resultmessage");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    // hide everything first
    emailError.style.display = "none";
    passwordError.style.display = "none";
    result.style.display = "none";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    let isValid = true;

    if(!emailRegex.test(email.value)){
        emailError.textContent = "Wrong Email";
        emailError.style.display = "block";
        isValid = false;
    }

    if(!passwordRegex.test(password.value)){
        passwordError.textContent = "Password must be strong (8-20 chars, A-Z, a-z, number, symbol)";
        passwordError.style.display = "block";
        isValid = false;
    }

    if(isValid){
        result.textContent = "Your Form is Submitted. You'll be logged in!";
        result.style.display = "block";
    }
});
const toggle = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

toggle.addEventListener("click", function () {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggle.classList.remove("ri-eye-line");
        toggle.classList.add("ri-eye-off-line");
    } else {
        passwordInput.type = "password";
        toggle.classList.remove("ri-eye-off-line");
        toggle.classList.add("ri-eye-line");
    }

});