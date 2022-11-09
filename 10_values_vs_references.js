console.log("test")

// primitive data types 
// Complex data type

//primitive
// when a variables is assing to a primitive data types they only copy the values
let x = 2
let y = x

x = 3
console.log(x)
console.log(y)
console.log(x === y)



let name = "adetola"
let newname = name 

name = "yemi"
console.log(name)
console.log(newname)

// complex
// when a complex data type is created, it only compy the referen
let arr = [1, 2, 3, 4, 5] //#12345yrt
let newarr = arr 

arr.push(6)
arr.pop()
newarr.push(7)

console.log(arr)
console.log(newarr)

let person = {name: "Tony", age: 10}
let newperson = person 

person.name = "Tola"
newperson.age = 20

console.log(person)
console.log(newperson)
console.log(person === newperson)

// cloning in Array.  
// This helps us to drop the referense point
//shallow cloning
// deep cloning

//shallow cloning. there are 2 ways for this 
// 1. spread operator

let names = ["lizzy", "tayo", "john", "tina"]
let newnames = names 
let spreadnames = [...names]

spreadnames.push = ("shola")

console.log(names)
console.log(newnames)
console.log(spreadnames)

console.log(names === newnames)
console.log(newnames === spreadnames)

//2. Array.slice
let slicedname = names.slice(names)
console.log(slicedname)
slicedname.push("henry")
console.log(names === slicedname)

// Cloning an object
//1. spread operator

let buyer = {
    name: "Adetola",
    color: "dark",
    height: "7ft",
    address: {
        number: 7,
        streetname: " ajibola lawal",
        color: "white"
    }
}

let newbuyer = buyer
let anotherbuyer = {...buyer}

buyer.name = "Adeola"
console.log(buyer)
// console.log(anotherbuyer)
// console.log(newbuyer)

//2. object.assign()
let assigned = Object.assign({},buyer)

assigned.height = "10ft"
assigned.address.color = "green"
console.log(assigned)

// Deep Cloning
// let Stringified = JSON.stringify(buyer)
// console.log(Stringified)

// let parsed = JSON.parse(Stringified)
// parsed.address.color = "blue"
// console.log(parsed)

//or

let parsed = JSON.parse(JSON.stringify(buyer))
parsed.address.color = "blue"
console.log(parsed)


// JSON (Javascrist object notation) JSON.Stringify
// JSON.parse