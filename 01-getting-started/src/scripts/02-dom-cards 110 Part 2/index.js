import cardFuncs from './addCard.js';

document.body.addEventListener("click", myEventListener);

let counter = 2

function myEventListener(e) {
    // const el = e.target;
    // const whattodo = el.getAttribute("todo");
    // console.log(e.target);
    // console.log(cardFuncs.createCard());



// if (e.target.nodeName === 'BUTTON') {
//     // document.body.appendChild(domfuncs.buildCard("You just added " + counter++));
//     console.log(e.target.textContent);

if (e.target.textContent === "Add Card") {
    
    // console.log(e.target.parentElement, "You just added " + counter++);
    // console.log(e.target.textContent);

    let idAddColumn = document.getElementById("idAddColumn");
    idAddColumn.append(cardFuncs.createCard(e.target.parentElement,counter++));

    }
}   
// }

