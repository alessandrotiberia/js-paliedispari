'use strict'
/*L'avete già fatta, quindi va solo convertita in funzione XD:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


const utente = prompt("inserisci una parola");

function palindroma(utente) {
    utente = utente.toLowerCase(); // testo in minuscolo
    utente = utente.replace(/[^a-z]/g,''); // togli spazi punteggiatura numeri ecc valida solo dalla a alla z
}











//===================================================================================================================
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/