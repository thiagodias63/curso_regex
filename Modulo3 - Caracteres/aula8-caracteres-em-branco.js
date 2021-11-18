// texto = carros com vários espaços
const texto = `
ca	r
r	o s!
`;

const regexCarro = /ca\tr\nr\to\ss!/g;
console.log(texto.match(regexCarro))

