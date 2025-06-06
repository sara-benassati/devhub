
---

## 1. Cos'è JavaScript e a cosa serve?

Pensa a una pagina web come a una casa:
* **HTML** è la **struttura**: i muri, il tetto, le stanze.
* **CSS** è l'**arredamento**: i colori delle pareti, lo stile dei mobili.
* **JavaScript (JS)** è l'**impianto elettrico e idraulico**: rende la casa interattiva. Ti permette di accendere le luci (es. cliccare un bottone), aprire le finestre (es. mostrare un menu a tendina) o far partire la musica (es. avviare un video).

In breve, **JavaScript è un linguaggio di programmazione che rende le pagine web dinamiche e interattive**.

---

## 2. Come si inserisce JS in una pagina HTML?

Ci sono due modi principali:

* **Interno (o "inline"):** Scrivi il codice direttamente dentro il file HTML, tra i tag `<script>` e `</script>`. Ideale per piccoli script.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>La mia pagina</title>
    </head>
    <body>
        <h1>Ciao Mondo!</h1>
        <script>
            // Questo è un commento in JS
            alert('Benvenuto nella mia pagina!'); // Fa apparire un pop-up
        </script>
    </body>
    </html>
    ```

* **Esterno:** Crei un file separato con estensione `.js` (es. `mio_script.js`) e lo colleghi alla tua pagina HTML. Questa è la pratica migliore perché mantiene il codice ordinato e riutilizzabile.

    **File HTML (`index.html`):**
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>La mia pagina</title>
    </head>
    <body>
        <h1>Ciao Mondo Esterno!</h1>
        <script src="mio_script.js"></script> </body>
    </html>
    ```

    **File JavaScript (`mio_script.js`):**
    ```javascript
    alert('Benvenuto dal file esterno!');
    ```

---

## 3. Le Variabili: Scatole per i Dati 📦

Una variabile è come una scatola con un'etichetta. Dentro ci puoi mettere dei dati (numeri, testo, ecc.) per usarli in seguito.

In JavaScript, si dichiarano principalmente in tre modi:

* `let`: Per valori che **possono cambiare**.
* `const`: Per valori **costanti**, che non cambieranno mai dopo la prima assegnazione.
* `var`: Un modo più vecchio, oggi si preferisce usare `let`.

**Esempio:**

```javascript
let nomeUtente = "Mario"; // Una scatola 'nomeUtente' con dentro del testo
const annoDiNascita = 1995; // Una scatola 'annoDiNascita' che non può più essere cambiata

console.log(nomeUtente); // Stampa "Mario" nella console del browser
console.log(annoDiNascita); // Stampa 1995

nomeUtente = "Luigi"; // Posso cambiare il valore di 'nomeUtente'
console.log(nomeUtente); // Stampa "Luigi"

// Se provassi a fare: annoDiNascita = 2000; -> riceveresti un errore!
```
> **Consiglio:** Usa `const` di default e passa a `let` solo se sai che il valore dovrà cambiare.

---

## 4. Tipi di Dati: Cosa puoi mettere nelle scatole?

JavaScript gestisce diversi tipi di "mattoncini" (dati):

| Tipo di Dato | Descrizione | Esempio |
| :--- | :--- | :--- |
| **String** | Testo, sempre tra virgolette o apici. | `"Ciao"`, `'JavaScript'` |
| **Number** | Numeri, sia interi che con la virgola. | `100`, `3.14` |
| **Boolean** | Valori di verità: solo `true` o `false`. | `true`, `false` |
| **Array** | Una lista ordinata di valori, tra parentesi quadre. | `[ "mela", "banana", "arancia" ]` |
| **Object** | Una collezione di dati correlati, in formato `chiave: valore`, tra parentesi graffe. | `{ nome: "Anna", cognome: "Rossi", eta: 30 }` |
| **Undefined** | Una variabile a cui non è stato assegnato un valore. | `let x;` (x è `undefined`) |
| **Null** | Rappresenta intenzionalmente l'assenza di un valore. | `let y = null;` |

