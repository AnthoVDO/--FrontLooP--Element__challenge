const btnSearch = document.querySelector('.btn-search');
const btnRun = document.querySelector('.btn-run');
const btnHiddeBack = document.querySelectorAll('.btn-hidde-back');
const btnClose = document.querySelectorAll('.btn-close');
const search = document.querySelector('.search');
const run = document.querySelector('.run');
const blackBox = document.querySelector('.black-box');

const go = function(e) {
    if (e.currentTarget == btnSearch) {
        search.style.right = "0";
    }
    if (e.currentTarget == btnRun) {
        run.style.right = "0";
    }
    blackBox.classList.remove('hidden-box');
}

btnSearch.addEventListener("click", go);
btnRun.addEventListener("click", go);


const goBack = function(e) {
    if (e.currentTarget == btnHiddeBack[0] || btnHiddeBack[1]) {
        search.style.right = "100vw"
    }
    if (e.currentTarget == btnClose[0] || btnClose[1]) {
        run.style.right = "100vw"
    }
    blackBox.classList.add('hidden-box');
}

btnHiddeBack.forEach(element => element.addEventListener("click", goBack));
btnClose.forEach(element => element.addEventListener("click", goBack));