
const dadoUtente = Math.floor(Math.random() * 6 + 1);
const dadoIa = Math.floor(Math.random() * 6 + 1);
console.log(dadoUtente, dadoIa);

    if (dadoUtente === dadoIa) {
        alert ("PAREGGIO: " + dadoUtente + " a " + dadoIa)
    } else if (dadoUtente > dadoIa) {
        alert ("L'utente vince " + dadoUtente + " a " + dadoIa)
    } else {
        alert ("L'IA vince " + dadoIa + " a " + dadoUtente)
    }