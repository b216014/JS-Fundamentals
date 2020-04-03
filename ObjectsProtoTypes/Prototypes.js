function Bicycle (cadence, speed, gear, tirePressure){
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
    this.tirePressure=tirePressure;
    this.inflateTire = function () {
        this.tirePressure += 3;
    }
}

// bicycle1 has a function object created when its inflateTires method is executed
const bicycle1 = new Bicycle(50,100,25,12);
// bicycle2 has a function object created when its inflateTires method is executed
const bicycle2 = new Bicycle(20,30,50,00);

// Both objects, bicycle1 and bicycle2 will have separate references to the inflateTires method 
// because separate objects with different refernces are created to each one of them