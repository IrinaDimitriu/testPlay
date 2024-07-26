const prompt = require("prompt-sync")();
let user = {
    name: "John",
    age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
console.log("You want to know values of '" + key + "', it is - " + user[key]); // John (if enter "name")