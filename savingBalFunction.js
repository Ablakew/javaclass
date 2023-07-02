/* call the calculateSavingsBalance() function to prompt the user for the initial amount, 
annual interest rate, and number of years to compound. 
It will calculate the balance using monthly compounding and display the result in the console.
*/
function calculateSavingsBalance() {
    let prompt = require("prompt-sync")();
    let initialAmount = parseFloat(prompt("Enter the initial amount in the savings account:"));
    let annualInterestRate = parseFloat(prompt("Enter the annual interest rate (in percentage):"));
    let numberOfYears = parseInt(prompt("Enter the number of years to compound:"));
  
    let monthlyInterestRate = annualInterestRate / 100 / 12;
    let balance = initialAmount * Math.pow(1 + monthlyInterestRate, numberOfYears * 12);
  
    console.log("The balance after " + numberOfYears + " years will be: $" + balance.toFixed(2));
  }
  
  calculateSavingsBalance();
  