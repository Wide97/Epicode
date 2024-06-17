/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Esistono 5 Data Types primari. Il primo e' la stringa, che indica sia il singolo carattere o piu', a patto che siano definiti.
Le stringhe sono definite tramite apici (' ' o " "); possono essere manipolate tramite metodi predefiniti.
La seconda tipologia e' la numerica, che viene definita senza distinzione tra intero e decimale; il numero decimale viene indicato
con il punto.
La terza tipologia di data types e' la booleana, che ammette solo due valori: TRUE o FALSE. E' importante perche' fa prendere 
decisioni al codice tramite dei controlli condizionali (if, or ecc...).
Il data type null determina un' assenza intenzionale di valore, tendenzialmente il suo scopo e' quello di svuotare una variabile.
Infine esiste la tipologia "undefined", che determina l' assenza di valore in questo momento, ma non per sempre, dicendo cioe' che
piu' avanti quel valore dovra' essere definito.
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Marco';
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let risultato = num1 + num2;
console.log( 'il risultato da: ' + risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = '12';
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Widesott';
console.log(myName);
/*const myName = 'Mario'*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let num3 = 4;
let sottrazione = x - num3;
console.log('il risultato da:' + sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';
let verify = name1 == name2;
console.log('la verifica da:' + verify);
let verify1 = name1 === name2;
console.log('la verifica da:' + verify1);
let verify2 = name1 != name2;
console.log('la verifica da:' + verify2);

let lowercasedName1 = name1.toLowerCase();
let lowercasedName2 = name2.toLowerCase();
console.log(lowercasedName2);
let verify3 = lowercasedName1 == lowercasedName2;
console.log('il risultato da:' + verify3);
let verify4 = lowercasedName1 === lowercasedName2;
console.log('il risultato da:' + verify4);
let verify5 = lowercasedName1 != lowercasedName2;
console.log('il risultato da:' + verify5);

