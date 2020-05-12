const texto  = `a   b`
// Encontrar o a e b com os espaços
console.log(texto.match(/a   b/g));
console.log(texto.match(/a\s\s\sb/g));

// no futuro
console.log(texto.match(/a\s+b/g));
console.log(texto.match(/a {3}b/g));
console.log(texto.match(/a\s{3}b/g));