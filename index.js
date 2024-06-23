const characters = {
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
    numbers: "0123456789".split(""),
    symbols: "~`!@#$%^&*()_-+={[}]|:;<>,.?/".split("")
};

let pass1El = document.getElementById("pass-1-el");
let pass2El = document.getElementById("pass-2-el");

function generateRandomPasswords() {
    let length = parseInt(document.getElementById("password-length").value);
    let includeLetters = document.getElementById("include-letters").checked;
    let includeSymbols = document.getElementById("include-symbols").checked;
    let includeNumbers = document.getElementById("include-numbers").checked;

    let allCharacters = [];
    if (includeLetters) {
        allCharacters = allCharacters.concat(characters.letters);
    }
    if (includeSymbols) {
        allCharacters = allCharacters.concat(characters.symbols);
    }
    if (includeNumbers) {
        allCharacters = allCharacters.concat(characters.numbers);
    }

    pass1El.textContent = generatePassword(length, allCharacters);
    pass2El.textContent = generatePassword(length, allCharacters);
}

function generatePassword(length, characters) {
    let password = "";
    for (let i = 0; i < length; i++) {
        let index = randomIndex(characters.length);
        password += characters[index];
    }
    return password;
}

function randomIndex(max) {
    return Math.floor(Math.random() * max);
}

function copyToClipboard(elementId) {
    let textToCopy = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert("Copied to clipboard: " + textToCopy);
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
}

window.increment = increment
window.save = save
window.reset = reset