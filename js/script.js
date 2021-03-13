// Esercizio 1 - Scrivere una funzione per capire se la parola è palindroma

//var myWord = prompt('inserisci una parola: ');
//
// // FUNZIONE - calcolo parola palindroma
//
//function isPali(myStr) {
//    return myStr === myStr.split('').reverse().join('');
//}
//
//// la parola inserita è palindroma?
//
//if (isPali(myWord)) {
//
//    console.log('la parola è palindroma');
//
//} else {
//
//    console.log('la parola NON è palindroma');
//}




// invertire elementi di un array (esempio)

// var b = ['one', 'two', 'three'];
// b.reverse();
// console.log(b); // ['three', 'two', 'one']

// concatenazione array (esempio)

// var a = ['Wind', 'Rain', 'Fire'];
// a.join();      // 'Wind,Rain,Fire'


// Esercizio 2 - L'utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i 2 numeri e dichiariamo chi ha vinto.



// Utente sceglie pari o dispari e un numero da 1 a 5.

var userChoice = 'Pari';
var userNumber = parseInt(prompt('scegliere un numero: '));

console.log('Scelta utente: ' + userChoice);
console.log('Numero utente: ' + userNumber);

// Numero rnd computer

function getRnd(min, max) {
    var minRnd = min;
    var maxRnd= max - minRnd + 1;

    var rnd = Math.floor(Math.random() * maxRnd) +minRnd;

    return rnd;
}
var res = getRnd(1, 5);
console.log('Numero rnd computer:' + res);

// sommo numero inserito da Utente con numero rnd del Computer

var sum = userNumber + res;
console.log('somma ottenuta: ' + sum)


if(sum % 2 === 0) {
    console.log('Numero PARI , ha vinto l\'Utente!');
} else {
    console.log('Numero DISPARI, ha vinto il Computer!');
}
