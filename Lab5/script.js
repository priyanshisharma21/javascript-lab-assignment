/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 5 - Arrays, Array Methods and Nested Arrays
*/

// Task 1
console.log("--- Task 1 ---");
const marks = [72, 85, 64, 90];
console.log(marks.length);
console.log(marks[0]);

// Task 2
console.log("--- Task 2 ---");
const subjects = ["Maths", "Science", "English"];
subjects.forEach(function (subject) {
  console.log(subject);
});

// Task 3
console.log("--- Task 3 ---");
const allMarks = [72, 85, 45, 90];
const passed = allMarks.filter((m) => m >= 60);
console.log(passed);

// Task 4
console.log("--- Task 4 ---");
const grid = [[1, 2, 3], [4, 5, 6]];
console.log(grid[1][2]);