**Esempio pratico:**

```javascript
let nome = "Giacomo";              // String
let eta = 28;                       // Number
let haLaPatente = true;            // Boolean
let hobby = ["calcio", "cinema"];   // Array
let persona = {                     // Object
    nome: "Giacomo",
    eta: 28
};

console.log(typeof nome);         // Stampa "string"
console.log(hobby[0]);            // Stampa "calcio" (il primo elemento dell'array)
console.log(persona.nome);        // Stampa "Giacomo" (il valore della chiave 'nome' nell'oggetto)
```

---

## 5. Operatori: Come manipolare i dati

Gli operatori ti permettono di eseguire operazioni sulle variabili.

* **Aritmetici:** `+`, `-`, `*`, `/`, `%` (modulo, cioè il resto della divisione)
* **Di Assegnazione:** `=`, `+=`, `-=` (es. `x += 5` è una scorciatoia per `x = x + 5`)
* **Di Confronto:** `==` (uguale in valore), `===` (uguale in valore E tipo), `!=`, `!==`, `>`, `<`
* **Logici:** `&&` (AND), `||` (OR), `!` (NOT)

**Esempio:**

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15

let x = "5";
console.log(a == x);  // true, perché il valore è lo stesso (confronto "largo")
console.log(a === x); // false, perché il tipo è diverso (number vs string) - **Usa sempre questo!**

let etaMinima = 18;
let etaUtente = 20;

if (etaUtente >= etaMinima && haLaPatente) {
    console.log("Puoi guidare");
} else {
    console.log("Non puoi guidare");
}
```

---

## 6. Strutture di Controllo: Guidare il flusso del codice

Queste strutture decidono quale pezzo di codice eseguire e quando.

### `if / else if / else` (Se questo... altrimenti se... altrimenti)
Esegue un blocco di codice solo se una condizione è vera.

```javascript
let voto = 25;

if (voto >= 28) {
    console.log("Ottimo!");
} else if (voto >= 18) {
    console.log("Sufficiente.");
} else {
    console.log("Insufficiente.");
}
```

### Cicli `for` e `while` (Ripeti finché...)
Servono per ripetere un'azione più volte.

**Ciclo `for`**: ideale quando sai quante volte devi ripetere.

```javascript
// Stampa i numeri da 0 a 4
for (let i = 0; i < 5; i++) {
    console.log("Il numero è: " + i);
}

// Usato con un array
const frutti = ["mela", "pera", "banana"];
for (let i = 0; i < frutti.length; i++) {
    console.log(frutti[i]);
}
```

**Ciclo `while`**: ideale quando la ripetizione dipende da una condizione che può cambiare.

```javascript
let i = 0;
while (i < 5) {
    console.log("Il numero (da while) è: " + i);
    i++;
}
```

---

## 7. Le Funzioni: Blocchi di Codice Riutilizzabili ⚙️

Una funzione è un blocco di codice progettato per eseguire un compito specifico. La definisci una volta e la puoi "chiamare" (eseguire) quante volte vuoi.

**Esempio:**

```javascript
// Definizione della funzione
function saluta(nome) {
    return "Ciao, " + nome + "!";
}

// Chiamata della funzione
let salutoPerMarco = saluta("Marco");
let salutoPerAnna = saluta("Anna");

console.log(salutoPerMarco); // Stampa "Ciao, Marco!"
console.log(salutoPerAnna);  // Stampa "Ciao, Anna!"

// Funzione che calcola l'area di un rettangolo
function calcolaArea(base, altezza) {
    const area = base * altezza;
    return area;
}

