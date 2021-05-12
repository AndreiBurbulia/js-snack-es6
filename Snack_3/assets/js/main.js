/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

*/


const arrayRandom = [4, 88, 23, 55, 97, 13, 45, 87, 35, 65, 26, 11, 0, 99, 111]
console.log(arrayRandom);

//inizzializo le variabili che poi mi servono
let min = 5, max = 12;

//funzione che va a controllare l'index dell'elemento e lo stampa in un nuovo array se l'index e nei limiti
function TraDueNumeri(listArray, min, max) {
    const arrayVuoto = [];
    if (min <= max && max <= (listArray.length - 1)) {
        listArray.forEach((elemento, index) => {
            if (index >= min && index <= max) {
                arrayVuoto.push(elemento)
            }
        })
        return arrayVuoto;
    } else { //se i limiti sono sbagliati lo comunico 
        return "Condizioni non rispetate!!"
    }
}

//Prova funzione con numeri
const provaFunz = TraDueNumeri(arrayRandom, min, max);
console.log(provaFunz);


//Prova funzione con stringhe
const arrayNomi = ["Andrei", "Verdi", "Marta", "Elena", "Marian", "Adrian", "Monica", "Luca", "Cristina", "Marco", "Mirza", "Alexandra", "Daive"];

const nomiCorto = TraDueNumeri(arrayNomi, min, max);
console.log(nomiCorto);