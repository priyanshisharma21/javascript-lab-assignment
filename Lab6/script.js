/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 6 - JSON Text
*/

// Task 1
console.log("--- Task 1 ---");
const student = { name: "Rohan", marks: [70, 80] };
const jsonText = JSON.stringify(student);
console.log(jsonText);

// Task 2
console.log("--- Task 2 ---");
const cityText = '{"city":"Pune","pin":411001}';
const cityObj = JSON.parse(cityText);
console.log(cityObj.city);

// Task 3
console.log("--- Task 3 ---");
const badText = "{name: Rohan}";
try {
  JSON.parse(badText);
} catch (error) {
  console.log("Invalid JSON");
}
