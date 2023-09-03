 const texto1 = "Olá Mundo!";
 const texto2 = 'Olá Mundo!';
 const senha = "senhaSuperSegura456!";
 const StringDeNumeros = "34567"; 

 const citacao = 'O "Leo" disse Oi!'; 

 console.log(citacao);

 // template string OU template literal
 console.log(`isso serve para colocar variavel na frase, tipo essa: ${citacao}`);

 // concatenação (+)

 console.log(texto2 + citacao);

 const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//const cidade = "belo horizonte";
//const input = "Belo Horizonte";

//console.log(cidade === input); 

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


