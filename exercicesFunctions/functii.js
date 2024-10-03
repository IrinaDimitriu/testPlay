import { arrayEx1, ex7semn, ex7nr } from "./variabile.js";

export function gasesteNrCelMaiMic(arr) {
  return Math.min(...arr);
}

export function triunghi(semn, nr) {
  for (let i = 1; i < nr + 1; i++) {
    console.log(semn.repeat(i));
  }
}

let becauseSentence = "Eu invat, eu invat limba, deja invat si am invatat";
let patternTwo = / invat /g;
let countBecause = becauseSentence.match(patternTwo).length;
console.log(countBecause); //3

console.log(`\u001b[1;32m` + `Exercitiul 1.` + `\u001b[0m`); // Pentru a colora textul folosim inaintea acestuia `\u001b[1;32m` si la sfarsitul lui `\u001b[0m`
console.log(
  "Conditia este: Găsiți cel mai mic număr din arrayul declarat în fisier1",
);
console.log(`Variabilă declarată este - ${arrayEx1}`);
console.log(
  `Rezultatul meu este -` +
    `\u001b[1;32m` +
    `'${gasesteNrCelMaiMic(arrayEx1)}'` +
    `\u001b[0m`,
);

console.log("Rezultat triunghi este: ");

triunghi(ex7semn, ex7nr);

console.log("Exercitiul 6", countBecause);
