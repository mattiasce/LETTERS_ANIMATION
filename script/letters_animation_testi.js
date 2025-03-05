// SELEZIONARE TUTTI GLI ELEMENTI 'H2'
let testi = document.querySelectorAll('h2');

// FUNZIONE PER L'ANIMAZIONE SU OGNI 'H2'
testi.forEach(testo => {
    const stringa_testo = testo.textContent;

    // SUDDIVISIONE DEL TESTO
    const lettere = stringa_testo.split("");
    console.log(lettere);

    // PULIZIA DI TESTO PER NON AVERE UN DUPLICATO ED UN ERRORE
    testo.textContent = "";

    // CREAZIONE SPAN-LETTERAs E ASSEGNAZIONE DI COLORI RANDOM DA QUELLI PREDEFINITI
    let contenuto = '';

    for (let i = 0; i < lettere.length; i++) {
        contenuto += lettere[i] === ' ' ? `&nbsp;` : `<span>${lettere[i]}</span>`;
    }

    testo.innerHTML = contenuto;

    // INIZIALIZZA IL CONTATORE DELLE LETTERE E IL TIMER
    let char = 0;
    
    // FUNZIONE PER ESEGUIRE L'ANIMAZIONE LETTERA PER LETTERA
    const timer = setInterval(() => {
        const spans = testo.querySelectorAll('span');
        if (char < spans.length) {
            const span = spans[char];
            span.classList.add('fade');
            char++;
        } else {
            clearInterval(timer);
        }
    }, 50);
});
