let prompt= require("prompt-sync")()
// Prompt the user for input
let initialAmount = parseFloat(prompt("Enter the initial amount in the savings account:"));
let annualInterestRate = parseFloat(prompt("Enter the annual interest rate (in percentage):"));
let numberOfYears = parseInt(prompt("Enter the number of years to compound:"));

// Convert the interest rate from percentage to decimal
let monthlyInterestRate = annualInterestRate / 100 / 12;

// Calculate the balance with monthly compounding
let balance = initialAmount * Math.pow(1 + monthlyInterestRate, numberOfYears * 12);

// Display the balance
console.log("The balance after " + numberOfYears + " years will be: $" + balance.toFixed(2));
