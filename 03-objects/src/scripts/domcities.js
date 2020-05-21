function cityList(city) {
    // console.log('hello from cityList', name);
    
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(city.name));
    option.setAttribute("key",city.key);
    return option;
};

function createList() {
    let newNode = document.createElement("div");
    newNode.textContent="new test card";
    document.getElementById("cityList").appendChild(newNode);
};

export default createList;
