const bicycle1 = new CreateBicycle(50,20,5)
const bicycle2 = new CreateBicycle(50,20,9)

// Gives error when I use arrow function
function CreateBicycle (cadence,speed,gear)  {
    const newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed=speed;
    newBicycle.gear=gear;
    return newBicycle
}

function BicycleConstructor(cadence,speed,gear){
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
}

const newBicycle = new BicycleConstructor(10,20,50)

console.log(newBicycle);