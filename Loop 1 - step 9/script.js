const sticky = document.querySelector('.sticky');
const topOfSticky = sticky.offsetTop - 10;

let keepSticky = function() {
    if (window.scrollY >= topOfSticky) {
        document.body.classList.add("fixed-sticky");
    } else {
        document.body.classList.remove("fixed-sticky");
    }
}


window.addEventListener('scroll', keepSticky);








/*
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
}

let keep = (entries, observer) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio < 1) {

            entry.target.style.top = +1;
        }
    })

}

let observer = new IntersectionObserver(keep, options);


observer.observe(sticky);
*/