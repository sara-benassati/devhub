

---

## 13. Il Web Server: La Cucina di Internet 👨‍🍳

Se finora abbiamo parlato degli ingredienti e delle ricette (il nostro codice JavaScript), il web server è la cucina e lo chef messi insieme. È un programma che "ascolta" le richieste provenienti da internet e invia delle risposte.

**L'analogia più efficace è quella del ristorante:**

* **Il tuo Browser (il Client):** È il cliente seduto al tavolo.
* **Tu che digiti `www.google.com`:** È il cliente che fa un'ordinazione al cameriere.
* **La Richiesta (Request):** L'ordinazione specifica ("Vorrei la pagina principale"). Questa richiesta viaggia attraverso internet.
* **Il Web Server di Google:** È la cucina del ristorante. Riceve l'ordinazione.
* **L'Elaborazione:** Lo chef (il programma sul server) prepara il piatto. Cerca nel frigo (il database), assembla gli ingredienti (crea la pagina HTML), la impiatta.
* **La Risposta (Response):** Il piatto pronto (la pagina HTML, con CSS, JS, immagini) viene consegnato dal cameriere.
* **Il tuo Browser:** Riceve il piatto e te lo mostra.

Un **web server** è quindi un software (e a volte anche l'hardware su cui gira) le cui responsabilità principali sono:
1.  **Mettersi in ascolto:** Rimanere costantemente in attesa su un indirizzo specifico (un indirizzo IP e una "porta", come un molo in un porto).
2.  **Accettare richieste:** Ricevere le "ordinazioni" dai client, che seguono un protocollo chiamato **HTTP** (HyperText Transfer Protocol).
3.  **Processare la richiesta:** Capire cosa vuole il client (vuole la homepage? Vuole inviare i dati di un form? Vuole un'immagine?).
4.  **Inviare una risposta:** Restituire la risorsa richiesta (un file HTML, dati in formato JSON, un'immagine) insieme a un codice di stato (come `200 OK` se tutto è andato bene, o `404 Not Found` se la risorsa non esiste).

### Statico vs. Dinamico

Esistono due tipi principali di "cucine":

* **Web Server Statico:** Immaginatelo come un distributore automatico. Serve i file così come sono salvati sul disco. Se un client chiede `miapagina.html`, il server trova quel file e lo invia. Non c'è elaborazione, non c'è personalizzazione. È veloce e semplice.
* **Web Server Dinamico:** Questa è la vera cucina con lo chef. Può generare contenuti sul momento. Ad esempio, quando visiti Facebook, la pagina non esiste come singolo file `facebook.html`. Il server la costruisce dinamicamente per te: prende il template della pagina, recupera i tuoi dati dal database (nome, amici, post recenti) e assembla una pagina HTML personalizzata solo per te.

### E JavaScript in tutto questo?

Tradizionalmente, JavaScript era solo un linguaggio per il *client* (il browser). Ma grazie a **Node.js**, possiamo usare JavaScript anche per costruire il **server** (la cucina)!

Node.js ci fornisce tutti gli strumenti per creare web server potentissimi, sia statici che dinamici.

---

## 14. Creare un Web Server con Node.js

Basta teoria, mettiamoci ai fornelli. Costruiremo il nostro primo, semplicissimo web server usando solo gli strumenti che Node.js ci mette a disposizione, senza pacchetti esterni.

**Obiettivo:** Creare un server che, quando visitato, risponda con un semplice "Ciao Mondo!".

### Passaggio 1: Il Codice (usando il modulo `http` nativo)

Create un file chiamato `server.js`.

```javascript
// 1. Importiamo il modulo 'http', che è lo strumento base di Node.js per tutto ciò che riguarda il web.
const http = require('http');

// 2. Definiamo l'indirizzo (hostname) e la porta su cui il nostro server ascolterà.
// '127.0.0.1' (o localhost) è un indirizzo speciale che significa "questo computer".
const hostname = '127.0.0.1';
const port = 3000; // La porta 3000 è una scelta comune per lo sviluppo locale.

// 3. Creiamo il server. La funzione createServer accetta una "funzione chef"
// che verrà eseguita OGNI VOLTA che arriva una nuova richiesta.
const server = http.createServer((req, res) => {
    // req (request) contiene tutte le informazioni sull'ordinazione del cliente.
    // res (response) è il "piatto" che noi prepariamo e rispediamo indietro.

    console.log(`Richiesta ricevuta: ${req.url}`);

    // 4. Prepariamo l'intestazione della nostra risposta.
    // Diciamo al browser "Tutto OK" (codice 200) e che gli stiamo inviando del testo HTML.
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 5. Scriviamo il contenuto della nostra pagina e chiudiamo la connessione.
    // .end() invia la risposta.
    res.end('<h1>Ciao dal mio primo Web Server con Node.js!</h1>');
});

// 6. Avviamo il server e lo mettiamo in ascolto sulla porta e l'indirizzo definiti.
// Il secondo argomento è una funzione che viene eseguita una volta che il server è pronto.
server.listen(port, hostname, () => {
    console.log(`Server in esecuzione su http://${hostname}:${port}/`);
    console.log('Premi CTRL+C per spegnere il server.');
});
```

### Passaggio 2: Avviare la "Cucina"

Aprite il terminale nella cartella dove avete salvato `server.js` e digitate:

```bash
node server.js
```

Se tutto è corretto, vedrete il messaggio: `Server in esecuzione su http://127.0.0.1:3000/`. Il vostro server è ora attivo e in attesa di clienti!

### Passaggio 3: Visitare il Ristorante

Aprite il vostro browser (Chrome, Firefox, etc.) e andate all'indirizzo **`http://localhost:3000`**.

Voilà! Vedrete la vostra scritta. Nel terminale, noterete che è apparso il messaggio `Richiesta ricevuta: /`, a conferma che il server ha ricevuto e processato la vostra visita.

### La Fase Successiva: I Framework (Express.js)

Costruire un server con il solo modulo `http` è come cucinare usando solo un coltello e un fuoco da campo. Si può fare, ma è faticoso. Per applicazioni reali, si usano dei **framework**, che sono come una cucina professionale piena di attrezzi che semplificano enormemente il lavoro.

Il framework più popolare per Node.js è **Express.js**. Guardate come diventa più semplice e leggibile lo stesso server di prima:

**Stesso server, ma con Express.js:**

1.  Prima, installiamo express: `npm install express`
2.  Poi, scriviamo il codice in un file `server_express.js`:

```javascript
const express = require('express');
const app = express(); // Creiamo un'applicazione Express
const port = 3000;

// Con Express, gestire le richieste diventa molto più intuitivo.
// "Quando ricevi una richiesta GET per la pagina principale ('/'), fai questo:"
app.get('/', (req, res) => {
    res.send('<h1>Ciao dal mio server con Express.js!</h1>');
});

// Mettiamo il server in ascolto
app.listen(port, () => {
    console.log(`Server Express in esecuzione su http://localhost:${port}`);
});
```

Molto più conciso, vero? Express gestisce per noi gran parte della complessità.

### Riepilogo del Professore

* Un **Web Server** è un programma che ascolta richieste HTTP e invia risposte.
* **Node.js** permette di scrivere web server performanti usando JavaScript.
* Il modulo nativo **`http`** fornisce gli strumenti di base.
* I **Framework** come **Express.js** semplificano drasticamente lo sviluppo di web server complessi e sono lo standard nell'industria.

Assolutamente. Una lezione sui web server è incompleta se non si analizza l'altra metà della conversazione: **la richiesta**. Se il server è la cucina, la richiesta è l'ordinazione dettagliata del cliente.

Capire come è fatta una richiesta è fondamentale, perché il vostro server dovrà "leggerla" e interpretarla per sapere cosa fare.

-----

## 15\. Le Richieste HTTP: L'Ordinazione del Cliente 📝

Ogni volta che il vostro browser chiede qualcosa a un server, non si limita a dire "ehi, dammi quella pagina\!". Invia un messaggio formale, strutturato secondo le regole del protocollo **HTTP** (o **HTTPS**, la sua versione sicura). Questo messaggio è la **richiesta HTTP**.

Manteniamo la nostra analogia del ristorante. L'ordinazione del cliente non è solo il nome del piatto, ma include anche altre informazioni: "Vorrei la carbonara, ma senza pepe, come primo piatto, e da bere un bicchiere di vino rosso".

Una richiesta HTTP è composta da tre parti principali.

### 1\. La "Request Line" (La Sintesi dell'Ordine)

Questa è la prima riga, la più importante. Dice al server l'intenzione fondamentale della richiesta. Contiene tre elementi:

  * **Metodo HTTP (o Verbo):** L'azione che il client vuole compiere. I più comuni sono:

      * `GET`: **CHIEDE** una risorsa. È la richiesta più comune. Quando digiti un indirizzo nel browser, stai facendo una richiesta `GET`.
        > *Analogia: "Vorrei vedere il menu."*
      * `POST`: **INVIA** dati al server per **creare** una nuova risorsa. Usato tipicamente quando si compila un modulo di registrazione o si scrive un nuovo post su un social media.
        > *Analogia: "Vorrei ordinare questo piatto personalizzato (ti do io la ricetta)."*
      * `PUT`: **INVIA** dati per **sostituire** completamente una risorsa esistente. Usato per aggiornare un profilo utente, per esempio.
        > *Analogia: "Cambio la mia ordinazione: non più pasta, prendo il risotto."*
      * `DELETE`: **CANCELLA** una risorsa specifica.
        > *Analogia: "Per favore, annulli la mia ordinazione."*
      * `PATCH`: Simile a `PUT`, ma serve per un aggiornamento **parziale**. (Es. cambiare solo la foto del profilo, non tutto il profilo).

  * **URI (Uniform Resource Identifier) o Path:** La risorsa specifica che si desidera. È la parte dell'URL che viene dopo il nome del dominio. Esempi: `/`, `/chi-siamo`, `/utenti/123`.

    > *Analogia: Il nome esatto del piatto sul menu ("Spaghetti alla Carbonara").*

  * **Versione HTTP:** Solitamente `HTTP/1.1` o `HTTP/2`.

    > *Analogia: La "versione" della lingua parlata tra cliente e cameriere.*

**Esempio di Request Line:**
`GET /prodotti/scarpe?colore=blu HTTP/1.1`
(Azione: `GET`, Risorsa: `/prodotti/scarpe?colore=blu`, Versione: `HTTP/1.1`)

### 2\. Gli "Headers" (Il Contesto e le Preferenze)

Gli headers sono una serie di coppie `chiave: valore` che forniscono informazioni aggiuntive e contesto sulla richiesta. Sono come le preferenze e le informazioni che il cliente dà al cameriere.

  * `Host: www.esempio.com`: A quale server ci si sta rivolgendo. Fondamentale.
  * `Content-Type: application/json`: **Cosa ti sto inviando?** Specifica il formato dei dati presenti nel *corpo* della richiesta (lo vedremo tra poco).
  * `Accept: text/html`: **Cosa vorrei ricevere?** Dice al server in quale formato il client preferirebbe ricevere la risposta.
  * `Authorization: Bearer <un_token_segreto>`: Usato per le richieste autenticate. È come mostrare un pass per accedere a un'area riservata del ristorante.
  * `User-Agent: Mozilla/5.0 ...`: Identifica il tipo di browser e sistema operativo del client.

### 3\. Il "Body" (Il Pacco con i Dati)

Il corpo (o *payload*) della richiesta è opzionale. È presente solo nelle richieste che devono inviare dati al server, come `POST` e `PUT`. È qui che viaggiano i dati di un modulo, i file caricati, etc.

**Esempio completo:** Immaginiamo di inviare un modulo di login. La richiesta HTTP grezza potrebbe assomigliare a questa:

```http
POST /login HTTP/1.1
Host: api.miosito.com
Content-Type: application/json

