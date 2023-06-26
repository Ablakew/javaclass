
let prompt= require("prompt-sync")()
let age;
//prompts the user to enter their age, converts the input to an integer
do {
  age = parseInt(prompt("Enter your age:"));

  //checks if the age is less than or equal to 18. If it is, displays a message
  if (age <= 18) {
    console.log("You must be older than 18. Please try again.");
  }
  //Once an age greater than 18 is entered, the loop terminates 
} while (age <= 18);

console.log("Congratulations! You are older than 18.");
