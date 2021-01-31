const form = document.querySelector('#form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPw = document.querySelector('#confirm__password');
const error = document.querySelectorAll('.container__login--error');

//creat an obj with all error section to access them later
let errorObj = {};
error.forEach((el) => {
    errorObj[el.attributes.class.value] = el;
})

let errorCount = 0; //set number of error. Later will be set that error > 0 == not submited and error field showed
let valueClass = "container__login--error " //help us to reach the good section later with concatenation


//event while submitting
form.addEventListener("submit", (e) => {
        errorCount = 0;
        checkInput();
        if (errorCount > 0) {
            e.preventDefault(); //if error, no submit
        } else {
            prompt('Submited'); //if no error, submit but no server here so prompt
        }
    })
    //event if a field is empty
function checkInput() {
    //creat arr with the different field
    let arr = [
            userName, email, password, confirmPw
        ]
        //make the same test to all the field (check if empty or not)
    arr.forEach((el) => {
        let elValue = el.value.trim();
        console.log(elValue);
        let element = valueClass + el.id
        let elementToChange = errorObj[element];
        console.log(elementToChange)
        if (elValue === '') {
            elementToChange.style.display = "block";
            errorCount += 1;

        } else {
            elementToChange.style.display = "none";
        }
        if (password.value != confirmPw.value && el === confirmPw) {
            elementToChange.style.display = "block";
            errorCount += 1;
        }
    })


}