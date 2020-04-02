import cardFuncs from './addCard.js';

document.body.addEventListener("click", myEventListener);

let counter = 2

function myEventListener(e) {

    if (e.target.textContent === "Add Card") {

        let idAddColumn = document.getElementById("idAddColumn");
        idAddColumn.append(cardFuncs.createCard(e.target.parentElement, counter++));
    }
    if (e.target.textContent === "Add Before") {
        let idAddColumn = document.getElementById("idAddColumn");
        let target = e.target.parentElement

        idAddColumn.insertBefore(cardFuncs.createCard(target, counter++), target);

    }
    else if (e.target.textContent === "Add After") {
        let idAddColumn = document.getElementById("idAddColumn");
        let target = e.target.parentElement

        document.getElementById("idCardLabel").innerHTML = "Card 1";

        idAddColumn.append(cardFuncs.createCard(target, counter++));
    }

    else if (e.target.textContent === "Delete") {

        let target = e.target.parentElement
        console.log(target);

        target.parentNode.removeChild(target);
    }
}

