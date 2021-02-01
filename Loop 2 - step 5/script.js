const container = document.querySelector('.container');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const purple = document.querySelector('.purple');
const containerColor = document.querySelector('.container__colors');

let arrColor = [
    blue,
    green,
    yellow,
    red,
    purple
]

let color = [
    "rgb(0, 81, 255)",
    "rgb(46, 158, 36)",
    "rgb(255, 196, 0)",
    "rgb(163, 10, 10)",
    "rgb(92, 0, 128)"
]

let selected = 0;
let keyIsDown = false;

window.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === "Shift") {
        arrColor[selected].style.border = "white 3px solid";
        keyIsDown = true;
        containerColor.style.opacity = "100";

    }
    if (e.key === "ArrowRight" && keyIsDown === true) {
        arrColor[selected].style.border = "none";
        selected++;
        if (selected === arrColor.length) {
            selected = 0;
        }
        arrColor[selected].style.border = "white 3px solid";

    }
    if (e.key === "ArrowLeft" && keyIsDown === true) {
        arrColor[selected].style.border = "none";
        selected--;
        if (selected === -1) {
            selected = arrColor.length - 1;
        }
        arrColor[selected].style.border = "white 3px solid";

    }
})

window.addEventListener('keyup', (e) => {
    if (e.key === "Shift") {
        keyIsDown = false;
        containerColor.style.opacity = 0;
        let bgColor = color[selected];
        container.style.backgroundColor = bgColor;
    }
})