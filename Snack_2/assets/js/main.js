/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



const squadre = [
    {
        nome: "Squadra1",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra2",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra3",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra4",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra5",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra6",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra7",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra8",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Squadra9",
        puntiFatti: 0,
        falliSubiti: 0
    }
];


const nomeSquadre = []; // se uso const e comunque visibile all'interno del ciclo for siccome lo dichiarata fuori e sara utilizzabile da qui in giu

//uso un ciclo per andare a prendere ogni singolo oggetto e poi aggiungerli i due valori che mi servono
for (let i = 0; i < squadre.length; i++) {
    let squadra = squadre[i];  // questa variabile con let non posso vederla al di fuori del ciclo
    //vado a prendere i due valori chiave da ogni oggetto
    let { puntiFatti, falliSubiti } = squadra;

    //vado a modificare i due valori dentro all'oggetto
    squadra.puntiFatti = randomNumber(1, 100);
    squadra.falliSubiti = randomNumber(1, 300);

    //creo un array temporaneo in cui mettere i due elementi che mi servono
    //e poi inserisco l'array temporaneo in un array esterno con tutti gli array che mi servono
    let elemento = [];
    elemento.push(squadra.nome, squadra.falliSubiti)
    nomeSquadre.push(elemento)

}
console.log(squadre);
console.log(nomeSquadre);

