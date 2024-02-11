
const wordEl = document.querySelector(".word");
const oldWordsEl = document.querySelector(".old-words");

//Wortliste
let words =[];
let currentWord = ""; 
let previousWords = []; 

fetch("words.txt").then(function(response){
    return response.text();
}).then(
    function(text) {
        words = text.split(",");
});

//Wird ausgelöst wenn der Button gedrückt wird
function onClick() {

    if (currentWord){
        previousWords.push(currentWord);

        oldWordsEl.innerHTML = previousWords.join(", ");
    }
    // Neues Wort generieren und als currentWord speichern
    currentWord = getRandomWord();
    // Document aktualisieren
    wordEl.innerHTML = currentWord;
}

function getRandomNumber(maxNumber){
    return Math.floor(Math.random() * maxNumber);
}

function getRandomWord(){
    return words[getRandomNumber(words.length)];
}