let areaTavolo = calcolaArea(10, 5);
console.log("L'area è: " + areaTavolo); // Stampa "L'area è: 50"
```

---

## 8. Il DOM: Interagire con la Pagina Web 🌐

Il **DOM (Document Object Model)** è la rappresentazione in JavaScript della tua pagina HTML. JavaScript può usare il DOM per "vedere" e "modificare" qualsiasi elemento HTML.

**Come funziona?**

1.  **Selezionare un elemento:** Trovi l'elemento che vuoi modificare.
2.  **Manipolare l'elemento:** Cambi il suo contenuto, stile, attributi, etc.
3.  **Gestire gli eventi:** Reagisci alle azioni dell'utente (click, mouse sopra, etc.).

**Esempio completo:**

**File HTML (`index.html`):**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Interazione con il DOM</title>
</head>
<body>
    <h1 id="titoloPrincipale">Titolo Iniziale</h1>
    <button id="mioBottone">Cliccami!</button>

    <script src="app.js"></script>
</body>
</html>
```

**File JavaScript (`app.js`):**
```javascript
// 1. Selezionare gli elementi
const titolo = document.getElementById('titoloPrincipale');
const bottone = document.getElementById('mioBottone');

// 3. Gestire l'evento 'click' sul bottone
bottone.addEventListener('click', function() {
    // 2. Manipolare l'elemento
    titolo.textContent = "Titolo Cambiato con JS!";
    titolo.style.color = "blue";
});
```
Perfetto, proseguiamo il nostro viaggio in JavaScript. Se fino ad ora abbiamo visto i mattoncini fondamentali, adesso impariamo a costruire meccanismi più complessi e a gestire le operazioni che richiedono tempo, come scaricare dati da internet.

Prego, accomodatevi per la seconda parte della nostra lezione.

---

## 9. I Cicli: Padroneggiare la Ripetizione 🔁

Abbiamo già introdotto i cicli `for` e `while`, che sono i cavalli di battaglia della programmazione. Tuttavia, JavaScript ci offre strumenti più moderni ed eleganti per lavorare, specialmente con Array e Oggetti.

### Il ciclo `forEach` (per ciascuno)

Quando avete un array e volete semplicemente eseguire un'azione **per ogni suo elemento**, senza dover gestire indici (`i`) o condizioni di uscita, `forEach` è il vostro migliore amico. È più leggibile e meno propenso a errori.

Immaginate di avere una lista di studenti e di voler stampare il nome di ciascuno.

**Con il ciclo `for` classico:**
```javascript
const studenti = ["Alice", "Bob", "Charlie", "Diana"];

console.log("--- Usando il ciclo for classico ---");
for (let i = 0; i < studenti.length; i++) {
    console.log(studenti[i]);
}
```

**Con `forEach`:**
```javascript
const studenti = ["Alice", "Bob", "Charlie", "Diana"];

console.log("\n--- Usando forEach (più elegante!) ---");
studenti.forEach(function(studente) {
    console.log(studente);
});
```
Vedete la differenza? Passiamo a `forEach` una funzione che verrà eseguita per ogni `studente` dell'array. È come dire: "Per ogni studente nella lista, fai questo".

### Il ciclo `for...of` (per ogni... di)

Simile a `forEach`, ma ancora più conciso, `for...of` è perfetto per iterare sui valori di un "iterabile" (come un Array, una Stringa, etc.).

```javascript
const punteggi = [100, 98, 75, 88];
let somma = 0;

for (const punteggio of punteggi) {
    somma += punteggio; // Aggiunge ogni punteggio alla somma
}

console.log("La somma totale dei punteggi è: " + somma); // Stampa 361

const miaParola = "Ciao";
for (const lettera of miaParola) {
    console.log(lettera); // Stampa C, i, a, o
}
```

### Il ciclo `for...in` (per ogni... in)

**Attenzione:** Questo ciclo è specifico per iterare sulle **proprietà (le chiavi) di un oggetto**. Non usatelo per gli Array, perché potrebbe portare a comportamenti inaspettati.

Immaginate di avere un oggetto che descrive un'automobile e di voler elencare tutte le sue caratteristiche.

```javascript
const automobile = {
    marca: "Fiat",
    modello: "500",
    anno: 2023,
    colore: "Rosso"
};

for (const chiave in automobile) {
    // 'chiave' conterrà "marca", poi "modello", poi "anno", etc.
    const valore = automobile[chiave]; // Usiamo la chiave per accedere al valore
    console.log(`${chiave}: ${valore}`);
}
```
**Output:**
```
marca: Fiat
modello: 500
anno: 2023
colore: Rosso
```

