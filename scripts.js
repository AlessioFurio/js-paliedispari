// L'esercitazione di oggi consiste in 2 esercizi diversi:
// Palindroma:

//scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)

// Pari o dispari:

//scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer.
//L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari".
//Il computer genera un secondo numero casuale tra 1 e 5.
//Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)



//******* PALINDROME FUNCTION //***************




var parolaUtente = prompt('inserisci una parola');

palindrome(parolaUtente);


function palindrome (str) {  // dichiaro funzione palindrome che si aspetta una stringa come valore

    var reversed = str.split("").reverse().join("");
    // alla variabile reversed assegno:
    // 1- split() con il quale semplifico una stringa di caratteri in un array di stringhe
    // 2- reverse() con il quale inverto l-ordine degli elementi
    // 3- join() il quale mi restituirà l' array generato, nuovamente come una stringa

    console.log(reversed); // stampo la variabile reserved che contiene la stringa di caratteri invertita

    if (reversed === str) {  // se reserved === a str
        console.log('la parola e palindroma'); // allora stampa
        return true  // il return sara vero
    }
    else {  // altrimenti
        console.log('la parola NON e palindroma'); // altrimenti stampa
        return false; // il return sara falso
    }
}
