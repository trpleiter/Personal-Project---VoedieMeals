const usernameElement = document.getElementById('username-field');
const usernameWarning = document.getElementById('username-warning');
const passwordElement = document.getElementById('user-password-field');
const passwordWarning = document.getElementById('password-warning');
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


usernameElement.addEventListener('keyup', checkUsername);
passwordElement.addEventListener('keyup',checkPassword);

function checkUsername (username) {
    if (specialChars.test(username.target.value)) {
        usernameWarning.textContent = 'Usernames can not contain special characters';
    } else {
        usernameWarning.textContent = '';
    }
}

function checkPassword (password) {
    if (password.target.value === '' || password.target.value.length > 6 && specialChars.test(password.target.value) ) {
        passwordWarning.textContent = '';
    } else {
        passwordWarning.textContent = 'Passwords must be at least six characters long and contain one special character'
    }
}