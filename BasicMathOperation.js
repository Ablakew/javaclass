//What are results of these expressions?
//The addition with a string "" + 1 converts 1 to a string

let x="" 
let y=1
let z=0
console.log(x+y+z)

let a="" 
let b=-1
let c=0
console.log(a+b+c)
//The subtraction - it converts an empty string "" to 0.

let d=true 
let f=false
console.log(d+f)

console.log(6/"3")

console.log("2" * "3")

console.log(4 + 5 + "px")

console.log("$" + 4 + 5)

console.log("4" - 2)

console.log("4px" - 2)

console.log("  -9  " + 5)
//The subtraction always converts to numbers, so it makes " -9 " a number -9

console.log("  -9  " - 5)


console.log(null + 1)
//null becomes 0 after the numeric conversion.

console.log(undefined + 1)
//undefined becomes NaN after the numeric conversion.

console.log(" \t \n" - 2)
//Space characters are trimmed off string start and end when a string is converted to a number.
//an empty string, it becomes 0
