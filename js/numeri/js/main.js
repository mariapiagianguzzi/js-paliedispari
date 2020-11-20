/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto */




function isEven(number) {
    if(number % 2 === 0){
        return true;
    }
}

var numero = Number (prompt("Scrivi un numero"));

if(isEven(numero)){
    console.log(Pari);
}else{
    console.log(Dispari);
}
