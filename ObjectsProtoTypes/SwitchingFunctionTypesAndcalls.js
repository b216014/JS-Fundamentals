const bicycle1 =  CreateBicycle(50,20,5)
const bicycle2 =  CreateBicycle(50,20,9)

const bicycle3 =  new CreateBicycle(50,20,5) // same as CreateBicycle(50,20,5)
const bicycle4 =  new CreateBicycle(50,20,9) // same as CreateBicycle(50,20,9)

// Gives error when I use arrow function
function CreateBicycle (cadence,speed,gear)  {
    // this = {}
    const newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed=speed;
    newBicycle.gear=gear;
    return newBicycle
    // return this 
}

function BicycleConstructor(cadence,speed,gear){
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
}

const newBicycle = new BicycleConstructor(10,20,50)
const newBicycle1 = BicycleConstructor(10,20,50)// Here this refers to what the this keyword was referring to before. 
// newBicycle1 = undefined 

console.log(newBicycle1);