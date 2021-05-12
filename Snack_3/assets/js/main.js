/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

*/

//creo un array in cui vado a inserire dei numeri con un ciclo per poter decidere quanti numeri
const arrayNumeri = [];

for (let i = 0; i < 10; i++) {
    arrayNumeri.push(i)
}

console.log(arrayNumeri);

//inizzializo le variabili che poi mi servono
let min = 2, max = 10;


//funzione con il metodo filter che mi va ad analizzare l'index degli elementi 
function intervalloArray(arrayList, min, max) {
    if (min <= max && max <= arrayList.length) {
        const intervalloArray = arrayNumeri.filter((index) => {
            if (index >= min && index <= max) {
                return true;
            }
            return false;
        })
        return intervalloArray;

    } else {
        return "Condizioni non rispetate"
    }
}

const arrayCorto = intervalloArray(arrayNumeri, min, max);
console.log(arrayCorto);

