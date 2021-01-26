const show = document.querySelector('.show');
const checking = document.querySelectorAll('li');

let arr = [...checking];
let sentence;
let arrSentence = [];
let add = ["Ice-cream", "Hot-dog", "Popcorn", "Cookie"];



arr.forEach(element => { //add event listener to all element in arr
    element.addEventListener("click", (e) => {

        //actions on normal button
        e.target.classList.toggle('hover');
        //check for all check button
        if (e.target.classList.contains("hover") && e.target.innerText == "Check all") {
            arr.forEach(e => {
                if (!e.classList.contains("hover")) {
                    e.classList.add('hover');
                }
                arrSentence = [...add];
            })
        } else {
            if (e.target.classList.contains("hover")) {
                if (arrSentence.indexOf("Please, select your food") > -1) {
                    let number = arrSentence.indexOf("Please, select your food");
                    arrSentence.splice(number, 1); //remove select your food sentence
                } else {
                    let addNumber = add.indexOf(e.target.innerText);
                    arrSentence.push(add[addNumber]); //add the food
                }

            } else {
                if (!e.target.classList.contains("hover") && e.target.innerText == "Check all") { //uncheck check all and the food
                    arr.forEach(e => {
                        if (e.classList.contains("hover")) {
                            e.classList.remove('hover');
                        }
                        arrSentence = [];
                    })
                } else {
                    let cancelFood = arrSentence.indexOf(e.target.innerText);
                    arrSentence.splice(cancelFood, 1);
                    if (checking[0].classList.contains('hover')) { //remove check all hover
                        checking[0].classList.remove('hover');
                    }
                }


            }
        }



        if (arrSentence.length === 0) {
            return show.innerText = "Please, select your food"; //if no food => Please, select your food
        }

        if (arrSentence.length >= 4) {
            checking[0].classList.add('hover'); // if all check => hover check all
        }


        if (arrSentence.length > 2) {
            sentence = arrSentence.slice(0, 2);
            sentence.join("");
            if (arrSentence.length === 3) { //changing the sentence to fit with +1
                sentence += " and 1 more";
            }
            if (arrSentence.length === 4) { //changing the sentence to fit with +2
                sentence += " and 2 more";
            }
        } else {
            sentence = arrSentence;
            sentence.join("");
        }

        show.innerText = sentence;

    })
});