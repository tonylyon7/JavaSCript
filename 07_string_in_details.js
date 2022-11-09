console.log("test")

const name = 'Hi, i am John\'s friend'
// const name = "Hi, i am John's friend"

console.log(name)

const introduce = "Hi, i am Tola but people call me \"Metalls\""
console.log(introduce)

//you can either use a backthick or single string

const name1 =  "tonylyon"

console.log(name1.length)

const name2 = "Tony is a name"

console.log(name2.length)

//length is a property. it is use to check the length of a string
console.log(name2[4])

//whenever we are checking an index we use "[]"
const animal = ["dog" , "monkey" , "cow"]

console.log(animal[1])

//uppercase and lowercase
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())

const talk = "He is talking to us"

console.log(talk.indexOf("is"))

//includes method will always result to boolean 
console.log(talk.includes("talk"))
console.log(talk.includes("tak"))
console.log(talk.includes(" "))

//Startwith and endwith
console.log(talk.startsWith("h"))
console.log(talk.startsWith("H"))
console.log(talk.endsWith("s"))
console.log(talk.endsWith("S"))

//split
console.log(talk.split(" "))
console.log(talk.split(""))

//substring
//whenever ypu slice you creat a substring
console.log(talk.slice(0, 5))
console.log(talk.slice(0, 7))

//reverse string
console.log(talk.split(" ").reverse())
console.log(talk.split(" ").reverse().join(" "))

//repeat a string 
console.log(talk.repeat(4))

//Triming of string
const email = "     tonylyon0007@gmail.com     "

console.log(email)
console.log(email.trim())

//
// const guestlist = "our guest are: Favour, Gloria, Tola, Chisom"

// const guestlist = length 

//Assignment
//1. get the name of the string and store it in a variable called length
//2. uppercase the string and store it in a variable caked upercaseguestlist 
//3. check if favour is in the uppercaseguestlist ans store it in a variable called favorisonthlist
//4. create a substring that contains only (favour, gloria, tola, chisom) and store it in a variables called substring guest 

//5. write a function that takes in a string and it will reverse a string

//.6 write a function that takes in a number and reverses the nnumber 




//solution
// const length = (favour, gloria, tola, chisom)
// const length = ("guestlist.length")
// console.log(length)



