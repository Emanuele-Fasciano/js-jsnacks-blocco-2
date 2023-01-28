// Crea due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri,
// stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// input element
const redNumber = document.getElementById("text_red");
const greenNumber = document.getElementById("text_green");

// console.log(redNumber);

const numbersList = [
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
    11,
    12,
]

const numberEven = []

const numberOdd = []

for (let i = 0; i < numbersList.length; i++) {
    let currentNumber = numbersList[i]

    if (currentNumber % 2 == 0) {
        numberEven.push(currentNumber)
    }
    else {
        numberOdd.push(currentNumber)
    }

}
console.log(numberOdd);
console.log(numberEven);

redNumber.innerHTML = `Numeri dispari: ${numberOdd}`
greenNumber.innerHTML = `Numeri pari: ${numberEven}`
