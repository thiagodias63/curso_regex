const texto = 'de longe eu avistei o fogo e uma pessoa gritando: FOGOOOO!'
const texto2  = 'there is a big fog in NYC'

// * -> 0 ou vários
const regexUmOuMais = /fogo*/gi
console.log(texto.match(regexUmOuMais));
console.log(texto2.match(regexUmOuMais));
