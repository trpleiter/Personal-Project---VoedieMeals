const emailElement = document.getElementById('user-email-field');
const emailWarning = document.getElementById('email-warning');

emailElement.addEventListener('keyup', checkEmail);

function checkEmail (email) {
    if (email.target.value.includes("@") || email.target.value === '') {
        emailWarning.textContent = '';
    } else {
        emailWarning.textContent = 'This is not a valid e-mailadress'
    }
}
