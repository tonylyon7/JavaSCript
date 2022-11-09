const person = {}
const person1 = new Object()

person.new = "Adetola"
person1.new = "Adeoye"

console.log(person, person1)

const items = []
const itemsAgain = new Array()

items.push("banana")
itemsAgain.push("apple")

console.log(items, itemsAgain)

const date = new Date()
console.log(date.getFullYear())

// const name = "Femi"
// const person2 = {
//     name: "Adeoye",
//     getName: (){

//     }
// }

function car(color, brand, year){
    this.color = color
    this.brand = brand 
    this.year = year 
}

console.log(this)
const redCar = new car ("red", "G-wagon", "2022")
console.log(redCar)