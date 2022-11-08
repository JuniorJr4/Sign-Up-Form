const pass1 = document.getElementById("pwd");
const pass2 = document.getElementById("pwd2");
const submitBtn = document.querySelector(".submit");
const errorMsg = document.querySelector(".error");
const inputs = document.querySelectorAll(".inp");
const firstName = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");

inputs.forEach((inp) => {
  inp.addEventListener("input", validateInput);
});

function validateInput() {
  let firstNameValid = firstName.checkValidity();
  let surnameValid = surname.checkValidity();
  let emailValid = email.checkValidity();
  let telValid = tel.checkValidity();
  if (firstNameValid) {
    firstName.style.outline = "2px solid rgb(0, 175, 0)";
  } else {
    firstName.style.outline = "2px solid rgb(255, 73, 73)";
  }
  if (surnameValid) {
    surname.style.outline = "2px solid rgb(0, 175, 0)";
  } else {
    surname.style.outline = "2px solid rgb(255, 73, 73)";
  }
  if (emailValid) {
    email.style.outline = "2px solid rgb(0, 175, 0)";
  } else {
    email.style.outline = "2px solid rgb(255, 73, 73)";
  }
  if (telValid) {
    tel.style.outline = "2px solid rgb(0, 175, 0)";
  } else {
    tel.style.outline = "2px solid rgb(255, 73, 73)";
  }
  if (pwdsMatch) {
    pass1.style.outline = "2px solid rgb(0, 175, 0)";
    pass2.style.outline = "2px solid rgb(0, 175, 0)";
  } else {
    pass1.style.outline = "2px solid rgb(255, 73, 73)";
    pass1.style.outline = "2px solid rgb(255, 73, 73)";
  }
  if (firstNameValid && surnameValid && emailValid && telValid && pwdsMatch) {
    submitBtn.style.pointerEvents = "auto";
    submitBtn.style.opacity = "1.0";
  } else {
    submitBtn.style.opacity = "0.3";
    submitBtn.style.pointerEvents = "none";
  }
}

let password1, password2;
let pwdsMatch = false;

pass1.addEventListener("input", () => {
  password1 = pass1.value;
  password1 === password2
    ? ((pwdsMatch = true), (errorMsg.textContent = "Passwords match"))
    : ((pwdsMatch = false), (errorMsg.textContent = "Passwords do not match"));
  validateInput();
});

pass2.addEventListener("input", () => {
  password2 = pass2.value;
  password1 === password2
    ? ((pwdsMatch = true), (errorMsg.textContent = "Passwords match"))
    : ((pwdsMatch = false), (errorMsg.textContent = "Passwords do not match"));
  validateInput();
});
