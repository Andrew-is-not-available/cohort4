// global.fetch = require('node-fetch');  
// needed for test only

import { City, Community } from './cities.js'

let newCom = new Community;

newCom.createCity('Virginia City', 48.85341, 2.3488, 2148000);
newCom.createCity('South City', 42.8746, 74.5698, 976734);

// Event Listeners

totalPopulation.addEventListener("click", newCom.getPop);

howBig.addEventListener("click", newCom.list[1].howBig);

whichSphere.addEventListener("click", newCom.whichSphere);

northernMost.addEventListener("click", newCom.getMostNorthern);

southernMost.addEventListener("click", newCom.getMostSouthern);

idButtonShow.addEventListener("click", newCom.showAll);

cityForm.addEventListener("submit", (e) => {
    event.preventDefault();
    // let val = Value();
    newCom.createCity(idCity.value, Number(idPop.value), Number(idLat.value), Number(idLong.value));
    console.log(newCom.list);
});



  