"use strict";

//Declaração de variáveis


//Declaração de funções
function calcularMedia(p1,p2){
    let media = (p1 + 2*p2) / 3;
    return media.toFixed(2);
}

//Expressão de função
let somaNumero = function(n1=0,n2=0){
    return n1 + n2;
};

// Função recursiva para calcular o fatorial de um número
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

let i = 10; 

//for while do while ex1
for (let i = 0; i < 10; i++) {
    console.log("For:",i);
}

while (i > 0) {
    console.log("While:", i);
    i--;
}

do {
    console.log("Do While:", i);
    i += 2; 
} while (i < 20);


//ex2
let parOuImpar = function(n){
    let r;
    if(n % 2 == 0){
        r = "Par";
    }else{
        r = "Impar";
    }
    return r;
}

let parOuImparV2 = function(n){
    return (n % 2 == 0) ? "Par" : "Impar";
}

console.log(parOuImpar(10));
console.log(parOuImparV2(10));

//arrow function

let somaNumeroV2 = (n1=0,n2=0) => n1 + n2;

console.log(somaNumeroV2(5,8));




//Chamada da função recursiva
console.log("Fatorial de 5:", fatorial(5));
console.log("Fatorial de 3:", fatorial(3));

console.log("\n------------\n ");

//Chamada de funções
console.log("Media do aluno 1:",calcularMedia(5,8));
console.log("Media do aluno 2:",calcularMedia(3.5,6));
console.log("Media do aluno 3:",calcularMedia(5,1));

console.log("\n------------\n ");

console.log("Soma:",somaNumero(5,8));