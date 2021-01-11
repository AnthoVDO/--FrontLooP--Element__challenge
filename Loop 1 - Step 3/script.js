const toggles = document.querySelectorAll('.toggle-switch');


const change = function(toggle) {

    toggles.forEach(e => {
        if (e === init) {
            e.currentTarget.classList.toggle('active');
        } else {
            number = Math.floor(Math.random() * 2);
            if (number == 1) {
                e.classList.toggle('active');
            };
        }
    })


};
toggles.forEach(toggle => {
    toggle.addEventListener("click", change);
});