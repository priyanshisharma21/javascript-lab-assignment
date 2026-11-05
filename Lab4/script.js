/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 4 - Writing Functions
*/

// Task 1
console.log("--- Task 1 ---");
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Asha"));

// Task 2
console.log("--- Task 2 ---");
const square = (n) => n * n;
console.log(square(6));

// Task 3
console.log("--- Task 3 ---");
function billWithTax(amount, taxRate = 0.18) {
  return amount + amount * taxRate;
}
console.log(billWithTax(100));
