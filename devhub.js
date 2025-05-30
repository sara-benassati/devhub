// // variabili, costanti e tipi di dato
// // variabili: let, const, var
// // tipi di dato: string, number, boolean, null, undefined, object, array
// // commenti: // per una riga, /* */ per più righe
// // console.log() per stampare in console
// // console.error() per stampare in console come errore
// // console.warn() per stampare in console come avviso
// // console.info() per stampare in console come informazione
// // console.table() per stampare in console come tabella
// // differenze tra let, const e var:
// // let: variabile che può essere modificata, ha scope di blocco
// // const: costante che non può essere modificata, ha scope di blocco
// // var: variabile che può essere modificata, ha scope di funzione o globale
// // let variabile = 0
// // const costante = ' '
// // var globale = 0

// // console.log('Hello World!', variabile)

// // if(variabile == 2) {
// //     console.log('La variabile è zero')
// // } else {
// //     console.log(`La variabile non è ${variabile} `)
// // } 

// // switch(variabile) {
// //     case 0:
// //         console.log('La variabile è zero')
// //         break
// //     case 1:
// //         console.log('La variabile è uno')
// //         break
// //     default:
// //         console.log(`La variabile non è ${variabile}`)
// // }

// // || = or && = and
// // ! = not 
// // == uguale === uguale e dello stesso tipo
// // != diverso !== diverso e di tipo diverso
// // < > <= >=
// // si può usare or o and? o solo && e ||
// // loop for servono per iterare su un array o un oggetto
// // loop while servono per eseguire un blocco di codice finché una condizione è vera
// // loop do while servono per eseguire un blocco di codice almeno una volta e poi verificare la condizione
// // loop for in servono per iterare su un oggetto
// // loop for of servono per iterare su un array
// // loop forEach servono per iterare su un array e eseguire una funzione su ogni elemento

// for(let i = 0; i < 10; i++) { // i++ è un operatore di incremento
//     console.log(`Il valore di i è ${i}`) // i variabile di loop
// } 
// let i = 0
// while(i < 10) { // i++ è un operatore di incremento
//     console.log(`Il valore di i è ${i}`)
//     i++
// }
// let array =[a, b, c, d, e]
// for(let i = 0; i < array.length; i++) { // i++ è un operatore di incremento
//     console.log(`Il valore di i è ${i} e l'elemento dell'array è ${array[i]}`)
// }
// for(let index = 0; index < array.length; index++) { // i++ è un operatore di incremento
//     console.log(`Il valore di index è ${index} e l'elemento dell'array è ${array[index]}`)
// }
// while(i < array.length) {
//     let element = array[i];
//     console.log('item', index, element) 
//     index++
   
// }
// do { while(i < array.length) {
//     let element = array[i];
//     console.log('item', index, element) 
//     index++
// }} while(i < array.length);
// // for in per iterare su un oggetto
// let object = {a: 1, b: 2, c: 3}
// for(let key in object) {
//     console.log(`La chiave è ${key} e il valore è ${object[key]}`)
// }
// // for of per iterare su un array
// let array2 = [1, 2, 3, 4, 5]
// for(let value of array2) {
//     console.log(`Il valore è ${value}`)
// }
// // forEach per iterare su un array e eseguire una funzione su ogni elemento
// array2.forEach((value, index) => {
//     console.log(`Il valore è ${value} e l'indice è ${index}`)
// });
// // callback per eseguire una funzione dopo che un'altra funzione è stata eseguita
// // differenze tra for of e forEach:
// // for of itera su un array e restituisce il valore, forEach itera su un array e restituisce l'indice e il valore
// // json è un formato di scambio dati, è un oggetto JavaScript in formato stringa consiste in coppie chiave-valore
// // json sta per JavaScript Object Notation
// // for each accesso indice e valore mentre for of solo valore
// // differenze vari cicli dettagliati:
// // for: iterazione su un array o un oggetto, ha un contatore, può essere interrotto con break
// // while: esegue un blocco di codice finché una condizione è vera, può essere interrotto con break
// // do while: esegue un blocco di codice almeno una volta e poi verifica la condizione, può essere interrotto con break
// // for in: itera su un oggetto, restituisce la chiave, può essere interrotto con break
// // for of: itera su un array, restituisce il valore, può essere interrotto con break
// // forEach: itera su un array e esegue una funzione su ogni elemento, non può essere interrotto con break
// // callback: funzione che viene passata come argomento a un'altra funzione e viene eseguita dopo che l'altra funzione è stata eseguita
// // asincronia: esecuzione di codice in modo non bloccante, permette di eseguire più operazioni contemporaneamente
// // concetto  di asincronia è fondamentale in JavaScript, specialmente per operazioni che richiedono tempo come le richieste di rete
// // differenza con python che è sincrono per default
// // pro e contro dell'asincronia:
// // pro: permette di eseguire più operazioni contemporaneamente, migliora le prestazioni, evita il blocco del thread principale
// // contro: può rendere il codice più complesso, può causare problemi di sincronizzazione, può essere difficile da debuggare

