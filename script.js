// SELECTORS
const signUpInputs = document.querySelectorAll('.signUp-inputs');
const name = document.querySelector('#name');
const signUpEmail = document.querySelector('#signUpEmail');
const signUpPassword = document.querySelector('#signUpPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const signUpBtn = document.querySelector('#signUpBtn');

// VARIABLES
const data = []
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


signUpInputs.forEach(input => {
    input.addEventListener('input', () => checkInput(signUpInputs, signUpBtn))
})


signUpBtn.addEventListener('click', () => {
    const getValues = getData(name, signUpEmail, signUpPassword, confirmPassword);

    const valid = checkValidation(getValues);
    console.log(valid);

    if (valid) {
        data.push(getValues);
    }

})

// FUNCTION TO GET DATA FROM SIGN UP INPUTS
function getData(n, se, sp, cp) {
    const value = {
        name: n.value,
        email: se.value,
        password: sp.value,
        confirmPassword: cp.value
    }

    n.value = ''
    se.value = ''
    sp.value = ''
    cp.value = ''

    return value
}

// FUNCTION TO CHECK EMPTY SIGN UP INPUTS
function checkInput(input, btn) {
    let allFilled = true;
    input.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            btn.classList.add('not-filled');
        }
    });
    btn.disabled = !allFilled;
    if (!btn.disabled) {
        btn.classList.remove('not-filled')
    }
    console.log(btn.disabled);
}

// FUNCTION TO CHECK EMAIL VALIDATION AND PASSWORD CONFIRMATION
function checkValidation(data) {

    const { email, password, confirmPassword } = data;
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(emailRegEx.test(email));

    if (!emailRegEx.test(email) || password !== confirmPassword) {
        return false;
    }

    return true;
}