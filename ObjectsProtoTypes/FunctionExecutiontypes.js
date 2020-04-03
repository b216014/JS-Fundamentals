// Gets created during compilation stage
function foo(){
    console.log("Helllooooooo");
}

// ways of calling functions
// #1
foo();// Occurs during function execution step
// #2
const obj = {};
obj.foo = function () {
    console.log("Helllooooooo"); 
}
obj.foo();// here functions are properties of other objects 
// #3
new foo();// value of this is the empty object since the function creates a new empty object when calling the constructor
// Both these functions are the same 
foo.call();
foo();

function Bicycle (cadence,speed,gear,tirePressure){
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
    this.tirePressure=tirePressure;
    this.inflateTire=function(){
        tirePressure+=3;
    }
}

// calling the function in constructor mode
let bicycle = new Bicycle();

function mechanic(name) {
    this.name = name;
}
const bike = new mechanic("Mike");
bike.inflateTire = bicycle.inflateTire;// O/P of bike.inflateTire = undefined since inflateTire is undefined 

bike.inflateTire.call(bicycle)