// javascript is a programming language
// javascipt was formally known as Ecamascript and it is denoted by ES. we are currentrly on ES6. 

// ES5 
// require
// export 
// var 

// ES6 
// import
// export
// cont and let 

console.log("Hello world")

// variable and data types 
// variables are use to store information to be reffrensed and manipulated in a programming language. they hold
// data through the entire application 
// steps to creatina a variables
// 1. you create a variables name 
// 2. store data in it 
// 3. use it 
// 4. change value of the variables name (optional)


var greet = "good afternoon"
console.log(greet)

const name = "Tony"
console.log(name)

let age = 40
console.log(age)

age = 60
console.log(age)

// name = "shola"
// console.log(name)

// greet = "good night"
// console.log(greet)

// three things to consider when declaring a variable 
// 1. the name of the variable must be unique
// 2. the variable name must not be any javacript key wrord
// 3. the first character a letter, _ or $ ... the following after can be number, $ and _ 

// DATA TYPES
// 1. String 
// 2. Numbers
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Object
// 7. Symbols


// Strings
// this is a data type use in representing a text/paragrph. (single quote, doubble quote, backtick string)

// single quoten and doublequote are static text while backtick gives you room for dynamic expression

const singlequote = 'learning javascript'
console.log(singlequote)

const doubblequote = "Double"
console.log(doubblequote)

const myName = "tayo"

const backtickquote = `hello ${myName}`
console.log(backtickquote)

const doings = `i am spraying funds`
console.log(doings)

const palce = "SoAir"
const tellMe = `${palce} is a BootCamp`
console.log(tellMe)

// Numbers
let a = 8
console.log(a)

const b = 0.009748
console.log(b)

const c = "text"
const d = c + b
console.log(typeof d) // concatenation of string

let e = c - b 
console.log(typeof e)

//Boolean only represent loggical entity. it only has two values [true,false]
let myAge = 25
console.log(30 > myAge)

//Null means nothing but still a value 
let something = null
console.log(something)

//undefined
let great_man
console.log(great_man) 

//object can only store 1 value 
const person = {
    firstName: "tony",
    lastName: "lyon",
    color: "fair",
    age: 100
}
console.log(person.firstName)
console.log(person.age)

