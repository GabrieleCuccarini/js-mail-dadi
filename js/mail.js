const userMail = prompt("Inserisci la tua email")

// LISTA MAIL                   0                       1                           2                           3
const listaMail = [ "andreacognome@gmail.com", "carlocognome@gmail.com", "dantecognome@gmail.com", "federicocognome@gmail.com"]
console.log(listaMail);
// AGGIUNGO NOMI ALLA LISTA   4                           5
listaMail.push ("giacomocognome@gmail.com" , "marcocognome@gmail.com")
console.log(listaMail);

for (let i = 0; i <= 5; i++) {

    if (userMail === listaMail[i]) {
        alert( "Congratulazioni " + userMail + ", puoi accedere al sito!" )
    }
    else {
        alert ("La tua mail non è valida o non è autorizzata ad accedere al sito!")
    }
}

// ("andreacognome@gmail.com") || ("carlocognome@gmail.com") || ("dantecognome@gmail.com") || ("federicocognome@gmail.com") || ("giacomocognome@gmail.com") || ("marcocognome@gmail.com"))