/*
Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

*/

const bici = [
    {
        nome: "Cannondale",
        peso: 7.3
    },
    {
        nome: "Giant TCR",
        peso: 6.8
    },
    {
        nome: "Tamrac SL7",
        peso: 6.9
    },
    {
        nome: "Systemsix",
        peso: 6.6
    },
    {
        nome: "Trek Madone",
        peso: 7.98
    },
    {
        nome: "Canyon Aeroad",
        peso: 7.25
    },
    {
        nome: "Trek Emonda",
        peso: 6.7
    }
];
var biciLeggera = 20;
for (let i = 0; i < bici.length; i++) {
    let { peso } = bici[i];
    if (peso < biciLeggera) {
        biciLeggera = peso;
        console.log(bici[i]);
        document.getElementById("nome").innerHTML =
            `
        <p>Il nome della bicicletta piu leggera è ${bici[i].nome}</p>
        <p>Il peso della bicicletta piu leggera è ${bici[i].peso} kg</p>
        `
    }
}
