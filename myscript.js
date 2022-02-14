// //Palidroma
//     //Chiedere all’utente di inserire una parola 
// const input = prompt("Dimmi una parola e io controllerò se è palindroma");

//     //Creare una funzione per capire se la parola inserita è palindroma
// function palindromo (p1) {

//     const parola = p1.split('');
//     console.log(parola);

//     let parolaInversa = ('');

//     for (let i = parola.length - 1; i >= 0; i--) {
//         parolaInversa += parola[i];
//     }

//     console.log(parolaInversa);

//     let controllo = false;

//     if (p1 == parolaInversa) {
//         controllo = true;
//     }

//     return controllo;
// }

// check = palindromo(input)

// if (check == true) {
//     alert(`la parola ${input} è palindroma`);
// } else {
//     alert(`la parola ${input} non è palindroma`);
// }

//Pari e Dispari
    //L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const scelta = prompt("scegli pari o dispari");

let numeroUtente = 0;

do {
    numeroUtente = parseInt(prompt("scegli un numero tra 1 e 5"));
} while (isNaN(numeroUtente) || (numeroUtente < 1) || (numeroUtente > 5))
    
     //Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numeroComputer = getRandomIntInclusive(1,5);

console.log(numeroComputer,numeroUtente);

    //Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function somma(n1, n2) {
    let n3 = n1 + n2;
    
    let controllo = false;

    if (n3 % 2 == 0) {
        controllo = true;
    } 

    return controllo;
}

let pari = somma(numeroComputer, numeroUtente);

    //Dichiariamo chi ha vinto.
if ( pari == true && scelta == "pari" ) {
    alert(`è uscito pari, hai vinto`);
} else if (pari == true && scelta == "dispari" ) {
    alert(`è uscito pari, hai perso`);
} else if (pari == false && scelta == "dispari") {
    alert(`è uscito dispari, hai vinto`);
} else if (pari == false && scelta == "pari" ) {
    alert(`è uscito dispari, hai perso`);
} else {
    alert("devi scegliere pari o dispari!");
}

