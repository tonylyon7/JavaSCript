// var age = 19
// console.log(age)
// var age = 19
// console.log(age)

// modularization of codes is done with import and export of codes 

const add = (...params) => {
    console.log(params)
    return params.reduce((acc, curval) => acc + curval, 0)
}
console.log(add(2,2,2,2,2,3,7))

const addAgain = (a=0, b=0, c=0) => {
    return a + b + c
}
console.log(addAgain(2,2))

// array destructuring 
const greet = ["hello", "i", "am", "cindy"]
const [greeting, , ,name] = greet
console.log(greeting, name)

// object destructuring: this is faster than array destructuring 
const person = {
    person_name: "Gideon",
    character: "Somehow",
    shirt: {
        brand: "Zara",
        color: "Gold"
    }
}
const {person_name, character, shirt: {brand, color}} = person 
console.log(person_name, character,brand, color)

