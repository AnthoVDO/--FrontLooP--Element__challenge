// Menu

const title = document.querySelector('.title');
const description = document.querySelector('.description');
const confirmation = document.querySelector('.confirmation');

//Right part

//section
const part_title = document.querySelector('.part_title');
const part_description = document.querySelector(".part_description");
const part_confirm = document.querySelector('.part_confirm');
const confirmed = document.querySelector('.confirmed');

//button

const sbm_title = document.querySelector(".sbm_title");
const sbm_back = document.querySelector(".sbm_back");
const sbm_description = document.querySelector(".sbm_description");
const sbm_goBack = document.querySelector(".sbm_goBack");
const submit = document.querySelector(".submit");

//content

const title_content = document.querySelector('.title_content');
const description_content = document.querySelector('.description_content');

//Event

//================block title
//send

const chooseTitle = function() {
    part_title.classList.add("hidden");
    part_description.classList.remove("hidden");
    description.classList.add("active");

}

sbm_title.addEventListener("click", chooseTitle);
description.addEventListener("click", chooseTitle);

//===================block description
//send

const chooseDescription = function() {
    if (description.classList.contains('active')) {
        part_description.classList.add("hidden");
        part_confirm.classList.remove("hidden");
        confirmation.classList.add("active");
    }


}

sbm_description.addEventListener("click", chooseDescription);
confirmation.addEventListener("click", chooseDescription);

//Back

const backToTitle = function() {
    if (!confirmation.classList.contains('active')) {
        part_title.classList.remove("hidden");
        part_description.classList.add("hidden");
        description.classList.remove("active");
    }


}

title.addEventListener("click", backToTitle);
sbm_back.addEventListener("click", backToTitle);

//================block confirm
//send
const confirmData = function() {
    part_confirm.classList.add("hidden");
    confirmed.classList.remove("hidden");

}

submit.addEventListener("click", confirmData);
//Back

const backToDescription = function() {
    if (description.classList.contains('active')) {
        part_description.classList.remove("hidden");
        part_confirm.classList.add("hidden");
        confirmation.classList.remove("active");
        confirmed.classList.add("hidden");
    }


}

description.addEventListener("click", backToDescription);
sbm_goBack.addEventListener("click", backToDescription);