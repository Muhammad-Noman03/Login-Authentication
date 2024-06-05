// SELECTORS
// SIGN UP SELECTORS
const signUpInputs = document.querySelectorAll('.signUp-inputs');
const name = document.querySelector('#name');
const signUpEmail = document.querySelector('#signUpEmail');
const signUpPassword = document.querySelector('#signUpPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const signUpBtn = document.querySelector('#signUpBtn');
const signUpForm = document.querySelector('#signUpForm');
const signUpFormBtn = document.querySelector('#signUpFormBtn');

// SIGN IN SELECTORS
const signInInputs = document.querySelectorAll('.signIn-inputs');
const signInEmail = document.querySelector('#signInEmail');
const signInPassword = document.querySelector('#signInPassword');
const signInBtn = document.querySelector('#signInBtn');
const signInForm = document.querySelector('#signInForm');
const signInFormBtn = document.querySelector('#signInFormBtn');


// VARIABLES
const data = []
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

// SIGN UP EMPTY INPUT CHECK
signUpInputs.forEach(input => {
    input.addEventListener('input', () => checkInput(signUpInputs, signUpBtn))
})

// SIGN IN EMPTY INPUT CHECK
signInInputs.forEach(input => {
    input.addEventListener('input', () => checkInput(signInInputs, signInBtn))
})


signUpBtn.addEventListener('click', () => {
    const getValues = getSignUpData(name, signUpEmail, signUpPassword, confirmPassword);

    const valid = signUpValidation(getValues);

    if (valid) {
        data.push(getValues);


        name.value = ''
        signUpEmail.value = ''
        signInPassword.value = ''
        confirmPassword.value = ''
    }

})

// FUNCTION TO GET SIGN UP DATA FROM SIGN UP INPUTS
function getSignUpData(n, se, sp, cp) {
    return {
        name: n.value,
        email: se.value,
        password: sp.value,
        confirmPassword: cp.value
    }
}

// FUNCTION TO GET SIGN IN DATA FROM SIGN UP INPUTS
function getSignInData(se, sp) {
    return {
        email: se.value,
        password: sp.value
    }
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
}

// FUNCTION TO CHECK EMAIL VALIDATION AND PASSWORD CONFIRMATION
function signUpValidation(data) {

    const { email, password, confirmPassword } = data;

    if (!emailRegEx.test(email) || password !== confirmPassword) {
        return false;
    }

    return true;
}

// FUNCTION TO CHECK EMAIL VALIDATION AND PASSWORD CONFIRMATION
function signUpValidation(signUpData, signInData) {

    const { signUpEmail, signUpPassword } = signUpData;
    const { signInEmail, signInPassword } = signInData;

    if (signInEmail !== signUpEmail || signInPassword !== signUpPassword) {
        return false;
    }

    return true;
}

// CHECK INITIALLY FOR EMPTY INPUTS
checkInput(signInInputs, signInBtn)
checkInput(signUpInputs, signUpBtn)