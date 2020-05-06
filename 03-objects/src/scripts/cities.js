import functions from "./fetch.js";

export class City {
    constructor(name,lat,long,pop,key) {
        this.name = name;
        this.lat = lat;
        this.long = long;
        this.pop = pop;
        this.key = key;
    };

    show() {
        return this.name + '; Latitude: ' + this.lat + '; Longitude: ' + this.long + '; Population: ' + this.pop;
    };
    movedIn(pop) {
        this.pop += pop;
    };
    movedOut(pop) {
        this.pop -= pop;
    };

    howBig(number) {
        switch(true){
            case (this.pop > 100000):
                return 'City';
            case (this.pop > 20000):
                return 'Large Town';
            case (this.pop > 1000):
                return 'Town';
            case (this.pop > 100):
                return 'Village';
            case (this.pop > 0):
                return 'Hamlet';
        };
        return 'No Population';
    };
};

export class Community {
    constructor() {
        this.cityArr = [];
    };

    whichSphere(city){
        if(city.lat > 0) {
            return "Northern Hemisphere";
        } else {
            return "Southern Hemisphere";
        }
    }
    
    getMostNorthern(){
        let mostNorthernCity = this.cityList[0];
        this.cityArr.forEach(value => {
            if (value.lat > mostNorthernCity.lat){
                mostNorthernCity = value;
            }
        })
        return mostNorthernCity;
    }

    getMostSouthern(){
        let mostSouthernCity = this.cityList[0];
        this.cityArr.forEach(value => {
            if (value.lat < mostSouthernCity.lat){
                mostSouthernCity = value;
            }
        })
        return mostSouthernCity;
    };

    getPopulation(){
        let totalPop = 0;
        this.cityArr.forEach( (value) => {
            totalPop += parseFloat(value.pop, 10);
        })
        return totalPop;
    };

    createCity(name, lat, long, pop, key){
        this.cityArr.push(new City(name, lat, long, pop, key));
    };

    deleteCity(cityName){
        this.cityArr.splice(this.cityArr.findIndex(value => value.name == cityName), 1);
    };
};