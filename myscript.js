//Palidroma
    //Chiedere all’utente di inserire una parola 
const input = prompt("Dimmi una parola e io controllerò se è palindroma");

    //Creare una funzione per capire se la parola inserita è palindroma
function palindromo (p1) {

    const parola = p1.split('');
    console.log(parola);

    let parolaInversa = ('');

    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInversa += parola[i];
    }

    console.log(parolaInversa);

    let controllo = false;

    if (p1 == parolaInversa) {
        controllo = true;
    }

    return controllo;
}

check = palindromo(input)

if (check == true) {
    alert(`la parola ${input} è palindroma`);
} else {
    alert(`la parola ${input} non è palindroma`);
}

//Pari e Dispari
    //L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    //Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
    //Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
    //Dichiariamo chi ha vinto.