// Lista di email degli invitati
const listaInvitati = [

    "mario.brighella@example.com",
    "anna.flavi@example.com",
    "luigi.sarto@example.com",
    "paola.novari@example.com",
    "giovanni.crippa@example.com"

];

// Funzione per chiedere l'email all'utente e verificare se è nella lista
function controllaAccesso() {

    // Chiedi all'utente di inserire la sua email
    const emailUtente = prompt("Inserisci la tua email:");

    // Verifico per sapere se l'email si trovi nella lista
    let emailTrovata = false;

    // Ciclo per controllare se l'email è nella lista
    for (let i = 0; i < listaInvitati.length; i++) {

        if (emailUtente === listaInvitati[i]) {
            // assegno un valore true alla variabile emailTrovata
            emailTrovata = true;

            // uso break per uscire da for, se la mail viene trovata il programma cessa subito il ciclo e non attua altri confonti tra emailUtente e listaInvitati
            break;

        }

    }

    // Mostra un messaggio a seconda del risultato utilizzando alert come disclaimer
    if (emailTrovata) {

        alert("Benvenuto alla festa!");

    } else {

        alert("Mi dispiace, la tua email non è nella lista degli invitati.");

    }

}

// Output verifica mailUtente
controllaAccesso();
