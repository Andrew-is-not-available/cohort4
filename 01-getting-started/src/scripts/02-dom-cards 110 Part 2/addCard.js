const cardFuncs = {

    createCard(parentElement,counter) {
        const div = document.createElement("div");
        const txt = document.createTextNode("Card " + counter);
        const h2 = document.createElement("h2");
        
        
        div.className = "card";
        h2.append(txt);
        div.append(h2);
        
        const breakLine1 = document.createElement("br");
        div.appendChild(breakLine1);
        
        const addButton = document.createElement("button");
        addButton.append(document.createTextNode("Add Before"));
        div.append(addButton);

        const addButton2 = document.createElement("button");
        addButton2.append(document.createTextNode("Add After"));
        div.append(addButton2);

        const addButton3 = document.createElement("button");
        addButton3.append(document.createTextNode("Delete"));
        div.append(addButton3);

        console.log(parentElement, txt);

        return div;
    }, 

}

export default cardFuncs;