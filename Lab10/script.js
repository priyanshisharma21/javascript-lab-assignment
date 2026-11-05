/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 10 - Objects and Destructuring
*/

// Task 1
console.log("--- Task 1 ---");
const student = { name: "Rohan", roll: 12, marks: 78 };
console.log(student.name);
student.marks = 81;
console.log(student.marks);

// Task 2
console.log("--- Task 2 ---");
const subjects = ["Maths", "Science", "English"];
const [first, second] = subjects;
console.log(first);
console.log(second);

// Task 3
console.log("--- Task 3 ---");
const student2 = { name: "Rohan", roll: 12, marks: 81 };
const { name, roll } = student2;
console.log(name);
console.log(roll);
