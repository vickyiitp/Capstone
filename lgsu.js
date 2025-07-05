let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let phoneField = document.getElementById("phoneField");
let title = document.getElementById("title");


signinBtn.onclick = function() {
    nameField.style.maxHeight = "0px";
    phoneField.style.maxHeight = "0px";
    title.innerText ="Sign In";
    signupBtn.classList.add("disableEm");
    signinBtn.classList.remove("disableEm");
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    clearFields();
   
}

signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    phoneField.style.maxHeight = "60px";
    title.innerText ="Sign Up";
    signinBtn.classList.add("disableEm");
    signupBtn.classList.remove("disableEm");
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    validateFields();
    clearFields();
    clearErrorMessages();
   
   
}
function validateFields() {
  console.log("validateFields() called");

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let passwordError = document.getElementById("passwordError");

    if (nameError) nameError.innerText = name === "" ? "Name is required!" : "";
    if (emailError) emailError.innerText = email === "" ? "Email is required!" : "";
    if (phoneError) phoneError.innerText = phone === "" ? "Phone number is required!" : "";
    if (passwordError) passwordError.innerText = password === "" ? "Password is required!" : "";
}

function clearFields() {
     console.log("clearField() called");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";
}
function clearErrorMessages() {
    let errorFields = ["nameError", "emailError", "phoneError", "passwordError"];
    errorFields.forEach(id => {
        let element = document.getElementById(id);
        if (element) {
            element.innerText = "";
        } else {
            console.error(`Element with ID ${id} not found!`);
        }
    });
}

// // Get the error container
// const errorContainer = document.getElementById("errorContainer");

// // Modified functions to use the error container
// function showError(message) {
//     errorContainer.textContent = message;
//     errorContainer.style.display = "block";
// }

// function clearErrors() {
//     errorContainer.textContent = "";
//     errorContainer.style.display = "none";
// }

// function switchToSignIn() {
//     nameField.style.maxHeight = "0px";
//     phoneField.style.display = "none";
//     if (confirmPasswordField) confirmPasswordField.style.display = "none";
//     title.innerText = "Sign In";
//     signupBtn.classList.add("disable");
//     signinBtn.classList.remove("disable");
//     clearFields();
//     clearErrors();
//     clearInlineErrors(); // Clear any inline error messages
    
//     // Additional validation for sign in
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();
//     let isValid = true;
//     let errorMessage = "";

//     if (!email) {
//         errorMessage += "• Email is required\n";
//         isValid = false;
//     } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//         errorMessage += "• Invalid email format\n";
//         isValid = false;
//     }

//     if (!password) {
//         errorMessage += "• Password is required\n";
//         isValid = false;
//     }

//     if (!isValid) {
//         showError(errorMessage);
//     }

//     return isValid;
// }

// function switchToSignUp() {
//     nameField.style.maxHeight = "60px";
//     phoneField.style.display = "flex";    
//     title.innerText = "Sign Up";
//     signinBtn.classList.add("disable");
//     signupBtn.classList.remove("disable");
//     clearFields();
//     clearErrors();
//     clearInlineErrors(); // Clear any inline error messages
    
//     // Additional validation for sign up
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     const password = document.getElementById("password").value.trim();
//     const confirmPassword = confirmPasswordField ? document.getElementById("confirmPassword").value.trim() : "";
    
//     let isValid = true;
//     let errorMessage = "";

//     if (name && !/^[A-Za-z\s]+$/.test(name)) {
//         errorMessage += "• Name must contain only letters\n";
//         isValid = false;
//     }

//     if (email && !/^\S+@\S+\.\S+$/.test(email)) {
//         errorMessage += "• Invalid email format\n";
//         isValid = false;
//     }

//     if (phone && !/^\d{10}$/.test(phone)) {
//         errorMessage += "• Phone must be 10 digits\n";
//         isValid = false;
//     }

//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
//     if (password && !passwordRegex.test(password)) {
//         errorMessage += "• Password must contain letter, number & special char\n";
//         isValid = false;
//     }

//     if (confirmPasswordField && password !== confirmPassword) {
//         errorMessage += "• Passwords do not match\n";
//         isValid = false;
//     }

//     if (!isValid) {
//         showError(errorMessage);
//     }

//     return isValid;
// }

// // Keep your existing clearFields function
// function clearFields() {
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("phone").value = "";
//     document.getElementById("password").value = "";
//     if (confirmPasswordField) document.getElementById("confirmPassword").value = "";
// }

// // New function to clear inline errors (if you still want to keep them)
// function clearInlineErrors() {
//     const errorFields = ["nameError", "emailError", "phoneError", "passwordError", "confirmPasswordError"];
//     errorFields.forEach(id => {
//         const element = document.getElementById(id);
//         if (element) element.textContent = "";
//     });
// }

// // Modified event listeners
// signinBtn.onclick = function() {
//     if (switchToSignIn()) {
//         clearErrors();
//         alert("Sign in successful!");
//     }
// };

// signupBtn.onclick = function() {
//     if (switchToSignUp()) {
//         clearErrors();
//         alert("Sign up successful!");
//     }
// };

// // On load, default to Sign Up view
// window.addEventListener("load", () => {
//     switchToSignUp();
// });