// function saluta(nome) {
//     console.log(`Ciao ${nome}`);
// }   
// let messaggio = saluta('Mario'); // chiamata alla funzione saluta con l'argomento 'Mario'
// console.log(messaggio); // stampa il messaggio di saluto in console

// let saluta2 = function(nome) {
//     console.log(`Ciao ${nome}`);
// }

// saluta3 = (nome) => {
//     console.log(`Ciao ${nome}`); 
// }

// // diversi modi per definire una funzione 
// // tipi di gestione di sincronizzazione in JavaScript
// // callback: funzione passata come argomento a un'altra funzione, viene eseguita dopo che l'altra funzione è stata eseguita
// // promise: oggetto che rappresenta il risultato di un'operazione asincrona, può essere in uno dei seguenti stati: pending, fulfilled, rejected
// // async/await: sintassi per gestire le operazioni asincrone in modo più semplice, permette di scrivere codice asincrono come se fosse sincrono
// // in tutti i casi, il codice asincrono non blocca l'esecuzione del thread principale, permettendo ad altre operazioni di essere eseguite nel frattempo
// function saluta(nome, callback) {
//     console.log(`Ciao ${nome}`);
//     callback(); // chiamata alla funzione di callback
// }
// function finesaluto() {
//     console.log('Funzione di callback eseguita');
// }
// saluta('Mario', finesaluto); // chiamata alla funzione saluta con l'argomento 'Mario' e la funzione di callback finesaluto
// // promise
// function salutaPromise(nome) {
//     return new Promise((resolve, reject) => {
//         if (nome) {
//             resolve(`Ciao ${nome}`);
//         } else {
//             reject('Nome non fornito');
//         }
//     });
// }
// salutaPromise('Mario')
//     .then(messaggio => console.log(messaggio)) // gestisce il caso di successo
//     .catch(error => console.error(error)); // gestisce il caso di errore
// // async/await
// async function salutaAsync(nome) {
//     if (!nome) {
//         throw new Error('Nome non fornito');
//     }
//     return `Ciao ${nome}`;
// }
// async function eseguiSaluto() {
//     try {
//         const messaggio = await salutaAsync('Mario'); // attende il risultato della funzione asincrona
//         console.log(messaggio);
//     } catch (error) {
//         console.error(error); // gestisce l'errore
//     }
// }
// eseguiSaluto(); // chiamata alla funzione che esegue il saluto asincrono

// set timeout funzione nativa di JavaScript per eseguire una funzione dopo un certo intervallo di tempo
// perche aspettare chiamata api? per evitare di bloccare il thread principale
// se non si usa setTimeout, il codice continua a essere eseguito senza attendere la risposta dell'API
// thread principale è il thread che esegue il codice JavaScript, è un singolo thread
// usa periferiche come setTimeout, setInterval, requestAnimationFrame per eseguire codice in modo asincrono
// nelle callback per passare i parametri si usa err e il risultato che viene passato alla funzione di callback
// se è err si blocca l'esecuzione del codice e si gestisce l'errore
// errore si gestisce in base a come stai scrivendo il codice
// gestione promise, oggetti di tipo promise, che ti 'promettono' di darti un risultato in futuro o di fallire
// promise è un oggetto che rappresenta il risultato di un'operazione asincrona, può essere in uno dei seguenti stati: pending, fulfilled, rejected
function controllanumero(numero) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero > 0) {
                resolve(`Il numero ${numero} è positivo`);
            } else if (numero < 0) {
                resolve(`Il numero ${numero} è negativo`);
            } else {
                reject('Il numero è zero');
            }
        }
        , 2000); // simula un ritardo di 2 secondi
    }
    );
}
controllanumero(5)
    .then(messaggio => console.log(messaggio)) // gestisce il caso di successo
    .catch(error => console.error(error)); // gestisce il caso di errore


// sync await
async function controllaNumeroAsync(numero) {
    try {
        const messaggio = await controllanumero(numero); // attende il risultato della funzione asincrona
        console.log(messaggio);
    } catch (error) {
        console.error(error); // gestisce l'errore
    }
}
controllaNumeroAsync(5); 
// chiamata alla funzione che esegue il controllo del numero in modo asincrono
// perché usaramo async/await? perché rende il codice più leggibile e gestisce gli errori in modo più semplice
// perché usare try catch? perché permette di gestire gli errori in modo più semplice e leggibile
// cosa succede se non si usa try catch? il codice si interrompe e l'errore viene visualizzato in console
// await is only valid inside an async function, it pauses the execution of the function until the promise is resolved or rejected
// difference between async/await and promises:
// promises are objects that represent the result of an asynchronous operation, while async/await is a syntax that allows you to write asynchronous code in a synchronous style
// why would u choose async/await over promises? because it makes the code more readable and easier to understand, especially when dealing with multiple asynchronous operations
// why would u choose promises over async/await? because promises are more flexible and can be used in more complex scenarios, such as chaining multiple promises together