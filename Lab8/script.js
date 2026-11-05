/*
  Name: Priyanshi Sharma
  Roll No: BCS2025582
  Assignment: 8 - Inheritance, Methods and Composition
*/

// Task 1
console.log("--- Task 1 ---");
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi, I am " + this.name;
  }
}
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}
const anita = new Teacher("Anita", "Maths");
console.log(anita.greet());

// Task 2
console.log("--- Task 2 ---");
class Locker {
  constructor(pin) {
    this.pin = pin;
  }
  checkPin(number) {
    return number === this.pin;
  }
}
const locker = new Locker(1234);
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));

// Task 3
console.log("--- Task 3 ---");
class Engine {
  constructor(power) {
    this.power = power;
  }
}
class Car {
  constructor(power) {
    this.engine = new Engine(power);
  }
  start() {
    return "Car starts with " + this.engine.power + " HP";
  }
}
const car = new Car(150);
console.log(car.start());
