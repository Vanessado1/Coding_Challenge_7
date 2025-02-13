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