function quatroValores() {
    let numeros = [];
    for (i = 0; i < 4; i++) {
        numeros[i] = parseInt(prompt("digte um numero"));
    }
    numeros.sort((a, b) => b - a);
    alert(numeros);
}