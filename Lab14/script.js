/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 14 - Timers and Intervals
*/

// The three tasks run one after another so their output does not mix.

// Task 1
function task1(done) {
  console.log("--- Task 1 ---");
  console.log("Start");
  setTimeout(function () {
    console.log("Timer done");
    done();
  }, 0);
  console.log("End");
}

// Task 2
function task2(done) {
  console.log("--- Task 2 ---");
  const id = setTimeout(function () {
    console.log("Not shown");
  }, 1000);
  clearTimeout(id);
  console.log("Cancelled");
  done();
}

// Task 3
function task3() {
  console.log("--- Task 3 ---");
  let count = 0;
  const intervalId = setInterval(function () {
    count++;
    console.log("Tick " + count);
    if (count === 3) {
      clearInterval(intervalId);
    }
  }, 200);
}

task1(function () {
  task2(function () {
    task3();
  });
});

// Note for Task 1: the order printed is Start, End, Timer done
// because setTimeout callbacks run after the current code finishes.
