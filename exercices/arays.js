// ex 3
const fructe = ['mere', 'pere', 'banane', 'rosii', 'caise'];
console.log(`Obiectul nostru este: ` + `\u001b[1;33m` + `${fructe}` + `\u001b[0m`)
console.log(`A patra valoare a obiectului este: ` + `\u001b[1;31m` + `${fructe[3]}` + `\u001b[0m`)
fructe.splice(3, 1); // stergem din obiect
console.log(`Dupa stergere obiectului este: \n` + `\u001b[1;32m` + `'${fructe}'` + `\u001b[0m`)


// ex 3
// const fructe = ['mere', 'pere', 'banane', 'rosii', 'caise'];
// console.log(fructe.sort())

// ex 4
// const array1 = [12, 13, 14, 15, 16];
// console.log('array1:', array1);
// // Expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log('reversed:', reversed);


// ex 5
// const months = ['Mai', 'Iulie', 'August', 'Octombrie'];
// months.splice(1, 0, 'Iunie');
// // Replaces 1 element at index 4
// months.splice(4, 0, 'Septembrie');
// console.log(months);
// // Expected output: Array [ 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie']