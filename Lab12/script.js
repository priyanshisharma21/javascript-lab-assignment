/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 12 - Callbacks and Higher-Order Functions
*/

// Task 1
console.log("--- Task 1 ---");
function applyTwice(fn, value) {
  return fn(fn(value));
}
function addTen(n) {
  return n + 10;
}
console.log(applyTwice(addTen, 5));

// Task 2
console.log("--- Task 2 ---");
function formatMarks(marks, callback) {
  return callback(marks);
}
console.log(formatMarks(76, (m) => "Marks: " + m + "/100"));

// Task 3
console.log("--- Task 3 ---");
function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}
repeatAction(3, (round) => console.log("Round " + round));
