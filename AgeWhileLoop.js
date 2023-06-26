
let prompt= require("prompt-sync")()
let age = 0;
while (age <= 18) {
  age = parseInt(prompt("Enter your age:"));

  if (age <= 18) {
    console.log("You must be older than 18. Please try again.");
  }
}

console.log("Congratulations! You are older than 18 and can drink Alcohol!!!.");
