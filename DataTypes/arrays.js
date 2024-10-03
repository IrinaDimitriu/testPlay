/*
// work with an object, push values, pop values, sort
const animals = ["Dogs", "Cats", "Ducks", "Pigs"];
let aLen = animals.length;

for (let i = 0; i < aLen; i++) {
    animals[i] = animals[i];
}
console.log("Last week we had " + aLen + " animals on our farm: ");
console.log(animals.join('\n'));

let boughtAnimal = animals.push("Cows");
let bLen = animals.length;
animals.sort();

console.log("\nYesterday we had " + bLen + " animals on our farm: ");
console.log(animals.join('\n'));

let sellAnimal = animals.pop(); // removing the last animal
let cLen = animals.length;

console.log("\nAfter the fair we have " + cLen + " animals on our farm: ");
console.log(animals.join('\n')); */

// work with an object, prompt alert message
const prompt = require("prompt-sync")();

let user = {
  name: "John",
  age: 30,
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
console.log(user[key]); // John (if enter "name")
