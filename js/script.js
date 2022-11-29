
//Palidroma
//Chiedere all’utente di inserire una parola:
//Creare una funzione per capire se la parola inserita è palindroma


function isPalindrome(string) {
// trovare la lunghezza della stringa.
    const lunghezza = string.length;

// creare un ciclo for attraverso metà stringa
    for (let index = 0; index < lunghezza / 2; index++) {

// controllare se la prima lettera è uguale all'ultima lettera e così' via
        if (string[index] !== string[lunghezza - 1 - index]) {
            return 'Questo non è un parindromo';
        }
    }
    return 'Questo è un palindromo';
}

// Fare un prompt per chiedere all'utente una parola
const string = prompt('Inserisci una parola per scoprire se è palindroma');

// assegnare la funziona ad una variabile
const palindrome = isPalindrome(string);

console.log(palindrome);























//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
//Dichiariamo chi ha vinto.