// input element
const winEl = document.getElementById("win")
const drawEl = document.getElementById("draw")
const loseEl = document.getElementById("lose")

const results = [
    "w",
    "w",
    "x",
    "x",
    "l",
    "w",
    "l",
    "l",
]

let win = 0;
let draw = 0;
let lose = 0;

for (let i = 0; i < results.length; i++) {

    const currentResult = results[i]

    if (currentResult == "w") {
        win++;
    }
    else if (currentResult == "l") {
        lose++;
    }
    else {
        draw++;
    }
}

// output element
winEl.innerHTML = `vittorie: ${win}`
drawEl.innerHTML = `pareggi: ${draw}`
loseEl.innerHTML = `sconfitte: ${lose}`