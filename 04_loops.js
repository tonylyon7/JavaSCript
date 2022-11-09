console.log("test")

//types of loops
//1. while
//2. for

//while loop
// while(condition){
//     //block of code
// }
// let i = 0

// while (i < 10){
//     console.log(i) //hytration
//     i++
// }

// for loop
// for([initilization];[condition];[final-expression]){
//     //block of code
// }

// for( let i = 0; i < 10 ; i++){
//     console.log(i)
// }

// for( let n = 0; n <= 50 ; n++){
//     // console.log(n)
//     if(n % 3 === 0){
//         console.log(`${n} : fizz`)
//     }if (n % 5 === 0){
//         console.log(`${n} : buzz`)
//     } else{ 
//         console.log(`${n} not divisible`)
//     }
// }

for( let n = 0; n <= 50 ; n++){
    if (n % 3 === 0 && n % 5 === 0){
        console.log(`${n}: fizz-buzz`)
    }else if(n % 3 === 0){
        console.log(`${n}: buzz`)
    } else if(n % 5 === 0){
        console.log(`${n} fizz`)
    }else{
        console.log(`${n} not divisible`)
    }
}

for( let k = 0; k <= 20 ; k++){
    k % 2 === 0 ? console.log(`${k}: even number`) 
    : console.log(`${k}: odd number`)
}

