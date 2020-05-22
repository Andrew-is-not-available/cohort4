function cityList(city) {
    // console.log('hello from cityList', name);
    
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(city.name));
    option.setAttribute("key",city.key);
    return option;
};

function createList(object) {
    let newNode = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = object.name;
    newNode.appendChild(name);

    const population = document.createElement("td");
    population.textContent = object.population.toLocaleString();
    newNode.appendChild(population);

    const latitude = document.createElement("td");
    latitude.textContent = object.latitude;
    newNode.appendChild(latitude);

    const longitude = document.createElement("td");
    longitude.textContent = object.longitude;
    newNode.appendChild(longitude);
    
    const howBig = document.createElement("td");
    howBig.textContent = object.howBig();
    newNode.appendChild(howBig);

    const whichSphere = document.createElement("td");
    whichSphere.textContent = object.whichSphere();
    newNode.appendChild(whichSphere);





    // let objectOutput = `${object.name},${object.population}, ${object.latitude}, ${object.longitude}, ${object.howBig()}, ${object.whichSphere()}`
    // newNode.textContent=objectOutput;
    document.getElementById("cityList").appendChild(newNode);
};

export default createList;
