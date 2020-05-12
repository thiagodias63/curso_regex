const texto = 'de longe eu avistei o fogo e uma pessoa gritando: FOGOOOO!'
const texto2  = 'there is a big fog in NYC'

// * -> 0 ou mais (opcional)
const regex = /fogo*/gi
console.log(texto.match(regex));
console.log(texto2.match(regex));
