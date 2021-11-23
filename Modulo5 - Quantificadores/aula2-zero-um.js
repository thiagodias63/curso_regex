const texto = 'de longe eu avistei o fogo e uma pessoa gritando: FOGOOOO!'
const texto2  = 'there is a big fog in NYC'

// ? -> zero ou um
const regexZeroOuMais = /fogo?/gi
console.log(texto.match(regexZeroOuMais));
console.log(texto2.match(regexZeroOuMais));