// Creatig objects using functions (constructors)
const createObj = (firstName,lastName,gender,designation) => {
    // var this = {}
    this.firstName=firstName;
    this.lastName=lastName;
    this.gender=gender;
    this.designation=designation;
    // return this
}

const newObj = new createObj();