import shapes from './shapes.js'

const panel =  new shapes.Drawing(401,402);
const k4 = panel.createRectangle(101,102);
const k5 = panel.createRectangle(201,202);
console.log(panel);
const svg = panel.draw()
console.log(svg);


idDrawings.append(svg);

document.body.addEventListener("click", e => {
    // console.log("you clicked at",e);
    // const el = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    // el.setAttribute("x", "250");
    // el.setAttribute("y", "250");
    // el.setAttribute("width", "100");
    // el.setAttribute("height", "50");
    // el.setAttribute("key", "whatever");

    // idsvg.append(el);
    // consol e.log(el);
    // console.log(el.getAttribute("key"));
     
})