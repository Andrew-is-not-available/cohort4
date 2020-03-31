
// console.log("hello from sample.js");

// console.log(idHeadPlay);

document.body.addEventListener("click", myEventListener);

function myEventListener(e) {
    const el = e.target;
    const myAttr = el.getAttribute("myAttr");
    // console.log("I'm in my event listener",el.textContent,myAttr);
    // console.log("Second line");
    if (myAttr) {
        el.textContent = el.textContent + " 123";
    }
}   