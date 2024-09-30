const prompt = require("prompt-sync")();

const x = prompt("Enter a number: ");
let str = "";

for (let i = 1; i < x; i++) {
  str = str + i;
  if (i % 2 == 0) {
    console.log("The number is even: " + i);
  } else {
    console.log("The number is odd: " + i);
  }
}

console.log(str);
