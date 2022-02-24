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
  const lettersInMorse = [];
  let letterInMorse = [];
  let curLetter = '';
  let fixedExpr = expr;
  let counter = 0;
  let result = '';

  if (fixedExpr.length % 10) {
    while (fixedExpr.length % 10) {
        fixedExpr = `0${fixedExpr}`;
    };
  };

  fixedExpr = fixedExpr.split('');

  fixedExpr.forEach((n, i) => {
    if (n === '1') {
      curLetter += '1';
    };

    if (n === '0' && curLetter.length === 1) {
      curLetter += '0';
    };

    if (n === '*' && fixedExpr[i - 1] !== '*') {
      lettersInMorse.push(' ');
    };

    if (curLetter.length === 2) {
      if (curLetter === '10') {
        letterInMorse.push('.');
        curLetter = '';
      } else {
        letterInMorse.push('-');
        curLetter = '';
      };
    };

    counter += 1;

    if (counter === 10) {
      if (letterInMorse.length) {
        lettersInMorse.push(letterInMorse);
      }

      letterInMorse = [];
      counter = 0;
    };
  });

  lettersInMorse.forEach((morseLetter) => {
    if (Array.isArray(morseLetter)) {
      result = `${result}${MORSE_TABLE[morseLetter.join('')]}`;
    } else {
      result = `${result} `;
    };
  });

  return result;
}

module.exports = {
    decode
}