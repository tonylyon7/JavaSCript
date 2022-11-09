console.log("test")

//Array in Details

const months = ["January", "February", "March", "April", "May"]
const everything = [
    "Oluchi",
    0,
    true,
    () => {

    }
]
console.log(months.length)
console.log(months[0])
console.log(months[4])

months[4] = "Not May"
console.log(months)

//Array Methods
//1. Array.push() -- adding to the end of an array

const names = ["Elizabeth","Jordan", "Jane", "George"]
const animals = []

const pushedName = names.push("Clarke")
console.log(pushedName)
console.log(names)


//2. Array.pop() --removes a value at the end of an array
const poppedArray = names.pop()
console.log(poppedArray)
console.log("array.pop", names)
console.log(names)

//3. Array.shift() -- removes an item from the beginning of an array
const shiftedName = names.shift()
console.log(shiftedName)
console.log(names)

//4. Array.unshift() -- adds an item to the start of an array
const unshiftedName = names.unshift("Dean")
console.log(names)
console.log(unshiftedName)

// console.log(names.splice(0, 1))  //starting from [0] remove one
// console.log(names)
// console.log(names.splice(1, 0,) ,"Oluchi")

//5. Array.splice() -- adds and removes to an array at the same time
const splicedName = names.splice(1, 2, "Neto", "Podence", "Neves") //startting from [1] remove two items
console.log(splicedName)
console.log("array.splice", names)

//6. Array.slice() -- creating a new array fron the previous one i.e. cut from an array into a new array
const slicedName = names.slice(3)  //creates the new elementafter the third element
console.log("array.slice", slicedName)

//7. Array.forEach()
const forEachName =  names.forEach((name, index) => {
    // console.log(`${index}, name)
    return
})
console.log(forEachName)


//8. Array.map()
const inventory = [
    {price: 23, item: "Bread"},
    {price: 30, item: "Bacon"},
    {price: 28, item: "Butter"},
    {price: 50, item: "Cheese"},
    {price: 12, item: "Meat"},
]
const mappedInventory = inventory.map(invent => {
    if(invent.price === 30 && invent.item === "Bacon"){
        console.log("We have an item with this price")
    }else{
        console.log("We dont have this item")
    }
    // return(invent.price)
})
console.log(mappedInventory)

//9.  Array.filter()
const numbers = [1, -1, 22, 5, -50, 9]
const filterNumber = numbers.filter(number => {
    return number < 1
})
console.log(filterNumber)

const employees = [
    {name: "Sebastian", overtime: 5},
    {name: "John Snow", overtime: 10},
    {name: "Kate", overtime: 2}
]

const workerName = employees.map(employee => {
    if(employee.overtime >= 5){
        console.log("You have earned your reward")
    }else{
        console.log("No reward")
    }
})
console.log(workerName)

const reward = employees.filter(employee => {
    return employee.overtime >= 5
})
console.log(reward)

const rewardName = reward.map(r => {
    return r.name
})
console.log(rewardName)


//10. Array.find()
const figures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const findFig = figures.find(fig => {
    console.log(fig >= 5)
    return fig > 5
})
console.log(findFig)

const cities = ["Lagos", "Ibadan", "Akure", "Abeokuta"]
const start = cities.find(city =>{
    return city.startsWith("L")
})
console.log(start)

//11. Array.include()
const answer = cities.includes("Alaska")
console.log(answer)

//12. Array.sort()
const number = [1, 5, 3, 2, 6, 4, 15, 22, 99, 26, 44, 57]
console.log(number.sort())
console.log(number.sort((x, y) => x - y)) //Ascending order
console.log(number.sort((x, y) => y - x)) //Descending order


const states = ["Edo", "Lagos", "Kebbi", "Adamawa"]
console.log(states.sort())

//13. Array.reduce()
const prices = [20, 15, 78, 90, 145]
const total = prices.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
}, 0)
console.log(total)

//14. Flattening of an array


