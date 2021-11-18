const texto  = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR';
const regex = /casa/
const regexGlobal = /casa/g
const regexGlobalInsensitive = /casa/gi

console.log(texto.match(regex))
console.log(texto.match(regexGlobal))
console.log(texto.match(regexGlobalInsensitive))