// Funzione per generare un numero casuale da 1 a 6
function lanciaDado() {

    // Math.random restituisce un numero pseudocasuale di tipo double
    // Math.floor è un metodo in Java che restituisce il più grande intero (double in questo caso)
    return Math.floor(Math.random() * 6) + 1;

}

// Simula il lancio del dado per il giocatore e per il computer
let dadoGiocatore = lanciaDado();
let dadoComputer = lanciaDado();

// Visualizza i risultati
console.log("Giocatore ha ottenuto: " + dadoGiocatore);
console.log("Computer ha ottenuto: " + dadoComputer);

// Determina il vincitore 
if (dadoGiocatore > dadoComputer) {

    console.log("Il Giocatore vince!");

} else if (dadoGiocatore < dadoComputer) {

    console.log("Il Computer vince!");

} else {

    console.log("È un pareggio!");

}