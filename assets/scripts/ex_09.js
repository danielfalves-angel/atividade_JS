function twonum() {
    let n1 = parseInt(prompt("digite um numero inteiro:"));
    let n2 = parseInt(prompt("digite um numero inteiro:"));

    if (n1 > n2) {
        alert(n1);
        alert(n2);
    } else {
        alert(n2);
        alert(n1);
    }
}