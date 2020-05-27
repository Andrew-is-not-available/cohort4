// global.fetch = require('node-fetch');  
// needed for test only

import { City, Community, loadScript } from './cities.js'

import cityList from './domcities.js'


let newCom = new Community;

addEventListener("load", loadScript());

// newCom.createCity('Virginia City', 48.85341, 2.3488, 2148000);
// newCom.createCity('South City', 42.8746, 74.5698, 976734);

// Event Listeners

// pickCity.addEventListener('select', ePickCity => {

// });

// totalPopulation.addEventListener("click", newCom.getPop);

// howBig.addEventListener("click", newCom.list[1].howBig);

// whichSphere.addEventListener("click", newCom.whichSphere);

// northernMost.addEventListener("click", newCom.getMostNorthern);

// southernMost.addEventListener("click", newCom.getMostSouthern);

// idButtonShow.addEventListener("click", newCom.showAll);

cityForm.addEventListener("submit", async (e) => {
    event.preventDefault();
    // let val = Value();
    let newCity = await newCom.createCity(idCity.value, Number(idLat.value), Number(idLong.value), Number(idPop.value));
    console.log(await newCity);
    let createCity = cityList(newCity);
    
    
    // idPickCity.appendChild(createCity);
    console.log(newCom.list);
    let getPop = newCom.getPop();
    console.log('total population is',getPop);

    let northDarling = newCom.getMostNorthern();
    console.log('most northern is', northDarling);
    
    let southDarling = newCom.getMostSouthern();
    console.log('most southern is', southDarling);
    


    
});



  