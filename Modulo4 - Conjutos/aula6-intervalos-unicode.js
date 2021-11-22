
const texto = 'aπcρ qwuφ qwijeϏ qweϐ'
const regexConjuntoUnicode = /[\u03c0-\u03d0]/g
console.log(texto.match(regexConjuntoUnicode))

const texto2 = 'não é â à pé'
const regexAlfabetoAcentuado = /[À-ú]/g
console.log(texto2.match(regexAlfabetoAcentuado))