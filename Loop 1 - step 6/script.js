let content = document.querySelector('.content');
let container = document.querySelector('.container');

// While the mouse is on the container
const moveOnIt = function(e) {
    let x = (window.innerWidth / 2 - e.pageX) / 50;
    let y = (window.innerHeight / 2 - e.pageY) / 50;
    content.style.transform = `rotateX(${y}deg) rotateY(${-x}deg) `;
}


container.addEventListener("mouseover", moveOnIt);

// Mouse enter 

const mouseEnter = function() {
    content.style.transition = "none";
}

container.addEventListener('mouseenter', mouseEnter);

// Mouse leave

const mouseLeave = function() {
    content.style.transition = "all 0.5s ease";
    content.style.transform = "rotateY(0deg) rotateX(0deg)"
}

container.addEventListener("mouseleave", mouseLeave);