const toggles = document.querySelectorAll('.toggle-switch');


const change = function(i) { //need to put the i argument to be able later to find the calling add even listener

    toggles.forEach(e => { //check again over the differents toggles
        if (e === i.currentTarget) { // if the toggle e is equal to the toggle who call the even listener
            i.currentTarget.classList.toggle('active');
        } else {
            number = Math.floor(Math.random() * 2);
            if (number == 1) {
                e.classList.toggle('active');
            };
        }
    })


};
toggles.forEach(toggle => {
    toggle.addEventListener("click", change); //never put the () in the add event listener because it's calling the function while refresh the page;
});