const userMail = prompt("Inserisci la tua email")

// LISTA MAIL                   0                       1                           2                           3
const listaMail = [ "andreacognome@gmail.com", "carlocognome@gmail.com", "dantecognome@gmail.com", "federicocognome@gmail.com"]
console.log(listaMail);
// AGGIUNGO NOMI ALLA LISTA   4                           5
listaMail.push ("giacomocognome@gmail.com" , "marcocognome@gmail.com")
console.log(listaMail);

    if ( userMail === "andreacognome@gmail.com" ) {
        alert( "Congratulazioni " + userMail + ", puoi accedere al sito!" );
}
    else if ( userMail === "carlocognome@gmail.com" ) {
        alert( "Congratulazioni " + userMail + ", puoi accedere al sito!" );
}
    else if ( userMail === "dantecognome@gmail.com" ) {
        alert( "Congratulazioni " + userMail + ", puoi accedere al sito!" );
}    
    else if ( userMail === "federicocognome@gmail.com" ) {
        alert( "Congratulazioni " + userMail + ", puoi accedere al sito!" );
}
    else if ( userMail === "giacomocognome@gmail.com" ) {
        alert( "Congratulazioni " + userMail + ", puoi accedere al sito!" );
    }
    else if ( userMail === "marcocognome@gmail.com" ) {
        alert( "Congratulazioni " + userMail + ", puoi accedere al sito!" );
    }
    else {
        alert ("La tua mail non è valida o non è autorizzata ad accedere al sito!")
    }