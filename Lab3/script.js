/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 3 - Conditions and Loops
*/

// Task 1
console.log("--- Task 1 ---");
let marks = 72;
if (marks >= 75) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// Task 2
console.log("--- Task 2 ---");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Task 3
console.log("--- Task 3 ---");
let total = 0;
let n = 1;
while (total <= 20) {
  total += n;
  n++;
}
console.log(total);
