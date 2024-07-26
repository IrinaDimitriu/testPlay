import { arrayEx1, strEx2, numEx3 } from './variabile.js'

export function gasesteNrCelMaiMic(arr) {
    return Math.min(...arr);
}

function AlphabeticalOrder(str) {
    return str
        .split("")
        .sort()
        .join("");
}

function parSauImpar(int) {
    let ouput = int % 2;
    if (ouput == 0) {
        return "Numar par";
    } else {
        return "Numar impar";
    }
}

document.body.innerHTML += `Exercitiul 1. </br>`;
document.body.innerHTML += `Conditia este: Găsiți cel mai mic număr din arrayul declarat în fisier1</br>`;
document.body.innerHTML += `Variabilă declarată este - ${arrayEx1}</br>`;
document.body.innerHTML += `Rezultatul meu este - ${gasesteNrCelMaiMic(arrayEx1)}</br>`;
// document.body.style.backgroundColor = skColorToRgba(color)

document.body.innerHTML += `<br>Exercitiul 2. </br>`;
document.body.innerHTML += `Conditia este: Sortați un string declarat în fisierul1 alfabetic</br>`;
document.body.innerHTML += `Variabilă declarată este - ${strEx2}</br>`;
document.body.innerHTML += `Rezultatul meu este - ${AlphabeticalOrder(strEx2)}</br>`;

document.body.innerHTML += `<br>Exercitiul 3. </br>`;
document.body.innerHTML += `Conditia este: Verificați dacă un number declarat în fisierul1 este par sau impar </br>`;
document.body.innerHTML += `Variabilă declarată este - ${numEx3}</br>`;
document.body.innerHTML += `Rezultatul meu este - ${parSauImpar(numEx3)}</br>`;