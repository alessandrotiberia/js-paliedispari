'use strict'
/*L'avete già fatta, quindi va solo convertita in funzione XD:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


const utente = prompt("inserisci una parola");

function palindroma(utente) {
    utente = utente.toLowerCase(); // testo in minuscolo
    utente = utente.replace(/[^a-z]/g, ''); // togli spazi punteggiatura numeri ecc valida solo dalla a alla z

    let parola_invertita = ''; // contenitore dove inserire parole al contrario

    for (let i = utente.length - 1; i >= 0; i--) {
        parola_invertita = parola_invertita + utente[i];
        // ogni giro prendi lettera e incolla nel contenitore vuoto di prima (parola_invertita) 
    }

    if (utente === parola_invertita) { // se parola inserita da utente è uguale a quella invertita restituisco TRUE
        return true;
    } else {
        return false; // altrimenti restituisco false
    }
}

const risultato = palindroma(utente); // risultato della funzione viene inserito nel risultato

    if (risultato) {
    console.log("è palidroma");

    } else {
    console.log("non è palindroma");

}













//===================================================================================================================
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/