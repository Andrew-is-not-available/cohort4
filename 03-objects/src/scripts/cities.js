import functions from './fetch.js';
import createList from './domcities.js';
const url = 'http://localhost:5000/';
let data;
let selectedCity = "";
let placeType;

async function loadAll() {
    data = await postData(url + 'all');
    idMessage.textContent = `Currently ${data.length} entries on server.`;
    return;
};

loadAll();

class City {
    constructor(key, name, latitude, longtitude, population) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longtitude = longtitude;
        this.population = population;
    }

    show() {

        try {
            return `${this.name} has a latitude of ${this.latitude} and a longtitude of ${this.longtitude} and a population of ${this.population}`
        } catch (error) {
            throw (error);
        }

        // const cityList = document.querySelector("#cityList");
        // const row = document.createElement("tr"); 
        // row.style.height = "15px";
        // row.innerHTML = `
        //     <td>${city.city}</td>
        //     <td>${city.population}</td>
        //     <td>${city.latitude}</td>
        //     <td>${city.longitude}</td>
        //     <td><a href="#">X</a></td>
        //     `
        // cityList.appendChild(row); 
        // return;
    }

    showAll() {
        cityList.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            City.show(data[i]);
        };
        selectedCity = "";
        return;
    };



    movedIn(num) {
        try {
            this.population += Number(num);
            return this.population;
        } catch (error) {
            throw (error);
        }
    }

    movedOut(num) {
        try {
            this.population -= Number(num);
            return this.population;
        } catch (error) {
            throw (error);
        }
    }

    howBig() {

        for (let i = 0; i < data.length; i++) {
            if (data[i].city === selectedCity) {

                if (data[i].population > 100000) { placeType = "city" }
                else if (data[i].population > 20000) { placeType = "large town" }
                else if (data[i].population > 1000) { placeType = "town" }
                else if (data[i].population > 100) { placeType = "village" }
                else { placeType = "hamlet" }
            };
        };
        idMessage.textContent = `This place is a ${placeType}.`;
        // try {
        //     switch (true) {
        //         case (this.population > 100000):
        //             return 'City';
        //         case (this.population > 20000):
        //             return 'Large Town';
        //         case (this.population > 1000):
        //             return 'Town';
        //         case (this.population > 100):
        //             return 'Village';
        //         case (this.population < 100):
        //             return 'Hamlet';
        //     }
        //     return 'zero inhabitants';
        // } catch (error) {
        //     throw (error);
        // }
    }
}

class Community {
    constructor() {
        this.url = 'http://127.0.0.1:5000/';
        this.list = [];
        this.counter = 1;
    }

    nextKey() {
        return `k${this.counter++}`;
    }
    // does this belong in commmunity or cities?

    async createCity(name, latitude, longtitude, population) {
        try {
            let key = this.counter++
            let city = new City(key, name, latitude, longtitude, population);
            this.list.push(city);

            let data = await functions.postData(this.url + 'add', city);
            // return city;

            // console.log(data);
            if (data.status === 200) {
                return city;
            } return 'error stupid!';
        } catch (error) {
            throw (error);
        }

    }

    whichSphere(city) {
        try {
            if (city.latitude > 0) {
                return 'Northern Hemisphere';
            } else if (city.latitude < 0) {
                return 'Southern Hemisphere';
            } else if (city.latitude === 0) {
                return 'Equator';
            }
        } catch (error) {
            throw (error);
        }
    }

    getMostNorthern() {
        let mostNorthern = 0;
        let mostNorthernName
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].latitude > mostNorthern) {
                let currentName = this.list[i].name;
                mostNorthern = Number(this.list[i].latitude);
                mostNorthernName = currentName;
            }
        } if (mostNorthern > 0) {
            return `${mostNorthernName} is the most Northern city with latitude of ${mostNorthern}`;
        }
    }

    getMostSouthern() {
        let mostSouthern = this.list[0];
        this.list.forEach(value => {
            if (value.latitude < mostSouthern.latitude) {
                mostSouthern = value;
            }
        })
        return mostSouthern.name;
    }

    getPop() {
        let totalPopulation = 0;
        for (let i = 0; i < data.length; i++) {
            totalPopulation += data[i].population;
        }
        idMessage.textContent = `The total population of all cities is ${totalPopulation}`;


        // let total = 0;
        // this.list.forEach(value => {
        //     total += value.population;

        // })
        // idMessage.textContent = `The total population of all cities is ${total}`;
        // return total;
    }

    deleteCity(key) {

        console.log("hello from delete city");


        for (let i = 0; i < this.list.length; i++) {
            if (key === this.list[i].key) {
                this.list.splice(i, 1);
            }
        }

    }
}

export async function loadScript() {
    // console.log('Hey, we loaded');
    let data = await postData("http://localhost:5000/all")
        for (let i = 0; i < data.length; i++) {
            createList();
        }
    
}



async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    if (response.status > 200) { return false };
    return json;
}

export { City, Community };