// const chasisChassis = () => {    
//create a new object. No properties yet.

const createChassis = () => {
    const newChassisObj = {}
    return newChassisObj
}

// The addWheels() function should have a parameter for the incoming chassis object. It should add a new property to that object named wheels with a value of 4. The function should return the chassis object.
const addBody = (chassisObj) => {
    chassisObj.body = "Fever"
    // Return the chassis that now has a body property on it
    return chassisObj
}

const addWheels = (chassisObj) => {
    // Use dot notation to add a new property on it
    chassisObj.wheels = 4
    //return the chassis that now has a body property on it
    return chassisObj
}

const addEngine = (chassisObj) => {
    // use dot notation to add a new property on it
    chassisObj.engine = "4.8L"
    //return the chassis that now has a body property on it
    return chassisObj
}

const addSteeringWheel = (chassisObj) => {
    //use dot notation to add a new property on it
    chassisObj.steeringwheel = "Tilted Steering Wheel"
    //return the chassis that now has a body property on it
    return chassisObj
}

const addDriveTrain = (chassisObj) => {
    //use dot notation to add a new property to it
    chassisObj.drivetrain = "Two wheel drive"
    //return the chassis that now has a body property on it
    return chassisObj
}

const finalCar = () =>{
const chassis = createChassis()
const chassisBody = addBody(chassis)
const chassisWheels = addWheels(chassisBody)
const chassisEngine = addEngine(chassisWheels)
const chassisSteeringWheel = addSteeringWheel(chassisEngine)
const chassisDrive = addDriveTrain(chassisSteeringWheel)

return chassisDrive
}

const fordFever = finalCar()

console.log(fordFever)