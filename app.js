// global variable and array declarations

let clues = [];
let usedClues = [];

// notes from dmg arrow func demo
// want to use arrow functions for my event listeners 

document.addEventListener("click", () => {
    let inputAnswer = document.getElementById("input")

    // build questions/jeporady clues array

    fetch('https://jservice.io/api/random?count=4')
        .then(response => response.json())
        .then(clues => {
            for (let clue of clues) {
                usedClues.push(clue)

                let details = document.createElement("details")
                let summary = document.createElement("summary")

                details.append(summary)
                summary.append(`Value = $${clue.value}| Category: ${clue.category.title}; ${clue.question}`)
                details.append(clue.answer)
                document.body.append(details)
            }
            console.log(usedClues)
        })
});