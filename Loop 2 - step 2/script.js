const show = document.querySelector('.show');
const checking = document.querySelectorAll('li');
const checkAll = document.querySelector('.Check-all');

let arr = [...checking];
let sentence;
let arrSentence = [];
let add = ["Ice-cream", "Hot-dog", "Popcorn", "Cookie"];



arr.forEach(element => { //add event listener to all element in arr
    element.addEventListener("click", (e) => {

        //actions on normal button
        e.target.classList.toggle('hover');

        if (e.target.classList.contains("hover")) {
            if (arrSentence.indexOf("Please, select your food") > -1) {
                let number = arrSentence.indexOf("Please, select your food");
                arrSentence.splice(number, 1);
            } else {
                let addNumber = add.indexOf(e.target.innerText);
                arrSentence.push(add[addNumber]);
            }

        } else {
            let cancelFood = arrSentence.indexOf(e.target.innerText);
            arrSentence.splice(cancelFood, 1);

        }

        if (arrSentence.length === 0) {
            return show.innerText = "Please, select your food";
        }


        if (arrSentence.length > 2) {
            sentence = arrSentence.slice(0, 2);
            sentence.join("");
            if (arrSentence.length === 3) {
                sentence += " and 1 more";
            }
            if (arrSentence.length === 4) {
                sentence += " and 2 more";
            }
        } else {
            sentence = arrSentence;
            sentence.join("");
        }

        show.innerText = sentence;

    })
});



//Need to add check all function