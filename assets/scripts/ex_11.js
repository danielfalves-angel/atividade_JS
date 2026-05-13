function folha() {
let salInfo = parseFloat(prompt("digite um numero inteiro:"));

let taxa;
let valorDesc;

if (salInfo <= 1000) {
    taxa = 8;
} else if (salInfo <= 1500) {
    taxa = 8.5;
} else {
    taxa = 9;
}

valorDesc = salInfo * (taxa / 100);
let salLiqui = salInfo - valorDesc;

alert("salario informado: R$ " + salInfo);
alert("taxa de desconto aplicada: " + taxa + "%");
alert("valor do desconto: R$ " + valorDesc);
alert("salário liquido: R$ " + salLiqui);
}