const input = document.querySelector('#input');
const start = document.querySelector('#start');
const showTimer = document.querySelector('.showTimer');


start.addEventListener('click', (e) => {
    let newTimer = document.createElement('span'); //creat span
    newTimer.classList.add('time'); //add class to be orange, round, ...
    let timerDelay = input.value;
    showTimer.appendChild(newTimer); //add the span to the div;
    newTimer.innerText = timerDelay.toString();

    let theTimer = setInterval(function() {
        timerDelay--;
        newTimer.innerText = timerDelay.toString();

        if (timerDelay <= -1) {
            clearInterval(theTimer);
            console.log("stopped");
            showTimer.removeChild(newTimer);
        }

    }, 1000);


})