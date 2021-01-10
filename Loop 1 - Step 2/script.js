let input = document.querySelector('#input');
let button = document.querySelector('#tab');
let positive = document.querySelector('#positive');
let negative = document.querySelector('#negative');
let neutral = document.querySelector('#neutral');
let answer = document.querySelector('#answer');
let active = document.querySelector('.active');
let li = document.querySelectorAll('li');


tab = {
    active: 'Positive content',
    negative: 'Negative content',
    neutral: 'Neutral content'
};

let arr = [positive, negative, neutral];


positive.addEventListener('click', changArr);
negative.addEventListener('click', changArr);
neutral.addEventListener('click', changArr);
button.addEventListener('click', checkTab);

function changArr() {
    arr.forEach(x => x.classList.remove('active'));
    this.classList.add('active');
    if (this == positive) { console.log('click on pos'); return answer.textContent = tab.active };
    if (this == negative) { console.log('click on neg'); return answer.textContent = tab.negative };
    if (this == neutral) { console.log('click on neutral'); return answer.textContent = tab.neutral };
}

function checkTab() {

    arr.forEach(x => x.classList.remove('active'));

    this.classList.add('active');
    if (input.value == "1") {
        return answer.textContent = tab.active;
    } else if (input.value == "2") {
        return answer.textContent = tab.negative;
    } else if (input.value == "3") {
        return answer.textContent = tab.neutral;
    } else {
        return prompt('Index is invalid');
    }
}