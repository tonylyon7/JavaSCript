//  the set interval allows you to execute a chunk of codes everytime a specified amount of milliseconds passes 
// the cleared is useful if you want ther interval to execute a certain amout of times and cleared once a certain value is reached 
//JS the said time out allows you to wait a certain amout of time before executina a chunk of code

// const myInterval = setInterval (() => console.log("grate"), 3000)
// console.log(myInterval)

// clearInterval(myInterval)

// const myTime = setTimeout (() => console.log("Timeout"), 3000)
// console.log(myTime)

// Synchronous JS is one in which the code is executed line by line ans their task is completed immediatly
// asynchronous JS is the one in which the lines of code takes time to run,this tasks are run in the background while JS keeps executing other lines of codes..
// now when the result of the asynchronous tasks get available, it is then used in the program 

// event loop is reponsible for executing a code, collecting and processing event and executing queued subtask 

// const fetchuser = (username) => {
//     setTimeout(() => {
//         return {username}
//     }, 2000)
// }
// const user = fetchuser ("Tony")
// console.log(`Your name is: ${user.username}`)


// callback

const fetchuser = (username, callback) => {
    setTimeout(() => {
        callback ({username})
    }, 2000)
}

fetchuser ("Adetola", (user) => {
console.log(`Your name is: ${user.username}`)
})

//call back in JS is called after a giving task. it allows other cosdes to run in the main time and prevent any blocking

const fetcher = (username, callback) => {
    setTimeout(() => {
        callback ({username})
    }, 2000)
}

const fetchuserphotos = (username, callback) => {
    console.log(`fetching ${username}'s photo`)
    setTimeout(() => {
            callback (["photo 1", "photo 2"])
    }, ((2000)));
}

fetchuser("Adetola", (user) => {
     console.log(`Your name is: ${user.username}`)
     fetchuserphotos(user.username, (userphotos) => {
         console.log(`your photos are: ${userphotos}`)
     })
})

fetchphotodetails = (photo, callback) => {
    setTimeout (() => {
        callback ("details")
    }, 2000)
}


// // call back hell (not adviceable, causes to much embeded ...)

// fetchuser("Adetola", (user) => {
//     console.log(`your name is: ${user.username}`)
//     fetchuserphotos(user.username, (userphotos) => {
//         console.log(`your photos are: ${userphotos}`)
//         fetchphotodetails (userphotos[0], (details) => {
//             console.log(`your details are: ${details}`)
//         })
//     })
// })

// A promise is similar to promise in real life, it is an assureance that something will be done. promise is use to keep track of 
// whether an asynchronous as been executed or not and determines what happens after the event has occured. now it uses the then() and 
// catch() method. when ever you want to promise you call "Promise"

const fetchusers = (username) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            // resolve ({username})
            reject("User not found")
        }, 2000)
     })
}

fetchusers("Adetola")
.then((user) => console.log(user.username))
.catch((error) => console.log(error))


// const fetchuserphotos = (username) => {
//     return new Promise ((resolve, reject) => {
//         console.log(`fetching ${username}'s photo`)
//         setTimeout(() => {
//             resolve (["photo 1", "photo 2"])
            
//         }, 2000)
//     })
// }

// fetchusers("Adetola")
// .then((user) => fetchphotodetails(user.username))
// .then((photos) => fetchphotodetails(photos))


// async/await is use to work with promises in asychronous function. it is basically syntactic sugar for promises 
// await can only be use whenever you can Async functions and wait for it to resolve or rejust. await blocks the execution 
// of the code within the Async function it is located. it uses the try() and catch() methods. 

// Using Async/Await

const displayMe = async() => {
    const user = await  fetchusers ("Adetola")
    const photo = await fetchuserphotos (user.username)
    const details = await fetchphotodetails (photo[0])
    console.log(details)
}
displayMe()