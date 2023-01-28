// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all'array che ha meno elementi
// fino a quando ne avrà tanti quanti l'altro.

let array1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
]

let array2 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
]

let shortArray = array1.length
let longArray = array2.length


for (let i = 0; i < longArray; i++) {

    if (shortArray != longArray) {
        shortArray++;
    }
}

console.log(longArray);
console.log(shortArray);


