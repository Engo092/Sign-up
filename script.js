const password = document.querySelector('.pwd');
const passwordConfirm = document.querySelector('.pwdconfirm');

password.addEventListener('input', () => {
    if (password.value != passwordConfirm.value) {
        password.setCustomValidity("Passwords do not match");
        passwordConfirm.setCustomValidity("Passwords do not match");
    } else {
        password.setCustomValidity("");
        passwordConfirm.setCustomValidity("");
    }
})

passwordConfirm.addEventListener('input', () => {
    if (password.value != passwordConfirm.value) {
        password.setCustomValidity("Passwords do not match");
        passwordConfirm.setCustomValidity("Passwords do not match");
    } else {
        password.setCustomValidity("");
        passwordConfirm.setCustomValidity("");
    }
})