console.log("test")

//there are 5 types of operators
//1. arithmetic
//2. comparism
//3. logical 
//4. assignment
// 5. termary

//arithmetic {addition, divisio, multiply, increment, decrement, subtraction, module}
let a = 5
let b = 10

console.log(b + a)
console.log(b - a)
console.log(b * a)
console.log(b / a)
console.log(a ** b)
console.log(a % b)
console.log(b % a)
console.log(a += b)
console.log(b -=a)
// console.log(a ++) ++ means you're adding 1 
console.log(a)

//comparism are <, >, >=, =<, = or not equal to
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a != b)
console.log(a === b) 
console.log(a !== b)
console.log(5 == "5") //loose equality will check for only the value [never use this equallity]
console.log(5 === "5") //strict will cheack for the value and data type

// Logical Operator: this is made of "and"[&&] "or"[||] and "not"[!]
// AND operator, all the component must be true. if 1 is not true it will turn false

console.log(true && true && true && true)
console.log(true && false && true && true)

//OR operator: at least 1 operant must be true 
console.log(true || false || false || false)
console.log(false || false || false || false)

//NOT operator: will always give you the opposite of your console
console.log(!false)
console.log(!true)

//Logic and control flow