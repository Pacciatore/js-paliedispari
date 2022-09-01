console.log('JS OK');

let userNumber = 0;
let userChoice = '';
let sumResultOdd = '';

// const word = prompt('Inserire una parola:');

// const isPalindroma = checkPalindroma(word);


// if (isPalindroma) {
//     alert('La parola è palindroma!');
// } else {
//     alert('La parola non è palindroma!');
// }

do {
    userChoice = prompt('pari o dispari?')
} while (userChoice.charAt(0) != 'p' && userChoice.charAt(0) != 'd');

console.log(userChoice);

do {
    userNumber = parseInt(prompt('Inserire un numero da 1 a 5:'));
    console.log('Numero dell\'utente: ' + userNumber);
} while (userNumber < 1 || userNumber > 5);

const pcNumber = pcRandomNumber(1, 5);
console.log('Numero del computer: ' + pcNumber);

const sum = userNumber + pcNumber;

const isOdd = checkOdd(sum);

isOdd === true ? sumResultOdd = 'd' : sumResultOdd = 'p';

alert(sumResultOdd === userChoice.charAt(0) ? 'Hai Vinto!' : 'Hai Perso!');

function checkPalindroma(text) {
    console.log(text);

    let reversedText = '';

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);

        reversedText = char + reversedText;

    }

    console.log(reversedText);

    const isEqual = reversedText === text;
    return isEqual;
}

function pcRandomNumber(min, max) {
    const pcNumber = Math.floor(Math.random() * max) + min;
    return pcNumber;
}

function checkOdd(number) {
    const isOdd = (number % 2) === 1;
    console.log('è dispari? ' + isOdd);
    return isOdd;
}