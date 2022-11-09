console.log("test")

// scope simply allows us to know where we have access to our variables, it shows us the accesibility of
// variables,functions and object in some particular parts of the code

//types
//1. global
//2. local
//3. block

// block is also local

// Global scope are variables thst are decleared outside a function 

//advantages
//you can access the scope from any function or modeles in your program
//it helps you to store connstant as it helps you in consistency
//it is useful when multiple function are accessing same function

//disadvatages
//1. if we decleare too man variables in the function there remain memory of the script till
// the program execution is completed 
//2. data can be modify by any function that means any statement written can change the value of the 
//local variable

let name = "Tony"

const call = () => {
    return name 
}
console.log(call())

const logname = () => {
    name ="lyon"
}
logname()
console.log(name)


// local scope are any variables  decleared inside a function

const calling = () => {
    const name = "yomi"
    const height = "6ft"
    const age = 40
    
    return `${name} is ${age} year old, and ${height} tall.`
}
console.log(calling())

//advantage
//1. the use of a local variable of scope offer a garanty that the values of the varaibles will remain 
//intact wile the task is running
//2. local variables are deleted as soon as any function is over and release the memory space it 
//occupies

//Disadventage
// the variable inside are not accessible outside the function 

//hoisting
// This is a JS mechanism where variables and function declearation are moves to the top of their scope 
//before code execusion

console.log(a)

const a = 4 

