const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    exprArr = [];
    morseArr = [];
    decodedStr = [];
    regTen = /10/gi;
    regEleven = /11/gi;
    regZero = /0/gi;
    regStar = /\*{10}/gi;

    for (let i = 0; i < expr.length / 10; i++) {
        exprArr.push(expr.slice(i * 10, (i + 1) * 10));
    }

    morseArr = exprArr.map(item => item.replace(regTen, '.').replace(regEleven, '-').replace(regZero, '').replace(regStar, ' '));
    
    for (const letter of morseArr) {
      decodedStr.push(MORSE_TABLE[letter] || ' ');
    }
    
    return decodedStr.join('');
}

module.exports = {
    decode
}