---

## 10. L'Asincronia: Gestire il Tempo in JavaScript ⏳

Questo è uno degli argomenti più importanti e potenti di JavaScript.

**Il Problema: JavaScript è "Single-Threaded"**

Immaginate JavaScript come un cuoco che può fare **una sola cosa alla volta** (ha un solo "thread"). Se deve tagliare le verdure, non può contemporaneamente controllare la pentola sul fuoco. Se un'operazione richiede molto tempo (es. scaricare un video da 1GB), bloccherebbe tutto il resto. L'intera pagina web si "freezerebbe": l'utente non potrebbe cliccare bottoni, scorrere la pagina, nulla. Sarebbe un'esperienza terribile.

**La Soluzione: Operazioni Asincrone**

JavaScript risolve questo problema in modo geniale. Quando deve avviare un'operazione lunga (chiamata "asincrona"), si comporta come un manager efficiente:
1.  **Delega il compito:** Dice a un "assistente" (il browser, in questo caso) di occuparsi dell'operazione lunga (es. "scarica questo file").
2.  **Continua a lavorare:** Mentre l'assistente è impegnato, JavaScript continua a eseguire il resto del codice, mantenendo la pagina reattiva.
3.  **Viene notificato alla fine:** Quando l'assistente ha finito, avvisa JavaScript, che a quel punto può eseguire una funzione per gestire il risultato (es. "il file è pronto, ora mostralo").

Vediamo come si è evoluto il modo di gestire questo meccanismo.

### a) Le Callback (Il Metodo Classico)

Una "callback" (richiamata) è una funzione che viene passata come argomento a un'altra funzione, con l'accordo che verrà eseguita in un secondo momento, una volta completato un certo compito.

**Esempio:** simuliamo un download di dati.

```javascript
console.log("1. Inizio a scaricare i dati dell'utente...");

// La funzione 'scaricaDati' accetta una callback come secondo argomento
function scaricaDati(url, callback) {
    console.log(`2. Richiesta inviata a ${url}...`);
    // Simuliamo un ritardo di 2 secondi (2000 millisecondi)
    setTimeout(function() {
        const dati = { nome: "Mario Rossi", id: 123 };
        console.log("3. Dati ricevuti!");
        callback(dati); // Eseguiamo la callback, passando i dati ottenuti
    }, 2000);
}

// Chiamiamo la funzione e le passiamo la nostra callback
scaricaDati("https://api.esempio.com/utente", function(utente) {
    console.log(`4. La funzione di callback è stata eseguita! Nome utente: ${utente.nome}`);
});

console.log("5. Nel frattempo, io continuo a eseguire altro codice!");
```

**Cosa vedrete nella console (e quando):**
1.  `1. Inizio a scaricare i dati dell'utente...` (subito)
2.  `2. Richiesta inviata a https://api.esempio.com/utente...` (subito)
3.  `5. Nel frattempo, io continuo a eseguire altro codice!` (subito)
4.  *(...dopo 2 secondi...)*
5.  `3. Dati ricevuti!`
6.  `4. La funzione di callback è stata eseguita! Nome utente: Mario Rossi`

