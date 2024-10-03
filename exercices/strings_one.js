// const prompt = require("prompt-sync")();

// const n = prompt("Enter something: ", "digits or letters...");

// // let chars = n.at(5-1)
// let chars = n[5-1]

// console.log("The fith char from input is: " + chars)

const prompt = require("prompt-sync")();
const text = prompt("Acesta este sirul de caractere", "....");
const fifthcharacterofstring = text[4];
console.log(fifthcharacterofstring);
