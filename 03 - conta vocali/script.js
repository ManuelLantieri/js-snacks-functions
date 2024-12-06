/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const countVowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counterVowels = 0

    for(let i = 0; i < word.length; i++) {
        const currentLetter = word[i];

        if(vowels.includes(currentLetter)) {
            counterVowels++;
        }
    }
    return counterVowels;
}

// Invoca la funzione qui e stampa il risultato in console

const result =countVowels(word);
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)