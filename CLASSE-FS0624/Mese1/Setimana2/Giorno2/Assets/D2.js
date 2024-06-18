/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 3;
let num2 = 6;
let result = ""

if (num2 > num1) {
  result = 'Il numero risulta maggiore';
  console.log('il numero risulta maggiore');
}
else if (num1 > num2) {
  console.log('il risultato risulta minore')
}
else {
  console.log('il risultato da lo stesso numero')
}
document.getElementById('first').innerText = result;

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3 = 7;

if (num3 !== 5) {
  console.log('Il risultato non da 5');
} else {
  console.log('uguale')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const num4 = 20

if (num4 % 5 === 0) {
  console.log('Il numero risulta divisivile per 5');
} else {
  console.log('il numero non risulta divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num5 = 8;
let num6 = 9;

if (num6 || num5 === 8 || num6 - num5 === 8 || num6 + num5 === 8) {
  console.log('Il valore di uno di essi o sottrazione/addizione risulta 8');
} else{
  console.log('non risulta 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
let spedictionCost = 10;

if (totalShoppingCart > 50) {
  console.log('Hai diritto alla spedizione gratuita!');
} else {
  console.log('la tua spesa risulta di :' + totalShoppingCart + spedictionCost)
}

let totalShoppingCart1 = 25;
let somma = spedictionCost + totalShoppingCart1;

if (totalShoppingCart1 > 50) {
  console.log('Hai diritto alla spedizione gratuita!');
} else {
  console.log('la tua spesa risulta di :' + somma)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let sconto = 0.2;
let totalDiscount = totalShoppingCart * (1 - sconto);

if (totalShoppingCart > 50) {
  console.log('Hai diritto alla spedizione gratuita!');
} else if (TotalDiscount <= 50) {
  console.log('Non hai raggiunto la spesa minima con il totale raggiunto!')
}

totalShoppingCart = 40;
let totalDiscount1 = totalShoppingCart * (1 - sconto);
let totalWithoutSpediction = totalDiscount1 + spedictionCost;


if (totalWithoutSpediction > 50) {
  console.log('Hai diritto alla spedizione gratuita!');
} else (totalWithoutSpediction <= 50)
{
  console.log('Non hai raggiunto la spesa minima con il totale raggiunto! La tua spesa risulta di :' + totalWithoutSpediction)
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 10;
let b = 4;
let c = 9;

if (a > b && a > c && b > c) {
  console.log(a, b, c)
}
else if (a > b && a > c && c > b) {
  console.log(a, c, b)
}
else if (b > a && b > c && c > a) {
  console.log(b, c, a)
}
else if (c > a && c > b && b > a) {
  console.log(c, b, a)
}
else if (c > a && c > b && a > b) {
  console.log(c, a, b)
}
else if (b > a && b > c && a > c) {
  console.log(b, a, c)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numa = 5;

if (typeof numa === "number") {
  console.log('da un numero')
}
else {
  console.log('non da un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numb = 5

if (numb % 2 === 0) {
  console.log('il numero :' + numb + 'da pari')
} else {
  console.log('da un numero dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 3
if (val < 10 && val >= 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

const me1 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
}
console.log(me1)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me1.lastName;

console.log(me1)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me1.skills.pop();

console.log(me1)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const me2 = {
  a0: 1,
  a1: 2,
  a2: 3,
  a3: 4




}

console.log(me2)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
