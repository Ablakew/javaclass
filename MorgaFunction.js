/* call the calculateDownPayment() function to prompt the user for the cost of the house and 
calculate the down payment based on the given rules. 
The calculated down payment will be displayed in the console.
*/

function calculateDownPayment() {
    let prompt = require("prompt-sync")();
    let cost = parseFloat(prompt("Enter the cost of the house:"));
    let downPayment;
  
    if (cost < 50000) {
      downPayment = cost * 0.05; // 5% of the cost
    } else if (cost < 100000) {
      downPayment = 1000 + 0.1 * (cost - 50000); // $1000 + 10% of (cost - $50K)
    } else if (cost < 200000) {
      downPayment = 2000 + 0.15 * (cost - 100000); // $2000 + 15% of (cost - $100K)
    } else {
      downPayment = 5000 + 0.1 * (cost - 200000); // $5000 + 10% of (cost - $200K)
    }
  
    console.log("Down Payment: $" + downPayment.toFixed(2));
  }
  
  calculateDownPayment();
  