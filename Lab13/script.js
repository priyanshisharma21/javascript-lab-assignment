/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 13 - Reduce, Some, Every and Map
*/

// Task 1
console.log("--- Task 1 ---");
const prices = [120, 45, 300];
const total = prices.reduce((sum, p) => sum + p, 0);
console.log(total);

// Task 2
console.log("--- Task 2 ---");
const marks = [72, 85, 30, 90];
console.log(marks.some((m) => m < 40));
console.log(marks.every((m) => m >= 35));

// Task 3
console.log("--- Task 3 ---");
const original = [72, 85, 64, 90];
const bumped = original.map((m) => m + 5);
console.log(bumped);
console.log(original);
