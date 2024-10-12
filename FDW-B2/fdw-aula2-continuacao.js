"use strict";

//declarando array
const arrayVariado = ["ADS", 5, 5.3, true,];
const arrayProfessores = [];

arrayProfessores[0] = "Paz";

arrayProfessores.unshift("Rafael", "Sobrino", "Guerra");
let elementoRemovido = arrayProfessores.shift();
arrayProfessores.push("Leo", "Maua", "Claudio");
arrayProfessores.pop();

arrayProfessores.splice(0, 0, "Jose");
arrayProfessores.splice(5, 1, "Branquinho");

arrayProfessores.sort();

//mostrar array
for (let i = 0; i < arrayProfessores.length; i++) {
    console.log(arrayProfessores[i]);
}

console.log("\n");

arrayProfessores.forEach(
    function (element) {
        console.log(element);
    }
);

//consoles
// console.log(arrayProfessores);
// console.table(arrayProfessores);
// console.log("Elemento removido:",elementoRemovido);

// console.log("Tipo:",typeof arrayVariado);
// console.log("quantidade de elementos",arrayVariado.length);


