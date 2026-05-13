function vogalConso() {
    let letra = (prompt("digite uma letra:"));
    let maiscula = letra.toUpperCase();
    if (maiscula == "A" || maiscula == "E" || maiscula == "I" || maiscula == "O" || maiscula == "U") {
        alert("essa letra é vogal");
    } else {
        alert("essa letra é consoante");
    }
}

