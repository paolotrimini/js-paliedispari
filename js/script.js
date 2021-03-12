// Esercizio 1 - Scrivere una funzione per capire se la parola è palindroma

    var myWord = prompt('inserisci una parola: ');

     // FUNZIONE - calcolo parola palindroma

    function isPali(myStr) {
        return myStr === myStr.split('').reverse().join('');
    }

    // la parola inserita è palindroma?

    if (isPali(myWord)) {

        console.log('la parola è palindroma');

    } else {

        console.log('la parola NON è palindroma');
    }




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


// utente sceglie numero pari

var userNumber = 3;
var pcNumber = parseInt(prompt('inserire n° random del computer'));



// creazione numero random

function getRnd (min, max) {
    var minRnd = min;
    var maxRnd = max - minRnd + 1;
    var rnd1 = Math.floor(Math.random() * maxRnd) + minRnd;
    return rnd1;
}

console.log(getRnd(min, max));

