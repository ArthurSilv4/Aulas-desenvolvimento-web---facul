"use strict";

console.log("Hello World!");

let n1, n2, s;
let nome = "Arthur", idade = 19, eAluno = true;
let p1, p2, m;

n1 = 10;
n2 = 10;
s = n1 + n2;

console.log("Soma das variaveis:", s);

if (s == 8) {
    let k;
    k = 100;
    console.log("Valor de k:", k);
}

console.log("\n");
console.log("_________________________________________________________");
console.log("\n");


console.log("Nome:", nome, "|", typeof nome);
console.log("idade:", idade, "|", typeof idade);
console.log("foi aluno:", eAluno, "|", typeof eAluno);


console.log("\n");
console.log("_________________________________________________________");
console.log("\n");


p1 = 3;
p2 = 6;
m = (p1 + 2 * p2) / 3;

console.log("Media Prova:", m);
console.log(`A media é: ${m.toFixed(2)}`);


console.log("\n");
console.log("_________________________________________________________");
console.log("\n");


let s1 = "Hello";
let s2 = "World";
let somaS = s1 + " " + s2;

let n11 = 5;
let s11 = " apples";
let somaSN = n11 + s11;

let vazio;
let somaVN = n11 + vazio;

let bool1 = true;
let bool2 = false;
let somaB = bool1 + bool2;

console.log("Soma de 2 strings:", somaS);
console.log("Soma de 1 numero com string:", somaSN);
console.log("Soma de 1 numero com uma variavel vazia:", somaVN);
console.log("Soma de 2 boleanos:", somaB);

console.log("5" === 5 ? "Iguais" : "Diferentes");


console.log("\n");
console.log("_________________________________________________________");
console.log("\n");


let estado;
let conceito;

if (m >= 5 ? estado="Aprovado" : estado="Exame");

if (m >= 9) {
    conceito = "Conceito A";
} else if (m >= 7) {
    conceito = "Conceito B";
} else if (m >= 5) {
    conceito = "Conceito C";
} else if (m >= 3) {
    conceito = "Conceito D";
} else {
    conceito = "Conceito E";
}

console.log(`O aluno foi ${estado} com conceito ${conceito} e media ${m.toFixed(2)}`);
