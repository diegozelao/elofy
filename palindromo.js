// Crie uma função que teste se a palavra é um palíndromo e retorne true ou false.
// Não é permitido usar método array.reverse.

// Anilina, Arara, Esse, Reviver

function reverseWord(word) {
    const totalLenghtWord = word.length -1
    const wordLower = word.toLowerCase()
    let indexRev = word.length
    let palindromo = null
    
    setPali = (bool) => {
        palindromo = bool
    }

    for (let index = 0; index <= totalLenghtWord; index++) {
        const passando = wordLower[index];
        const reverse = wordLower[indexRev-1]
        indexRev--
        if (passando == reverse) {
            setPali(true)
        } else {
            setPali(false)
        }
    }
    console.log(`palavra é um palíndromo: ${palindromo == true ? 'Sim' : 'Nao'}`)
}

reverseWord('Anilina')