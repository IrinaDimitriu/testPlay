const prompt = require("prompt-sync")();

const n = prompt("Enter N digits: ", "n digits is...");

function unique(str1) {
  var str1 = n;
  // Create a variable str and initialize it with the input string
  var str = str1;

  // Create an empty string uniq to store unique characters
  var unique = "";

  // Iterate through each character in the input string
  for (var x = 0; x < str.length; x++) {
    // Check if the current character is not already in the uniq string
    if (unique.indexOf(str.charAt(x)) == -1) {
      // If true, append the current character to the uniq string
      unique += str[x];
    }
  }

  // Return the string containing unique characters
  return unique;
}

// Define a function named find_FirstNotRepeatedChar that finds the first non-repeated character in a given string
function find_FirstNotRepeatedChar(str) {
  var str = n;
  // Convert the input string into an array of characters
  var arra1 = str.split("");

  // Initialize variables result and ctr for storing the result and counting character occurrences
  var result = "";
  var ctr = 0;

  // Iterate through each character in the array
  for (var x = 0; x < arra1.length; x++) {
    // Reset the counter (ctr) for each character
    ctr = 0;

    // Iterate through the array again to count occurrences of the current character
    for (var y = 0; y < arra1.length; y++) {
      // Check if the current character is equal to the character at position y
      if (arra1[x] === arra1[y]) {
        // If true, increment the counter (ctr)
        ctr += 1;
      }
    }

    // Check if the counter (ctr) is less than 2 (character occurs only once)
    if (ctr < 2) {
      // If true, assign the current character to the result and break out of the loop
      result = arra1[x];
      break;
    }
  }

  // Return the first non-repeated character found
  return result;
}

function additions_plus_ten(str) {
  var str = find_FirstNotRepeatedChar();
  return parseInt(str) + 10;
}

// Log the result of calling unique with the input string "thequickbrownfoxjumpsoverthelazydog" to the console
console.log("Uniq digits from prompt input are: ' " + unique() + " '");
console.log("First non repeatet symbol is: " + find_FirstNotRepeatedChar(n));
console.log("Add 10 to first non repeated str: " + additions_plus_ten(n));

// to verify additions_plus_ten() to be a strict number, to avoid NAN result - to create a new function which will find first digit from array
