// =====================================================================
// JavaScript Curriculum - Assignments 1 to 6
// Run in the browser console (prompt() needs a browser) or save as
// part of an HTML page's <script>. Assignment 2 asks for input.
// =====================================================================

// ---------------------------------------------------------------------
// Assignment 1: Variables, Data Types, and Console Operations
// ---------------------------------------------------------------------
console.log("===== Assignment 1 =====");
var userName = "Alice";                       // var: function-scoped
let age = 25;                                 // let: block-scoped, reassignable
const isEmployed = true;                      // const: cannot be reassigned
const skills = ["HTML", "CSS", "JavaScript"];

console.log(`Name: ${userName} (Type: ${typeof userName})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`);

// ---------------------------------------------------------------------
// Assignment 2: Operators, Expressions, and Input Handling
// ---------------------------------------------------------------------
console.log("\n===== Assignment 2 =====");
let subtotal = Number(prompt("Enter the bill amount:", "100"));
let tipPercent = Number(prompt("Enter the tip percentage:", "15"));

let tip = (subtotal * tipPercent) / 100;      // arithmetic operators
let total = subtotal;
total += tip;                                 // assignment operator

console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercent}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${total}`);

// ---------------------------------------------------------------------
// Assignment 3: Conditional Logic Implementation
// ---------------------------------------------------------------------
console.log("\n===== Assignment 3 =====");
const score = 85;
let grade;

// if...else: validate the score
if (score < 0 || score > 100) {
  console.log("Invalid score! Must be between 0 and 100.");
} else {
  // switch: letter grade from the tens digit
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      grade = "A";
      break;
    case 8:
      grade = "B";
      break;
    case 7:
      grade = "C";
      break;
    case 6:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  // ternary: pass / fail
  const status = score >= 40 ? "Passed" : "Failed";

  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
}

// ---------------------------------------------------------------------
// Assignment 4: Loop Control Structures
// ---------------------------------------------------------------------
console.log("\n===== Assignment 4 =====");

// for loop: multiplication table of 5
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// while + break: first number > 10 divisible by 6
console.log("-- First number > 10 divisible by 6 --");
let n = 11;
while (true) {
  if (n % 6 === 0) {
    console.log(`Found: ${n}`);
    break;
  }
  n++;
}

// do...while + continue: print 1 to 5, skipping 3
console.log("-- do...while with continue (skipping 3) --");
let k = 0;
do {
  k++;
  if (k === 3) continue;                      // skip 3
  console.log(`Number: ${k}`);
} while (k < 5);

// ---------------------------------------------------------------------
// Assignment 5: Function Architecture and Scope
// ---------------------------------------------------------------------
console.log("\n===== Assignment 5 =====");

// Standard function with default parameters
function rectangleAreaStandard(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const rectangleAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectangleAreaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

// Scope demonstration
try {
  {
    let blockVar = "I only exist inside this block";
  }
  console.log(blockVar);                      // outside the block -> error
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
}

// ---------------------------------------------------------------------
// Assignment 6: Arrays, Objects, and Core Methods
// ---------------------------------------------------------------------
console.log("\n===== Assignment 6 =====");
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

console.log("-- All Products (forEach) --");
products.forEach((p) => console.log(`Item: ${p.name} - Price: $${p.price}`));

console.log("-- Filtered Products (Price < $50) --");
const cheap = products.filter((p) => p.price < 50);
console.log(cheap);

console.log("-- Mapped Product Tags (map) --");
const tags = products.map((p) => `${p.name.toUpperCase()} costs $${p.price}`);
console.log(tags);
