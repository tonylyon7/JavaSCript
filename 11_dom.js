// 4 ways of getting element 

// 1. document by name
// const heading1 = document.getElementsByTagName("h1")
// console.log(heading1)

const taggednames = document.querySelectorAll("h2")
console.log(taggednames)

// 2. document by class
const tests = document.getElementsByClassName("test")
console.log(tests)

//3. document by id 
const idtag = document.getElementById("heading1")
console.log(heading1)

//4. document by selector
const sep = document.querySelector("h2") 


//  class and attribute comes with all tags 
// types comes with button and input

const firstinput = document.querySelector(".first-input")
const secoundinput = document.querySelector(".second-input")
const continue_btn = document.querySelector(".continue")
const feedback = document.querySelector(".feedback")
firstinput.addEventListener("focus", event =>{
    firstinput.style.borderColor="blue"
    feedback.innerHTML = "Please type in seven characters"
    feedback.style.color = "blue"
    feedback.style.fontSize = "18px"
    feedback.style.fontStyle = "italic"
})
firstinput.addEventListener("blur", event =>{
    const firstname = firstinput.value.trim()
    if(firstname.length != 7){
        firstinput.style.borderColor="red"
        feedback.innerHTML = "Poops! you forgot to write seven characters"
        feedback.style.color = "red"
        feedback.style.fontSize = "18px"
        feedback.style.fontStyle = "italic"
    }else{
        firstinput.style.borderColor="green"
        feedback.innerHTML = "correct"
        feedback.style.color = "green"
        feedback.style.fontSize = "18px"
        feedback.style.fontStyle = "italic"
    }
})

secoundinput.addEventListener("focus", event =>{
    secoundinput.style.borderColor="blue"
    feedback.innerHTML = "Please type in seven characters"
    feedback.style.color = "blue"
    feedback.style.fontSize = "18px"
    feedback.style.fontStyle = "italic"
})
secoundinput.addEventListener("blur", event =>{
    const lastname = secoundinput.value.trim()
    if(lastname.length != 7 ){
        secoundinput.style.borderColor="red"
        feedback.innerHTML = "Poops! you forgot to write seven characters"
        feedback.style.color = "red"
        feedback.style.fontSize = "18px"
        feedback.style.fontStyle = "italic"
    }else{
        secoundinput.style.borderColor="green"
        feedback.innerHTML = "correct"
        feedback.style.color = "green"
        feedback.style.fontSize = "18px"
        feedback.style.fontStyle = "italic"
    }
})

continue_btn.addEventListener("click", event => {
    const firstvalue = firstinput.value 
    const secondvalue = secoundinput.value
    if(firstvalue != null &&
        firstvalue.length >= 7 &&
        secondvalue != null && secondvalue.length >= 7){
        feedback.innerHTML = "loading..."
        feedback.style.color = "green"
        feedback.style.fontSize = "18px"
        feedback.style.fontStyle = "italic"
        console.log("Loading...")
        event.preventDefault()
    }else {
        feedback.innerHTML = " you have noy filled the form correctly"
        feedback.style.color = "red"
        feedback.style.fontSize = "18px"
        feedback.style.fontStyle = "italic"
        console.log("Loading...")
        event.preventDefault()
    }
})

// event are action that trigger a reaction 

// 3 events we will be looking at:
// 1. focus
// 2. blur
// 3. click

