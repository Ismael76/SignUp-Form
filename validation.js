const fnameField = document.querySelector('#fname');
const lnameField = document.querySelector('#lname');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');

const labelFirstName = document.querySelector('#fname-val');
const labelLastName = document.querySelector('#lname-val');
const labelEmail = document.querySelector('#email-val');
const labelPassword = document.querySelector('#password-val');

const fnameErrorIcon = document.querySelector('.fname-error-icon')
const lnameErrorIcon = document.querySelector('.lname-error-icon')
const emailErrorIcon = document.querySelector('.email-error-icon')
const passwordErrorIcon = document.querySelector('.password-error-icon')

const submit = document.querySelector('.signup-btn');


submit.addEventListener('click', e => {

    const emailArray = emailField.value.split("");

    if (fnameField.value === '') { //.value gives us the users input inside the input field
        e.preventDefault(); //Stops submission of form!
        labelFirstName.innerText = "First Name cannot be empty!";
        submissionError(labelFirstName, fnameField, fnameErrorIcon);
    }

    if (lnameField.value === '') {
        e.preventDefault(); 
        labelLastName.innerText = "Last Name cannot be empty!";
        submissionError(labelLastName, lnameField, lnameErrorIcon);
    }


    if (!emailArray.includes('@') || !emailArray.includes('.')) {
        e.preventDefault(); 
        labelEmail.innerText = "This is an incorrect email!";
        if (emailField.value === '') {
            e.preventDefault(); 
            labelEmail.innerText = "Email cannot be empty!";
            submissionError(labelEmail, emailField, emailErrorIcon);
        }
    }

    if (passwordField.value === '') {
        e.preventDefault(); 
        labelPassword.innerText = "Password cannot be empty!";
        submissionError(labelPassword, passwordField, passwordErrorIcon);
    }

    if (fnameField.value !== '') {
        clear(labelFirstName, fnameField, fnameErrorIcon);
    }

    if (lnameField.value !== '') {
        clear(labelLastName, lnameField, lnameErrorIcon);
    }

    if (emailField.value !== '' && emailArray.includes('@') && emailArray.includes('.')) {
        clear(labelEmail, emailField, emailErrorIcon);
    }

    if (passwordField.value !== '') {
        clear(labelPassword, passwordField, passwordErrorIcon);
    }



});

function submissionError(label, field, icon) {

    label.style.fontSize = "12px"
    field.style.border = "0.5px solid hsl(0, 100%, 74%)";
    field.placeholder = "";
    icon.style.opacity = 1;
}

function clear(label, field, icon) {
    label.style.opacity = 0;
    field.style.border = "0.5px solid lightgray";
    field.placeholder = "";
    icon.style.opacity = 0;
}