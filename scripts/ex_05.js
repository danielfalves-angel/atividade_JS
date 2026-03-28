function imparPar(){
    let numero = parseInt(prompt("digite um numero inteiro:"));
    if (numero % 2 === 0) {
    console.log(numero + " é Par");
    } else {
    console.log(numero + " é Ímpar");
    }
    numero += 1;
    console.log(numero);
}