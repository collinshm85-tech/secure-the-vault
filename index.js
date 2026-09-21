let code1;
code1 = 7 + 3;

let code2;
code2 = 100 - 120 / 2;

let code3;
code3 = 79 % 40;

const message = `The vault has been secured. The combination is:`;

const codeA = code1 + "-" + code2 + "-" + code3;

const codeB = `${code1}-${code2}-${code3}`

console.log(message, codeA, codeB)