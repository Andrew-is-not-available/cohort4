function cityList(city) {
    // console.log('hello from cityList', name);
    
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(city.name));
    option.setAttribute("key",city.key);
    return option;
};

function createList(object) {
    let newNode = document.createElement("div");
    let objectOutput = `${object.name},${object.population},${object.latitude},${object.longitude},${object.howBig()}`
    newNode.textContent=objectOutput;
    document.getElementById("cityList").appendChild(newNode);
};

export default createList;
