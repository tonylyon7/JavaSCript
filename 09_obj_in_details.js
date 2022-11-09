console.log("test")

//Objects in Details

const names = "Gbolahan"
const person = {
    name: "Adetola",
    age: 40,
    color: "dark-skinned",
    height: "5ft 4",
    car: {
        color: "black",
        brand: "G-Wagon",
        model: 2022
    }
}

//Dot Notation
console.log(person.name)  //access
console.log(person.age)
console.log(person.car.brand)
person.address = "Air Force Base" //add
// console.log(person)
person.name = "Lily"
console.log(person)   //update

//Square Notation
console.log(person["name"])
console.log(person["car"]["model"])

