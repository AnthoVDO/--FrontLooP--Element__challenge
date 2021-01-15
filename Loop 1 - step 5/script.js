const txt = document.querySelector('h2');
const btn = document.querySelector('button');

txt.textContent = "We can help you with "
const first = "We can help you with ";
let word = ["design", "frontend", "backend", "testing", "design"];

const test = function() {
    let count = 0;
    let delay = 0;
    let blink = 0;
    word.forEach(x => {
        let second = "";
        delay++;
        setTimeout(function() {

            for (let i = 0; i < x.length; i++) {

                count++;
                setTimeout(function() {
                    blink++;
                    second += x[i];
                    txt.textContent = first + second + "|";


                }, 200 * count);
            }



        }, 1000 * delay)

    })


}


btn.addEventListener('click', test);