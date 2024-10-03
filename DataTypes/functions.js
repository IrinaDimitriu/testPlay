const prompt = require("prompt-sync")();

const x = prompt("Enter X number: ", "x number is...");
const y = prompt("Enter Y number: ", "y number is...");

function additions() {
  return (z = parseInt(x) + parseInt(y));
}

function substraction() {
  return (z = parseInt(x) - parseInt(y));
}

function multiplication() {
  return (z = parseInt(x) * parseInt(y));
}

console.log("Additions function result is: " + additions());
console.log("Substractions function result is: " + substraction());
console.log("Multiplications function result is: " + multiplication());
