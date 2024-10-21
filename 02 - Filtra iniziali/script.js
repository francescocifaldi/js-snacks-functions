/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function findInitial (array, char){
    let resultArray = []
    for(let i=0; i<array.length; i++){
        if(char === array[i].charAt(0)){
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findInitial(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]