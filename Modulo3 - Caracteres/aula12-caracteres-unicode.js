// no inicio
// um byte (8 bits) - 256 caracteres
// Símbolos, pontuação, A-Z, a-z-, 0-9

// Dois bytes (16 bits) - >65580 caracteres
// +Simbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode
// QUantidade de bytes variável - Expansível
// Suporta atualmente mais de 1Milhão caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos
// https://unicode-table.com/pt

const texto = 'aπc '
const regexUnicodePi = /\u03c0/g
console.log(texto.match(regexUnicodePi))