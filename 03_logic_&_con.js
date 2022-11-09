console.log("test")

//Logic and control flow
//1. if else statement 
//2. truthy/ falsy values
//3. switch case statement

// if statements 
// if(condition){
//     block of code that should be excuted
// }else{
//     block of code should be executed 
// }

const age = 18 
// if(age >= 18){
//     console.log("you are free to drive")
// }else{
//     console.log("you cannot drive")
// }

if(age > 18){
    console.log("you are free to drive")
}else if(age === 18){
    console.log("Hurray, you just clocked 18")
} else{
    console.log("wait till you are 18")
}

//Truthy/Falsy value
//types of false value
//1. 0
//2. empty string
//3. false
//4. NaN (not a number)
//5. null 
//6. undefined

const value = true
if(value){
    console.log("This is a true value")
} else{
    console.log("This is a false Value")
}

const car = 7 
if(car === 1){
    console.log(`you have ${car} car`)
}else if(car > 1){
    console.log(`you have ${car} car`)
}else{
    console.log(`you have no car`)
}

//swith statement
// after every case you must break, if not it will take everything after your condition has been meet 

const superhero = "wonder woman"

switch(superhero){
    case "iron man":
        console.log("i am iron man")
    break
    case "Thor":
        console.log("i have my hammer")
    break
    case "Super man":
        console.log("This is super man flying")
    break
    case "wonder woman":
        console.log("we are back in the 80's")
    break
    case "Bat man":
        console.log("The night watcher")
    break
    default:
        console.log("please type in the correct hero name")
}

//ternary operators

const myName = "tony"

myName ? console.log("my name has been written") : console.log("no name written")