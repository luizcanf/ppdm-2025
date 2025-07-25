const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function isInteger(n) {
return !isNaN(n) && Number.isInteger(Number(n));
}

rl.question('Digite o primeiro número inteiro: ', (num1) => {
rl.question('Digite o segundo número inteiro: ', (num2) => {
const a = Number(num1);
const b = Number(num2);

if (isInteger(a) && isInteger(b)) {
if (b === 0) {
console.log("Divisão por zero não é permitida.");
} else if (a % b === 0) {
console.log(`${a} é divisível por ${b}`);
} else {
console.log(`${a} não é divisível por ${b}`);
}
} else {
console.log("Por favor, digite apenas números inteiros válidos.");
}

rl.close();
});
});