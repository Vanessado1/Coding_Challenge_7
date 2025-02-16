// Task 1: Function Declaration 
//declared calculateInvoice function 
 function calculateInvoice(subtotal, taxRate, discount) {
    let total = 0
   total = (subtotal + (subtotal * taxRate)) - discount
    return total.toFixed(2)
 }
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5)}`); // Expected output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20)}`); // Expected output: "Total Invoice: $530.00"

// Task 2: Function Expression 
//declared calculateHourlyWage 
function calculateHourlyWage(salary, hoursPerWeek) {
   let totalHours = 0
   totalHours= (hourlyWage = salary / (hoursPerWeek * 52))
   return totalHours.toFixed(2)
}
console.log(`Hourly Wage: $${calculateHourlyWage(52000, 40)}`); // Expected output: "Hourly Wage: $25.00"
console.log(`Hourly Wage: $${calculateHourlyWage(75000, 35)}`); // Expected output: "Hourly Wage: $41.21"

// Task 3: Arrow Function 
// created an arrow function to calculate a discount based of the number of years 
const calculateLoyaltyDiscount = (amount, years) => {
   let discount = 0;
   if (years >= 5) {
      discount = 0.15;
   } else if (years >= 3) {
      discount = 0.10;
   } else {
      discount = 0.05;
   }
   loyaltyDiscount = amount - (amount * discount)
   return loyaltyDiscount.toFixed(2);
}
console.log(`Discounted Price: $${calculateLoyaltyDiscount(100, 6)}`); // Expected output: "Discounted Price: $85.00"
console.log(`Discounted Price: $${calculateLoyaltyDiscount(200, 2)}`); // Expected output: "Discounted Price: $190.00"

// Task 4: Parameters and Arguments 
// declared a function to calculate shipping cost for USA and Canada 
const calculateShippingCost = (weight, location, expedited = false) => {
   let perPound = 0 
   let baseCost = 0
   if (location === "USA") {
      perPound = 0.5;
      baseCost = 5;
   } else {
      perPound = 0.7;
      baseCost = 10;
   }
   let shippingCost = baseCost + (weight * perPound)
   if (expedited) {
      shippingCost += 10;
   }
   return shippingCost.toFixed(2)
}
console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true)}`);// Expected output: "Shipping Cost: $20.00"
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false)}`); // Expected output: "Shipping Cost: $13.50"

// Task 5: Returning Values 
// created a function to calculate the amount of interest 
function calculateLoanInterest(principal, rate, years) {
   interest = (principal * rate * years)
   return interest.toFixed(2)
}
console.log(`Total Interest: $${calculateLoanInterest(1000, 0.05, 3)}`); // Expected output: "Total Interest: $150.00"
console.log(`Total Interest: $${calculateLoanInterest(5000, 0.07, 5)}`); // Expected output: "Total Interest: $1750.00"

// Task 6: Higher Order Functions 
// declared transaction array 
let transactions = [500, 1200, 3000, 800, 2200];
// created a function to filter the transactions 
function filterHighValueTransactions(transactions, filterTransaction) {
   return transactions.filter(filterTransaction);
}
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected output: [1200, 3000, 2200]

// Task 7: Closures 
// created a budget tracker function 
function createBudgetTracker() {
   let totalBudget = 0;
   return function(expenses) {
      totalBudget -= expenses;
      return `Current Balance: $${totalBudget}`;
   };
}
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"

// Task 8: Recursion in JavaScript 
// created a recursive function to calculate revenue growth based off of years 
function calculateGrowth(years, revenue) {
   if(years >= 10) return revenue;
   let totalRevenue = calculateGrowth(years + 1, revenue * 1.05);
   return parseFloat(totalRevenue.toFixed(2))
};
console.log(`Projected Revenue: $${calculateGrowth(8, 1000)}`); // Expected output: "Projected Revenue: $1102.50"
console.log(`Projected Revenue: $${calculateGrowth(5, 5000)}`); // Expected output: "Projected Revenue: $6381.41"