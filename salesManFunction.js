/*call the calculateSalesCommission() function to prompt the user for input, calculate the commission, 
and display the result.*/

function calculateSalesCommission() {
    let prompt = require("prompt-sync")();
    let isSalesManSalaried = prompt("Is the salesman salaried? (yes/no)").toLowerCase();
    let salesAmount = parseFloat(prompt("Enter the sales amount:"));
  
    let commission;
  
    if (isSalesManSalaried === "yes") {
      if (salesAmount < 300) {
        commission = 0;
      } else if (salesAmount < 500) {
        commission = salesAmount * 0.01;
      } else {
        commission = salesAmount * 0.02;
      }
    } else if (isSalesManSalaried === "no") {
      if (salesAmount < 500) {
        commission = salesAmount * 0.02;
      } else {
        commission = salesAmount * 0.03;
      }
    } else {
      console.log("Invalid input. Please enter 'yes' or 'no' for the salaried status.");
      return;
    }
  
    console.log("Commission: $" + commission.toFixed(2));
  }
  
  calculateSalesCommission();
  