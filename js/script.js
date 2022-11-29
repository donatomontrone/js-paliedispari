
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
            return false;
        }
    }
    return true;
}

// Fare un prompt per chiedere all'utente una parola
const string = prompt('Inserisci una parola per scoprire se è palindroma');

//Dichiaro una variabile e le assegno la funzione
const palindrome = isPalindrome(string);
// Se la parola è palindroma (true) altrimenti (false)
    if (palindrome) {
        alert('Questo è un palindromo');
        console.warn('Questo è un palindromo');
    } else {
        alert('Questo non è un palindromo');
        console.error('Questo non è un palindromo');
    }
    


//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
//Dichiariamo chi ha vinto.

//Funzione per un numero randomico.
function getRandomNumber(numMax, numMin) {
    const randomNumber = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return randomNumber;
}

// Funzione che somma due numeri
function getSum(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

//Funzione per stabilire se un numero è pari
function isEven(number) {
    if (number % 2 === 0) {
        return 'pari';
    }
    return 'dispari';
}

let oddOrEven;
do {
    oddOrEven = prompt('Scegli: pari o dispari?');
} while ((oddOrEven !== 'pari') && (oddOrEven !== 'dispari'));

let userNumber;

do {
    userNumber = parseInt(prompt('Inserisci un numero tra 1 e 5'));
} while (((Number.isNaN(userNumber) || userNumber <1 || userNumber > 5)));

const pcNumber = getRandomNumber(1,5);

const userPcSum = getSum(userNumber, pcNumber);

if (isEven(userPcSum) === oddOrEven || !isEven(userPcSum) === oddOrEven) {
    console.log('Compliementi hai vinto!');
} else {
    console.log('Mi dispiace hai perso!');
}

console.warn (`Tu hai scelto -> ${oddOrEven}`);

console.log(`${userNumber} <- questo è il numero che hai inserito`);

console.log(`${pcNumber} <- questo è il numero generato casualmente per il computer`);

console.log(`${userPcSum} <- Questa è la somma dei numeri`)




