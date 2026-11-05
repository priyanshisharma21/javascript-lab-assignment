/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 2 - Operators, Type Conversion and a Calculator
*/

// Task 1
console.log("--- Task 1 ---");
let a = 17;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Task 2
console.log("--- Task 2 ---");
let num = Number("12");
console.log(num + 5);
let text = String(7);
console.log(text + "3");

// Task 3
console.log("--- Task 3 ---");
let x = 8;
let y = 4;
let operator = "+";
if (operator === "+") {
  console.log(x + y);
} else if (operator === "-") {
  console.log(x - y);
}
operator = "-";
if (operator === "+") {
  console.log(x + y);
} else if (operator === "-") {
  console.log(x - y);
}
