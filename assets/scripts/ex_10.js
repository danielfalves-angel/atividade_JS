function salario() {
    let nome = prompt("Digite o nome do funcionário:");
    let salBru = prompt("Digite o salário bruto:");

    salBru = parseFloat(salarioBruto);

    let descINSS = salBru * 0.08;
    let salLiqui = salBru - descINSS;

    alert("funcionário: " + nome);
    alert("salário Bruto: R$ " + salBru);
    alert("desconto INSS (8%): R$ " + descINSS);
    alert("salário liquido: R$ " + salLiqui);

    alert("o salário líquido de " + nome + " é: R$ " + salLiqui);
}