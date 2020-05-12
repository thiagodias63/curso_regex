const texto = 'de longe eu avistei o fogo e uma pessoa gritando: FOGOOOO!'
const texto2  = 'there is a big fog in NYC'

// + -> 1 ou mais
const regex = /fogo+/gi
console.log(texto.match(regex));
console.log(texto2.match(regex));

const texto3 = 'os números: 0123456789'
console.log(texto3.match(/[0-9]?/g));
console.log(texto3.match(/[0-9]/g));
console.log(texto3.match(/[0-9]+/g));
console.log(texto3.match(/\d/g));
console.log(texto3.match(/\d+/g));
