
const pass1 = document.getElementById('pwd');
const pass2 = document.getElementById('pwd2');
const submitBtn = document.querySelector('.submit');
const errorMsg = document.querySelector('.error');

let password1, password2;

pass1.addEventListener('input', () => {
    console.log(password1);
    password1 = pass1.value;
    password1 === password2 ? (
        pass1.style.outline = '2px solid rgb(0, 175, 0)',
        pass2.style.outline = '2px solid rgb(0, 175, 0)',
        submitBtn.style.opacity = '1.0',
        submitBtn.style.pointerEvents = 'auto')
        :
        (pass1.style.outline = '2px solid rgb(255, 73, 73)',
            pass2.style.outline = '2px solid rgb(255, 73, 73)',
            submitBtn.style.opacity = '0.3',
            submitBtn.style.pointerEvents = 'none',
            errorMsg.textContent = 'Passwords do not match')
});

pass2.addEventListener('input', () => {
    console.log(password2);
    password2 = pass2.value;
    password1 === password2 ? (
        pass1.style.outline = '2px solid rgb(0, 175, 0)',
        pass2.style.outline = '2px solid rgb(0, 175, 0)',
        submitBtn.style.opacity = '1.0',
        submitBtn.style.pointerEvents = 'auto',
        errorMsg.textContent = 'Passwords match')
        :
        (pass1.style.outline = '2px solid rgb(255, 73, 73)',
            pass2.style.outline = '2px solid rgb(255, 73, 73)',
            submitBtn.style.opacity = '0.3',
            submitBtn.style.pointerEvents = 'none',
            errorMsg.textContent = 'Passwords do not match')
});

console.log('dfdgfdgfd');
