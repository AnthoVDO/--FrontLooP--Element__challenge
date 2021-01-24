const inputs = document.querySelectorAll('input');
const submit = document.querySelector('.submit');

//keyup event

let arr = [...inputs];

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('keyup', (e) => {
        console.log(e.currentTarget.value.length);
        if (i < (arr.length - 1) && e.currentTarget.value.length == 1) {
            arr[i + 1].focus();
        }
        if (i > 0 && e.currentTarget.value.length == 0) {
            arr[i - 1].focus();
        }
    })
}

let arrValues = [];


//submit button action
submit.addEventListener('click', () => {
    arr.forEach(e => arrValues.push(e.value));
    let ans = arrValues.join('');
    prompt("value is " + ans);
})

//non writting in the next box condition

//recursive function to check all the input before
let check = function(e) {
    let currentElement = arr.indexOf(e);
    let previous = currentElement - 1;
    if (currentElement > 0 && arr[previous].value.length == 0) {
        check(arr[previous]);
    } else {
        e.focus();
    }
}


// event while click which include the check recursive
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", () => {
        check(arr[i]);
    })
}