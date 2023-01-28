// Inserisci un numero, se è pari stampa il numero, 
// se è dispari stampa il numero successivo.

// input element
const buttonEl = document.querySelector("#button")
const inputTextEl = document.getElementById("text")
const pEl = document.getElementById("resault")

buttonEl.addEventListener(
    "click",
    function () {
        let userNumber = inputTextEl.value

        if (userNumber % 2 == 0) {
        }
        else {
            userNumber++;
        }

        pEl.innerHTML = userNumber
    }
)



