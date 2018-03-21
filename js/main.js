// REFERENCES
const main = document.querySelector("main");
const form = document.querySelector("form");
const fullName = document.getElementById("fname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


const collectedData = {
    fullName: null,
    email: null,
    message: null
};

const errors = {};


function validateForm(ev) {
    ev.preventDefault();

    
    // validate full name
    
    
    if (fullName.value !== "") {
        if (fullName.value) {
            collectedData.fullName = fullName.value;
            delete errors.fn;
        } else {
            errors.fn = "full name is invalid";
        }
    } else {
        errors.fn = "full name is missing";
    }

    
    // validate email
    
    
    if (email.value !== "") {
        if (pattern.test(email.value)) {
            // add that value to collectedData.email
            collectedData.email = email.value;
            delete errors.em;
        } else {
            errors.em = "Email is invalid";
        }
    } else {
        errors.em = "Email is missing";
    }

    
    // validate message
    
    
    if (message.value !== "") {
        if (message.value) {
            collectedData.message = message.value;
            delete errors.ms;
        } else {
            errors.ms = "Message is invalid";
        }
    } else {
        errors.ms = "Message is missing";
    }

    // provide feedback or error-report
    
    
    if (Object.keys(errors).length === 0) {
        console.log(collectedData);
    } else {
        console.log(errors)
    }

} // END

form.addEventListener("submit", validateForm);