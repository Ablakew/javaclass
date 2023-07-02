/*
call the calculateDigitSum() function to prompt the user for an integer and 
calculate the sum of all its digits. 
The input is obtained using parseInt() function to ensure an integer value. 
*/
function calculateDigitSum() {
    let prompt = require("prompt-sync")();
  
    // Prompt the user for an integer
    let number = parseInt(prompt("Enter an integer:"));
  
    // Calculate the sum of all the digits
    let sum = 0;
    let absNumber = Math.abs(number); // Convert to absolute value to handle negative numbers
  
    while (absNumber > 0) {
      let digit = absNumber % 10; // Get the rightmost digit
      sum += digit; // Add the digit to the sum
      absNumber = Math.floor(absNumber / 10); // Remove the rightmost digit
    }
  
    // Display the sum of all the digits
    console.log("Sum of all the digits: " + sum);
  }
  
  calculateDigitSum();
  