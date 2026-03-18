function somar_num() {
    let soma = 0;
    let continuar = true;
    while (continuar) {
        let numero = parseFloat(prompt("digite um numero para somar: "));
        if (!isNaN(numero)) {
            soma += numero;
            //soma = soma + numero
            console.log(soma);
        } else {
            alert("porfavor, digite um numero valido");
        }
        continuar = confirm("deseja adicionar mais um numero");
    }
    alert("a soma dos numero é " + soma);
}