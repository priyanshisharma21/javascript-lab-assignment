/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 7 - Constructor Functions and Classes
*/

// Task 1
console.log("--- Task 1 ---");
{
  const Student = function (name, marks) {
    this.name = name;
    this.marks = marks;
  };
  const s1 = new Student("Asha", 88);
  console.log(s1.name);
  console.log(s1.marks);
}

// Task 2
console.log("--- Task 2 ---");
class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
  summary() {
    return this.title + " has " + this.pages + " pages";
  }
}
const book = new Book("Algorithms", 320);
console.log(book.summary());

// Task 3
console.log("--- Task 3 ---");
{
  const Student = function (name, marks) {
    this.name = name;
    this.marks = marks;
  };
  Student.prototype.result = function () {
    return this.marks >= 40 ? "Pass" : "Fail";
  };
  const s2 = new Student("Asha", 88);
  console.log(s2.result());
}
