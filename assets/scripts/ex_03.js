let ganhoBrAn = 0;
let gastosAn = 0;
let saldoFiAn = 0;

function balançoGeral() {
    for (let i = 1; i <= 12; i++) {
        let ganhoBrMes = parseFloat(prompt("digite o ganho bruto do mes: " + i));
        let gastosMes = parseFloat(prompt("digite os gastos dos mes: " + i));

        ganhoBrAn += ganhoBrMes;
        gastosAn += gastosMes;
        saldoFiAn = ganhoBrAn - gastosAn;
    }

    console.log(ganhoBrAn);
    console.log(gastosAn);
    console.log(saldoFiAn);

    if (saldoFiAn > 0) {
        alert("A empresa saiu no lucro");
    } else {
        alert("A empresa saiu no prejuizo");
    }
}