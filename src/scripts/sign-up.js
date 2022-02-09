const usernameElement = document.getElementById('username-field');
const usernameWarning = document.getElementById('username-warning');
const emailElement = document.getElementById('user-email-field');
const emailWarning = document.getElementById('email-warning');
const passwordElement1 = document.getElementById('user-password-field1');
const passwordElement2 = document.getElementById('user-password-field2');
const passwordWarning = document.getElementById('password-warning');
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


usernameElement.addEventListener('keyup', checkUsername);
emailElement.addEventListener('keyup', checkEmail);
passwordElement1.addEventListener('keyup',checkPassword);
passwordElement2.addEventListener('keyup',matchPassword);

function checkUsername (username) {
    if (specialChars.test(username.target.value)) {
        usernameWarning.textContent = 'Usernames can not contain special characters';
    } else {
        usernameWarning.textContent = '';
    }
}

function checkEmail (email) {
    if (email.target.value.includes("@") || email.target.value === '') {
       emailWarning.textContent = '';
    } else {
        emailWarning.textContent = 'This is not a valid e-mailadress'
    }
}

function checkPassword (password) {
    if (password.target.value === '' || password.target.value.length > 6 && specialChars.test(password.target.value) ) {
        passwordWarning.textContent = '';
    } else {
        passwordWarning.textContent = 'Passwords must be at least six characters long and contain one special character'
    }
}

function matchPassword (password) {
    if (password.target.value === '' || passwordElement2.value === passwordElement1.value) {
        emailWarning.textContent = ''
    } else {
        emailWarning.textContent = 'The passwords do not match'
    }
}