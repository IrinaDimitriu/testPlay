const prompt = require("prompt-sync")();

const x = prompt("Enter X number: ", "x number is...");
const y = prompt("Enter Y number: ", "y number is...");

z= parseInt(x) + parseInt(y);

console.log("The additions for x and z is: " + z)