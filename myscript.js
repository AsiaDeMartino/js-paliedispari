//Palidroma
    //Chiedere all’utente di inserire una parola 
const input = prompt("Dimmi una parola e io controllerò se è palindroma");

    //Creare una funzione per capire se la parola inserita è palindroma
const parola = input.split('');
console.log(parola);

const parolaInversa = [];
let j = 0;

for (let i = parola.length - 1; i >= 0; i--) {
    parolaInversa[j] = parola[i];
    j++;
}

console.log(parolaInversa);

if (parola == parolaInversa) {
    alert(`la parola ${input} è palindroma`);
} else {
    alert(`la parola ${input} non è palindroma`);
}

//Pari e Dispari
    //L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    //Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
    //Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
    //Dichiariamo chi ha vinto.