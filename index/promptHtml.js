// work with an object, prompt message
let user = {
  name: "John",
  age: 30,
};

let key = prompt("What do you want to know about the user?", "name");
document.body.innerHTML =
  "<h1>You want to know values of '" +
  key +
  "', it is - " +
  user[key] +
  "</h1>";

// access by variable
console.log(user[key]); // John (if enter "name")
