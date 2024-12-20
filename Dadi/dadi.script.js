// Funzione per generare un numero casuale da 1 a 6
function lanciaDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Simula il lancio del dado per il giocatore e per il computer
let dadoGiocatore = lanciaDado();
let dadoComputer = lanciaDado();
