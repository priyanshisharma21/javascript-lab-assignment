/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 9 - DOM, Validation, Storage and Quiz
*/

// Task 2 (works in node and in the browser)
function validateForm(name) {
  const errors = [];
  if (name === "") {
    errors.push("Name is required");
  }
  return errors;
}
console.log("--- Task 2 ---");
console.log(validateForm("Asha"));
console.log(validateForm(""));

// Tasks 1, 3 and 4 need a page, so they run only in the browser (index.html)
if (typeof document !== "undefined") {
  // Task 1
  const heading = document.getElementById("heading");
  const changeBtn = document.getElementById("changeBtn");
  changeBtn.addEventListener("click", function () {
    heading.textContent = "Button clicked";
  });

  // Task 3
  const noteBox = document.getElementById("noteBox");
  const saveBtn = document.getElementById("saveBtn");
  noteBox.value = localStorage.getItem("note") || "";
  saveBtn.addEventListener("click", function () {
    localStorage.setItem("note", noteBox.value);
  });

  // Task 4
  const checkBtn = document.getElementById("checkBtn");
  const result = document.getElementById("result");
  checkBtn.addEventListener("click", function () {
    const chosen = document.querySelector('input[name="answer"]:checked');
    if (chosen && chosen.value === "5") {
      result.textContent = "Correct";
    } else {
      result.textContent = "Try again";
    }
  });
}
