// . é um coringa, válido para uma posição/1 caractere

const texto  = `1,2,3,4,5,6,7,8,9,0`
// qualquer coisa começando com 1 e terminando com 2 e com 1 caractere entre ambos
console.log(texto.match(/1.2/g));
// qualquer coisa começando com 1 e terminando com 2 e com 2 caracteres entre ambos
console.log(texto.match(/1..2/g));
// qualquer coisa começando com 1, qualquer coisa, qualquer coisa e termina com vírgula
console.log(texto.match(/1..,/g));

const notas = '8.3,5.6,8.8'
console.log(notas.match(/8../g));
console.log(notas.match(/.\../g));

