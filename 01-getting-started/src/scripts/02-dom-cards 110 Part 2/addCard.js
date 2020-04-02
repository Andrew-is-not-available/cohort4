const cardFuncs = {
    // nb note nodeInsertBefore is available, 'nodeInsertAfter' is more
    // difficult according to Sean, 
    // "Note: There is no insertAfter() method. (so we're going to make a function
    // called insertAfter.)  It can be emulated by 
    // combining the insertBefore method with Node.nextSibling."
    // search "combine insertBefore method with Node.nextSibling"
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
    // solution? https://teamtreehouse.com/community/another-solution-to-this-problem
    

    createCard(parentElement,counter) {
        const div = document.createElement("div");
        const txt = document.createTextNode("Card " + counter);
        const h2 = document.createElement("h2");
        
        
        div.className = "card";
        h2.append(txt);
        div.append(h2);
        
        // Thanks to Sean for this line break code.  Creates the new card.
        
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

        return div;
    }, 

}

export default cardFuncs;