Il problema delle callback è che, quando le operazioni asincrone da concatenare sono tante, si finisce in quello che viene chiamato **"Callback Hell"** (l'inferno delle callback), una piramide di funzioni annidate difficile da leggere e mantenere.

### b) Le Promises (La Promessa di un Risultato)

Una `Promise` è un oggetto che rappresenta il risultato (eventuale) di un'operazione asincrona. È, letteralmente, una "promessa" che in futuro avrà un valore.

Una Promise può trovarsi in tre stati:
* **Pending:** Lo stato iniziale, l'operazione non è ancora completata.
* **Fulfilled (Risolta):** L'operazione è terminata con successo.
* **Rejected (Respinta):** L'operazione è fallita.

**Esempio:** Riscriviamo l'esempio precedente con una Promise.

```javascript
console.log("1. Inizio a scaricare i dati dell'utente...");

function scaricaDatiConPromise(url) {
    // La funzione ora restituisce una Promise
    return new Promise((resolve, reject) => {
        console.log(`2. Richiesta inviata a ${url}...`);
        setTimeout(() => {
            const ciSonoErrori = false; // Cambia in 'true' per simulare un errore
            if (ciSonoErrori) {
                reject("Errore: Impossibile scaricare i dati!"); // La promessa è respinta
            } else {
                const dati = { nome: "Luigi Verdi", id: 456 };
                console.log("3. Dati ricevuti!");
                resolve(dati); // La promessa è risolta con successo
            }
        }, 2000);
    });
}

scaricaDatiConPromise("https://api.esempio.com/utente")
    .then(utente => {
        // Il blocco .then() viene eseguito se la promessa è RISOLTA
        console.log(`4. [THEN] Nome utente: ${utente.nome}`);
    })
    .catch(errore => {
        // Il blocco .catch() viene eseguito se la promessa è RESPINTA
        console.error(`4. [CATCH] Si è verificato un errore: ${errore}`);
    });

console.log("5. Nel frattempo, io continuo a eseguire altro codice!");
```
La struttura `.then().catch()` è molto più pulita e leggibile del Callback Hell.

### c) Async/Await (Lo Zucchero Sintattico)

`async/await` è una sintassi moderna costruita sopra le Promises che ci permette di scrivere codice asincrono come se fosse sincrono, rendendolo incredibilmente intuitivo.

* `async`: va messo prima della dichiarazione di una funzione per indicare che quella funzione gestirà operazioni asincrone. Una funzione `async` restituisce sempre, implicitamente, una Promise.
* `await`: può essere usato solo all'interno di una funzione `async`. Mette in "pausa" l'esecuzione della funzione fino a quando la Promise non è risolta o respinta, e poi restituisce il suo risultato.

**Esempio finale:** il modo più moderno e leggibile di tutti.

```javascript
// Usiamo la stessa funzione 'scaricaDatiConPromise' dell'esempio precedente

// Creiamo una funzione 'async' per poter usare 'await'
async function gestisciDatiUtente() {
    console.log("1. La funzione gestisciDatiUtente è partita.");
    try {
        // 'await' mette in pausa QUI fino a che la Promise non si risolve
        console.log("2. In attesa dei dati...");
        const utente = await scaricaDatiConPromise("https://api.esempio.com/utente");

        // Questa linea viene eseguita solo DOPO che l'attesa è finita
        console.log(`3. [AWAIT] Dati finalmente arrivati! Nome utente: ${utente.nome}`);

    } catch (errore) {
        // Se la Promise viene respinta, l'errore viene "catturato" qui
        console.error(`3. [AWAIT] Si è verificato un errore: ${errore}`);
    }
    console.log("4. La funzione gestisciDatiUtente è terminata.");
}

gestisciDatiUtente();
console.log("5. Codice eseguito subito dopo aver chiamato la funzione async.");
```

**Cosa vedrete nella console:**
1.  `1. La funzione gestisciDatiUtente è partita.` (subito)
2.  `2. In attesa dei dati...` (subito)
3.  `2. Richiesta inviata a https://api.esempio.com/utente...` (dalla Promise, subito)
4.  `5. Codice eseguito subito dopo aver chiamato la funzione async.` (subito!)
5.  *(...dopo 2 secondi...)*
6.  `3. Dati ricevuti!` (dalla Promise)
7.  `3. [AWAIT] Dati finalmente arrivati! Nome utente: Luigi Verdi`
8.  `4. La funzione gestisciDatiUtente è terminata.`

Come vedete, `async/await` non blocca il programma principale (`console.log` numero 5 viene eseguito subito), ma rende la sequenza di operazioni *all'interno* della funzione `async` facile da leggere come una ricetta di cucina.



