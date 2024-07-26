const prompt = require("prompt-sync")();

const numele = prompt("Introduceti numele clientului: ", "nume client...");
const data = prompt("Data semnarii contractului: ", "data semnarii...");

console.log(`Clientul pe nume ${numele}, a semnat contractual la data de ${data}`)