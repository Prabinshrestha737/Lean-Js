const inputs = document.querySelector(".inputs"),
    resetBtn = document.querySelector(".reset-btn"),
    hint = document.querySelector(".hint span"),
    typingInput = document.querySelector(".typing-input");
wrongLetter = document.querySelector(".wrong-letter span");
guessLeft = document.querySelector(".guess-left span");

let word, corrects = [], incorrects = [], maxGuesses;

function randomWord() {
    //getting random objects from wordList
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(ranObj);

    maxGuesses = 8;
    word = ranObj.word; //getting word of random object
    console.log(word);

    hint.innerText = ranObj.hint;
    guessLeft.innerText = maxGuesses;

    let html = "";

    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;

    }
    inputs.innerHTML = html;


}

randomWord();

function initGame(e) {
    let key = e.target.value;
    if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(`${key}`) && !corrects.includes(key)) {
        console.log(key);
        if (word.includes(key)) { // if user letter found in the word
            for (let i = 0; i < word.length; i++) {
                if (word[i] === key) {
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;

                }

            }
        } else {

            maxGuesses--; // Decrement maxGuesses by 1 
            incorrects.push(`${key}`);
        }
        guessLeft.innerHTML = maxGuesses
        wrongLetter.innerHTML = incorrects;
    }


    typingInput.value = "";

    setTimeout(() => {
        if (corrects.length === word.length) { // if user found all letters 
            alert(`Congrats! you found the word ${word.toUpperCase()}`);
        } else if (maxGuesses < 1) { // if user couldn't found all letters 
            alert("Game over! You don't have remaining guesses");
            for (let i = 0; i < word.length; i++) {
                if (word[i] === key) {
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
    
                }
    
            }
    
    
        }

    })

    
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());