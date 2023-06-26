// Prompt the user for input
let prompt= require("prompt-sync")()
let isSalesManSalaried = prompt("Is the salesman salaried? (yes/no)").toLowerCase();
let salesAmount = parseFloat(prompt("Enter the sales amount:"));

// Calculate commission based on the provided rules
let commission;
if (isSalesManSalaried === "yes") {
  if (salesAmount < 300) {
    commission = 0; // No commission for sales below $300
  } else if (salesAmount < 500) {
    commission = salesAmount * 0.01; // 1% commission for sales between $300 and $500 (exclusive)
  } else {
    commission = salesAmount * 0.02; // 2% commission for sales above $500
  }
} else if (isSalesManSalaried === "no") {
  if (salesAmount < 500) {
    commission = salesAmount * 0.02; // 2% commission for sales between $300 and $500 (exclusive)
  } else {
    commission = salesAmount * 0.03; // 3% commission for sales above $500
  }
} else {
  console.log("Invalid input. Please enter 'yes' or 'no' for the salaried status.");
  // Exit the program or handle the invalid input as per our requirements
}

// Display the calculated commission
console.log("Commission: $" + commission.toFixed(2));
