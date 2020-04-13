import shapes from './shapes.js'

const panel = new shapes.Drawing(401, 402);
const svg = panel.draw()
// console.log(svg);
idDrawings.append(svg);

 

document.body.addEventListener("click", e => {
    const el = e.target;
    const todo = el.getAttribute("todo");
    const key = el.getAttribute("key");

    if (key) {
        console.log(key);
        console.log(panel.getShape(key));
        panel.move(key,2,5);
        console.log(panel.getShape(key));
    }

    if (todo === "newRectangle") {
        console.log(idx.value, idy.value);
        const rect = panel.createRectangle(idx.value, idy.value);
    }

    if (todo === "show") {

    }

    // consol e.log(el);
    // console.log(el.getAttribute("key"));

})