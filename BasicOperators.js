/*The postfix form of an operator is applied after the operand, while the prefix form is
 applied before the operand */
 let x = 5;
let y = 10;

console.log(x++); // Output: 5 (postfix form: returns the original value of x, then increments it by 1)
console.log(++y); // Output: 11 (prefix form: increments y by 1, then returns the new value)
console.log(x);   // Output: 6
console.log(y);   // Output: 11

/*Assignment Result:

The result of an assignment expression is the value that is assigned. 
This allows you to chain assignments together.
*/
let a = 5;
let b, c;

b = c = a;

console.log(b); // Output: 5
console.log(c); // Output: 5

/*
Type Conversions:

JavaScript automatically performs type conversions 
when operators are used with operands of different types.
*/
let num = 5;
let str = "10";

console.log(num + str); // Output: "510" (num is implicitly converted to a string and concatenated with str)
console.log(num - str); // Output: -5 (str is implicitly converted to a number and subtracted from num)

// addition

let num1 = 5;
let num2 = 10;

let sum = num1 + num2;

console.log(sum); // Output: 15
