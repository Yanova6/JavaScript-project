let email = document.forms["form"]["email"];
let password = document.forms["form"]["password"];
let confirmPassword = document.forms["form"]["confirmPassword"];

let email_error = document.getElementById("email_error");
let pass_error = document.getElementById("password_error");

const validated = () => {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }
  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    pass_error.style.block = "block";
    password.focus();
    return false;
  }
  if (confirmPassword.value.length !== password.value.length) {
    confirmPassword.style.border = "1px solid red";
    confirmPassword.focus();
    return false;
  }
  location.href = "login/Login.html";
};

const email_Verify = () => {
  if (email.value.length >= 8) {
    email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
  }
};

const password_Verify = () => {
  if (password.value.length >= 5) {
    password.style.border = "1px solid silver";
    pass_error.style.display = "none";
    return true;
  }
};

email.addEventListener("textInput", email_Verify);
password.addEventListener("textInput", password_Verify);