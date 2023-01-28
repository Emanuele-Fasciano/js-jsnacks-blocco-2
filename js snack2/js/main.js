// Crea due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri,
// stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// input element
const redNumber = document.getElementById("text_red");
const greenNumber = document.getElementById("text_green");

// console.log(redNumber);

const numbersList = [
    14,
    52,
    37,
    46,
    51,
    69,
    74,
    18,
    92,
    16,
    91,
    32,
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
