/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 11 - Scope and Closures
*/

// Task 1
console.log("--- Task 1 ---");
let level = "outer";
{
  let level = "inner";
  console.log(level);
}
console.log(level);

// Task 2
console.log("--- Task 2 ---");
function makeCounter() {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());

// Task 3
console.log("--- Task 3 ---");
const school = "Sample College";
function showSchool() {
  console.log("Welcome to " + school);
}
showSchool();
