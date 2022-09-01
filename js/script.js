console.log('JS OK');

const word = prompt('Inserire una parola:');

const isPalindroma = checkPalindroma(word);


if (isPalindroma) {
    alert('La parola è palindroma!');
} else {
    alert('La parola non è palindroma!');
}






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