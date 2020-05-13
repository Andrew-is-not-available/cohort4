import functions from './fetch.js';

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
            return `${this.name} with lat of ${this.latitude}, long of ${this.longtitude} has pop ${this.population}`
        } catch (error) {
            throw (error);
        }
    }

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
        try {
            switch (true) {
                case (this.population > 100000):
                    return 'City';
                case (this.population > 20000):
                    return 'Large Town';
                case (this.population > 1000):
                    return 'Town';
                case (this.population > 100):
                    return 'Village';
                case (this.population < 100):
                    return 'Hamlet';
            }
            return 'zero inhabitants';
        } catch (error) {
            throw (error);
        }
    }
}

class Community {
    constructor() {
        this.url = 'http://127.0.0.1:5000/';
        this.list = [];
        this.counter = 4;
    }

    // Setting up a dynamic key for each City

    nextKey() {
        return `k${this.counter++}`;
    }

    async createCity(name, latitude, longtitude, population) {
        try {
            let key = this.counter++
            let city = new City(key, name, latitude, longtitude, population);
            this.list.push(city);
            // console.log(city);
            // console.log(this.list);
            // console.log(typeof (city.key));

            let data = await functions.postData(this.url + 'add', city);
            // console.log(data);
            if (data.status === 200) {
                return data;
            } return 'error';
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
        } else {
            return 'Seems like all the cities you added are in Southern Hemisphere'
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
        let total = 0;
        this.list.forEach(value => {
            total += value.population;

        })
        return total;
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

export { City, Community };