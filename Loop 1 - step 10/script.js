const card = document.querySelector('.card');
const container = document.querySelector(".container");
cardPosition = card.getBoundingClientRect();


container.addEventListener("dragover", (e) => {
    e.preventDefault();
})

container.addEventListener('drop', (e) => {

    e.preventDefault();
    card.style.top = `${e.pageY-100}px`;
    card.style.left = `${e.pageX-100}px`;
})