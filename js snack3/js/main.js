// Crea un array di numeri interi e
//  fai la somma di tutti gli elementi  che sono in posizione dispari

const numbers = [
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

let somma = 0;

for (let i = 0; i < numbers.length; i++) {
    currentNumber = numbers[i]

    if (i % 2 != 0) {
        somma += currentNumber
    }
}
console.log(`La somma è = ${somma}`);
