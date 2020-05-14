const texto = `
Leo é muito legal
Emanual foi pro Sergipe
Bianca é casaca com Habib`

console.log(texto.match(/\n/g));
console.log(texto.match(/^(\w).+\1$/gi));
console.log(texto.match(/^(\w).+\1$/gim));

const texto2 = `
Leo é muito legal.
Emanual foi pro Sergipe.
Bianca é casaca com Habib.`

console.log(texto2.match(/\n/g));
console.log(texto2.match(/^(\w).+\1$/gi));
console.log(texto2.match(/^(\w).+\1\.$/gim));
