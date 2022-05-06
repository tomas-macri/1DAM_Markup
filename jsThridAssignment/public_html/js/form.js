    
document.addEventListener('DOMContentLoaded', assignEvents);

function assignEvents() {
    elements = document.getElementsByClassName("form-control");
    for (let i = 0; i < elements.length; i++) {
        //a. Three form events
        elements[i].addEventListener("focus", doFocus);
        elements[i].addEventListener("blur", doBlur);
    }
    document.getElementById("myForm").addEventListener("submit", doSubmit);
    document.getElementById("myForm").addEventListener("reset", doReset);
}

function doFocus(event) {
    event.target.style.backgroundColor = "lightblue";
}

function doBlur(event) {
    inputSelected = event.target;
    inputSelected.style.backgroundColor = "white";
    if (inputSelected.id === "email") {
        validate(inputSelected);
    } else if (inputSelected.id === "ageInput") { //age input --> b. HTML5 Built in form validation
        //c. Constraint Validation DOM Methods
        if (!inputSelected.checkValidity()) {
            alert("YOU CAN NOT BE YOUNGER THAN 18 OR OLDER 99");
            inputSelected.value = "18";
        }
    }
}

function validate(inputSelected) {
    //e. Regular expression validation
    console.log(inputSelected);
    if (!inputSelected.value.includes("@")) {
        alert("REMEMBER THAT YOUR EMAIL MUST CONTAIN AN @");
    }
}

function acceptedPrivacyPolicy() {
    return document.getElementById("acceptPrivacy").checked;
}

function doSubmit(event) {
    //d. Javascript validation with PreventDefault
    if (!acceptedPrivacyPolicy())
    {
        let error = document.createElement("p");
        error.innerHTML = "In order to continue you must accept our privacy policy";
        error.id = "errorMessage";
        if (document.getElementById("errorMessage") === null) {
            document.body.appendChild(error);
        }
        event.preventDefault();

    } else {
        alert("Thank you for subscribing! You will be redirected shortly.");
    }
}

function doReset() {
    let error = document.getElementById("errorMessage");
    if (error !== null) {
        document.body.removeChild(error);
    }
}
        