{
    "username": "anna.bianchi",
    "password": "password123"
}
```

  * **Request Line:** `POST /login HTTP/1.1` -\> Voglio creare una sessione di login.
  * **Headers:** `Host` e `Content-Type` -\> Ti sto parlando (https://www.google.com/url?sa=E\&source=gmail\&q=api.miosito.com) e ti sto inviando dati in formato JSON.
  * **Body:** Il JSON `{...}` con le credenziali dell'utente.

-----

## 16\. Come si Fanno le Richieste in JavaScript? L'API `fetch`

Ok, ma come fa il codice JavaScript che gira nel browser a creare e inviare queste richieste (ad esempio, dopo che l'utente clicca "Login")?

Lo strumento moderno e standard per questo compito è l'**API `fetch`**. È una funzione globale, basata su Promises (ricordate la lezione sull'asincronia?), che rende l'invio di richieste incredibilmente semplice.

**Esempio Pratico:** Scriviamo il codice JavaScript per inviare i dati del modulo di login dell'esempio precedente.

```javascript
// 1. I dati che vogliamo inviare, solitamente presi da un form HTML.
const datiLogin = {
    username: "anna.bianchi",
    password: "password123"
};

console.log("Invio della richiesta di login in corso...");

// 2. Usiamo fetch. Il primo argomento è l'URL a cui inviare la richiesta.
// Il secondo è un oggetto di configurazione che descrive la nostra richiesta.
fetch('https://api.miosito.com/login', {
    method: 'POST', // Specifichiamo il METODO HTTP
    headers: {
        // Specifichiamo gli HEADERS
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datiLogin) // Inseriamo i dati nel BODY, convertendoli in una stringa JSON
})
.then(response => {
    // .then() viene eseguito quando il server risponde.
    // 'response' è la risposta del server, che dobbiamo controllare.
    if (!response.ok) {
        // Se la risposta non è "OK" (es. codice 404 o 500), lanciamo un errore.
        throw new Error(`Errore HTTP! Stato: ${response.status}`);
    }
    // Convertiamo la risposta (che potrebbe essere JSON) in un oggetto JavaScript
    return response.json();
})
.then(data => {
    // Questo .then() riceve i dati elaborati dal precedente.
    console.log("Login riuscito con successo!");
    console.log("Token ricevuto:", data.token); // Supponendo che il server risponda con un token
})
.catch(error => {
    // .catch() viene eseguito se c'è un errore di rete o se abbiamo lanciato l'errore prima.
    console.error("Errore durante la richiesta di login:", error);
});

console.log("Richiesta inviata. Il codice continua mentre aspettiamo la risposta...");
```

> **Nota importante:** `JSON.stringify()` è un metodo fondamentale che trasforma un oggetto JavaScript in una stringa di testo in formato JSON, pronta per essere spedita attraverso la rete.

### Riepilogo 

  * La **Richiesta HTTP** è il messaggio formale che un client invia a un server.
  * Le sue parti fondamentali sono: **Metodo** (l'intento), **URI/Path** (la risorsa), **Headers** (il contesto) e (opzionalmente) **Body** (i dati).
  * `GET` chiede dati, `POST` ne crea di nuovi. Sono i due metodi più importanti da ricordare all'inizio.
  * In JavaScript, l'API **`fetch()`** è lo strumento standard, moderno e basato su Promises per creare e gestire richieste HTTP in modo asincrono.



