// SELEZIONARE IL TESTO 'H2' ED ASSEGNARLO AD UNA VARIABILE
let testo = document.querySelector('h2');
const stringa_testo = testo.textContent;

// SUDDIVISIONE DEL TESTO
const lettere = stringa_testo.split("");
console.log(lettere)

// PULIZIA DI TESTO PER NON AVERE UN DUPLICATO ED UN ERRORE
testo.textContent = "";

// CREAZIONE SPAN-lettera E ASSEGNAZIONE DI COLORI RANDOM DA QUELLI PREDEFINITI
let contenuto = '';

for (let i = 0; i < lettere.length; i++) {
    contenuto += lettere[i] === ' ' ? '&nbsp;' : `<span>${lettere[i]}</span>`;
}

testo.innerHTML = contenuto;

// TIMER CHE ESEGUE LA FUNZIONE 'ONTICK' OGNI 50 MILLISECONDI
let char = 0;
let timer = setInterval(onTick, 50);

// *** GESTIONE ANIMAZIONE

// COMPARSA LETTERE
function onTick() {
    const spans = testo.querySelectorAll('span');
    if (char < spans.length) {        
        const span = spans[char];
        span.classList.add('fade');
        char++;
    } else {
        complete();
    }
}

// ANIMAZIONE COMPLETATA
function complete() {
    clearInterval(timer);
    timer = null;
}