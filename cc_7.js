// Task 1: Function Declaration 
//declared calculateInvoice function 
 function calculateInvoice(subtotal, taxRate, discount) {
    return total  = (subtotal + (subtotal * taxRate)) - discount
 }
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5)}`); // Expected output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20)}`); // Expected output: "Total Invoice: $530.00"

// Task 2: Function Expression 
//declared calculateHourlyWage 
function calculateHourlyWage(salary, hoursPerWeek) {
   return Math.round (hourlyWage = salary / (hoursPerWeek * 52))
}
console.log(`Hourly Wage: $${calculateHourlyWage(52000, 40)}`); // Expected output: "Hourly Wage: $25.00"
console.log(`Hourly Wage: $${calculateHourlyWage(75000, 35)}`); // Expected output: "Hourly Wage: $41.21"