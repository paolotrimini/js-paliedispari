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


// FUNZIONE - genera numero random

function computerNumber(min, max) {
    var minRnd = min;
    var maxRnd = max - minRnd + 1;
    var rnd1 = Math.floor(Math.random() * maxRnd) + minRnd;
    return rnd1;
}
//console.log(computerNumber(1, 5));


// FUNZIONE - è pari o dispari?

function isPair() {
    return finalUser % 2 === 0;
}
console.log(isPair());



// scelta "numero" e "pari - dispari" User

var userNumber = 2;
var userChoice = true;


var finalUser = userNumber + computerNumber(1,5);
console.log('somma User: ' + finalUser);

// numero Rnd Computer

var finalComputer = computerNumber(1,5);
console.log('numero rnd Computer: ' + finalComputer);


// vince User o Computer?

if ((finalUser > finalComputer) && userChoice === isPair(userChoice) ) {

    console.log('vince USER con PARI: ' + finalUser);

}else if ((finalUser > finalComputer) && userChoice !== isPair(userChoice) ) {

    console.log('vince USER con DISPARI: ' + finalUser);

}else if ((finalUser < finalComputer) && userChoice === isPair(userChoice) ) {

    console.log('vince COMPUTER con PARI: ' + finalComputer);

}else if ((finalUser < finalComputer) && userChoice !== isPair(userChoice) ) {

    console.log('vince COMPUTER con DISPARI: ' + finalComputer);
} else {
    console.log('parità!')
}
