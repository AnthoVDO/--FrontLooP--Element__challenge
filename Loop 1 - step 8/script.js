const btnSearch = document.querySelector('.btn-search');
const btnRun = document.querySelector('.btn-run');
const btnHiddeBack = document.querySelectorAll('.btn-hidde-back');
const btnClose = document.querySelectorAll('.btn-close');
const search = document.querySelector('.search');
const run = document.querySelector('.run');
const blackBox1 = document.querySelector('.black-box-1');
const blackBox2 = document.querySelector('.black-box-2');

const go = function(e) {
    if (e.currentTarget == btnSearch) {
        search.style.right = "0";
        blackBox1.style.opacity = "0.7";
    }
    if (e.currentTarget == btnRun) {
        run.style.right = "0";
        blackBox2.style.opacity = "0.7";
    }
}

btnSearch.addEventListener("click", go);
btnRun.addEventListener("click", go);


const goBack = function(e) {
    if (e.currentTarget == btnHiddeBack[0] || btnHiddeBack[1]) {
        search.style.right = "100vw"
        blackBox1.style.opacity = "0";
    }
    if (e.currentTarget == btnClose[0] || btnClose[1]) {
        run.style.right = "100vw"
        blackBox2.style.opacity = "0";
    }
}

btnHiddeBack.forEach(element => element.addEventListener("click", goBack));
btnClose.forEach(element => element.addEventListener("click", goBack));