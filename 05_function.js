//functions
// function is a "block of codes" written to perform a certain operation

//Data
//complex date takes more value [array and object]
//primitive data can onlt take 1 value [string, boolean and number]

// what to consider when working on functions
// function Declearation
// calling a function

// Types of function
//1. function declaration
//2. function expression
//3. Arrow Function

// always consider the parameter and argument 
//parameter isuse a parameter to definne a function name
//argument is the real data type used to call the parameter [parameters are name use to call a function]
// return is a key word that returns the value

function areaofacircle(){
    return 3.142 * 7
}
console.log(areaofacircle().toFixed(2))

//tofixed(2) means to 2 decimal place

function greetme(hello){
    return`${hello} Tony`
}
console.log(greetme("good evening"))

//Function Declearation
// any function you start with a function key word

function rectangleparameter(a, b){
    return 1/2 * (1 + b)
}
console.log(rectangleparameter(3, 4))

//function expression
const square = function(area){
    return area**2
}
console.log(square(7))

//Arrow function 
// is a brief syntax of function expression and it is the most written code on ES6
const greet = name => {
    return `hello${name}`
}
console.log(greet("lyon"))

const greetings = (name, day) => `Good ${day} ${name}, how are you`
console.log(greetings("Tony", "Afternoon"))

const beat = (drum) => {
    console.log("beat")
    return `i am beating ${drum}`
    console.log("drum")
    return `she is beating ${drum}`
}
console.log(beat("drum set"))

// const number = (tool) => {
//     for( let n = tool; n <= 20 ; n++)
//         console.log(n)
// }
// number(5)

const number = (tool) => {
    for( let n = tool; n <= 20; n++){
        if (n % 2 ===0){
            console.log(`${n}even`)
        }else{
                console.log(`${n}odd`)
            }
        }
}
number(2)


// whenever you use a return key word, no other block code can work