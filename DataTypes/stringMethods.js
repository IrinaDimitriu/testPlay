let text = "I love cats. Cats are very easy to love. Cats are very popular."

const result = text.matchAll(/ca[a-z]*/gi);
console.log(Array.from(result))

// const regex = /ca[a-z]*/gi;
// const array = [...text.matchAll(regex)];
// console.log(array[0]);
// console.log(array[1]);