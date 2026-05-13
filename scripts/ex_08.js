function twovarial() {

    let num1 = parseInt(prompt("digite um numero inteiro:"));
    let num2 = parseInt(prompt("digite um numero inteiro:"));

    let dif = num1 - num2;
    let expre = (2 * num1) + (3 * num2);
    let multi = num1 * num2;

    alert("variaveis: num1 = " + num1 + ", num2 = " + num2);
    alert("A diferença entre as duas variáveis: " + dif);
    alert("O dobro da primeira somado ao triplo da segunda: " + expre);
    alert("A multiplicação das duas variáveis: " + multi);
}