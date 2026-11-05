/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 15 - Promises and async/await with Local Data
*/

function checkMarks(marks) {
  return new Promise(function (resolve, reject) {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

// Task 1
function task1() {
  console.log("--- Task 1 ---");
  return checkMarks(80).then(function (value) {
    console.log(value);
  });
}

// Task 2
function task2() {
  console.log("--- Task 2 ---");
  return checkMarks(120).catch(function (error) {
    console.log(error.message);
  });
}

// Task 3
async function run() {
  console.log("--- Task 3 ---");
  try {
    console.log(await checkMarks(65));
    console.log(await checkMarks(-5));
  } catch (error) {
    console.log("Caught: " + error.message);
  }
}

// Task 4
function getUsers() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve([
        { id: 1, name: "Asha" },
        { id: 2, name: "Rohan" },
        { id: 3, name: "Meera" },
      ]);
    }, 100);
  });
}
async function showUsers() {
  console.log("--- Task 4 ---");
  const users = await getUsers();
  users.forEach(function (user) {
    console.log(user.name);
  });
}

// Run the tasks one after another
async function main() {
  await task1();
  await task2();
  await run();
  await showUsers();
}
main();
