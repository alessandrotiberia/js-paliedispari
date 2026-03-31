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



//===================================================================================================================//
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// inserire numero 
const scelta = prompt("pari o dispari?").toLowerCase(); // tutto minuscolo
const operatore = parseInt(prompt("inserisci numero da 1 a 5"));

function numero_pc() {
  return Math.floor(Math.random() * 5) + 1; // arrotonda per difetto quindi diamo +1 per arrivare a 5
    //return restituisci
}
// numero prende numeropc della funzione
const numero = numero_pc(); 


//somma numeri

const totale = operatore + numero;
console.log("somma dei due numeri:", totale);

// Stabiliamo se la somma dei due numeri è pari o dispari

function somma_numeri(totale) {
    // Se divido un numero per 2 e il resto è 0, allora il numero è pari.

    // % modulo calcola il resto quindi se resto è 0 somma è pari
    if (totale % 2 === 0) {
        return "pari";
        
    } else {
        return "dispari";
        
    }
}

let tot_somma_numeri = somma_numeri(totale);

if (operatore === tot_somma_numeri) {
    console.log("vinto utente");
    
} else {
    console.log("vinto il pc");
    
}
