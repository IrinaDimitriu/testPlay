const prompt = require("prompt-sync")();

// cream mai multe functii care vor lucra cu 2 numere cerute din interfata cu ajutorul la prompt, un x si y. 
// Dupa care scrie functii pentru adunare, scadere si inmultire.
// Dupa care v-om combina 2 dintre ele in console.log

const x = prompt("Enter X number: ", "x number is...");
const y = prompt("Enter Y number: ", "y number is...");

function additions() {
    return z = parseInt(x) + parseInt(y);
}

function substraction() {
    return z = parseInt(x) - parseInt(y);
}

function multiplication() {
    return z = parseInt(x) * parseInt(y);
}

console.log("Additions function result is: " + additions()); // afiseaza resultatul cu descriere
console.log("Substractions function result is: " + substraction());
console.log("Multiplications function result is: " + multiplication());
console.log("Different function result is: " + multiplication() + additions() + "  De ce?");
console.log("Different function result is: " + (multiplication() + additions()));
console.log(multiplication() + additions());