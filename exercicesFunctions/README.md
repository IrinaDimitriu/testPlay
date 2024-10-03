# Conditia generala

De creat un fișier cu variabile, și de folosit acele variabile într-un alt fișier. Să presupunem ca sunt variabilele unui environment. (Ex: Să aibă valorile url, home page title, array Masini, cifrele pare, cifrele impare. ) apoi în fișier 2 creem funcții care vor lucra cu acele variabile. Pentru fiecare variabile să fie câte o funcție. Afișăm răspunsurile pentru fiecare într-un html. Variabilele le declarați sub ce nume vreți, le afișați în html ca rezultat pentru fiecare exercițiu.
Exercițiu 1.
Condiția “….”
Variabilă declarată este -
Rezultatul meu este -
.
.
.Exercitiul 7….

## Exercitiul 1

Găsiți cel mai mic număr din arrayul declarat în fisier1 (arrayFindMin)

function gasesteNrMaiMic(arr) {
return Math.min(...arr);
}

## Exercitiul 2

Sortați un string declarat în fisierul1 alfabetic

function AlphabeticalOrder(str) {
return str
.split("")
.sort()
.join("");
}

## Exercitiul 3

Verificați dacă un number declarat în fisierul1 este par sau impar

function oddOrEven(int) {
let ouput = int % 2;
if (output == 0) {
return "Even";
} else {
return "Odd";
}
}

## Exercitiul 4

Desenați în consolă un triunghi format dintr-un simbol declarat într-o variabilă în fisierul1, pe 5 linii. exemplu +. Ar trebui să arate cam așa

- ++
  +++
  ++++
  +++++

for (x = "#"; x.length <= 7; x += x) {
console.log(x);
}

## Exercitiul 5

Calculați numeral de cuvinte dintr-o propoziție declarată în fisierul1

function countWords(str) {
return str.split(" ").length;
}

## Exercitiul 6

În fisierul1, Declari o variabila cu o propoziție care să conțină un anumit cuvânt de câteva ori, creați o funcție care va afișa de câte ori se repetă cavantul ales

// #STEP-2
let becauseSentence =
"You cannot end a sentence with because because because is a conjunction";
let patternTwo = /because/gi;
let countBecause = becauseSentence.match(patternTwo).length;
console.log(countBecause); //3

## Exercitiul 7

Declarați o variabilă în fosierul1 de tip string, ba chiar poate fi propoziție. Și scrieți o funcție care va returna cel puțin 10 metode ale stringul aplicate (length, slice , replace, indexOf(“t”…))
