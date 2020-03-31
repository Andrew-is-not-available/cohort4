const button = document.getElementById("add");
const input = document.getElementById("userinput");
const ol = document.querySelector("ol");
const kids = document.getElementById("myList");
const kidArray=Array(document.querySelectorAll('li'))

function inputLength() {
    return input.value.length;
}

function showChildren() {
    const kidlength = document.getElementById("myList").children.length;
    console.log(kidlength);

    const kids = document.querySelectorAll('li');
        let i=0;
        for (i = 0; i < kidArray.length; i++) {
            console.log(kidArray[i].innerHTML);
            }
        
}

function createListElement() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
button.addEventListener("click", addListAfterClick);
show.addEventListener("click", showChildren);
input.addEventListener("keypress", addListAfterKeypress);
