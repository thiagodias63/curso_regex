// g => flag global
// i => case-insensitive

const texto  = 'Carlos assinou o abaxio-assinado.'
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/i));
console.log(texto.match(/ab|c/gi));

