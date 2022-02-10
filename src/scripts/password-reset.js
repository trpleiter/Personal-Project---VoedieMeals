const passwordElement1 = document.getElementById('user-password-field1');
const passwordElement2 = document.getElementById('user-password-field2');
const passwordWarning = document.getElementById('password-warning');
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

passwordElement1.addEventListener('keyup',checkPassword);
passwordElement2.addEventListener('keyup', matchPassword);

function checkPassword (password) {
    if (password.target.value === '' || password.target.value.length > 6 && specialChars.test(password.target.value) ) {
        passwordWarning.textContent = '';
    } else {
        passwordWarning.textContent = 'Passwords must be at least six characters long and contain one special character'
    }
}

function matchPassword (password) {
    if (password.target.value === '' || passwordElement2.value === passwordElement1.value) {
        passwordWarning.textContent = ''
    } else {
        passwordWarning.textContent = 'The passwords do not match'
    }
}