let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
const operators = ["+", "-", "*", "/", "%"];
var addition = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;

// 4. Check for division by zero using conditional operators
let division = (num2 !== 0) ? (num1 / num2) : "Error: Division by zero!";
let modulus = (num2 !== 0) ? (num1 % num2) : "Error: Modulus by zero!";

// 5. Log results clearly in the console
console.log(Numbers Entered: ${num1} and ${num2});
console.log(Addition (${num1} + ${num2}) = ${addition});
console.log(Subtraction (${num1} - ${num2}) = ${subtraction});
console.log(Multiplication (${num1} * ${num2}) = ${multiplication});
console.log(Division (${num1} / ${num2}) = ${division});
console.log(Modulus (${num1} % ${num2}) = ${modulus});