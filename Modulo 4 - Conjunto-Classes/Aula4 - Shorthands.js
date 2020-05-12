// /w => qualquer caracter exceto acento
// /d => digitos

const texto = `1,2,3,4,5,a.b c!d?e  -
f_g`

console.log(texto.match(/\d/g)); // números [0-9]
console.log(texto.match(/\D/g)); // não número ![0-9]

console.log(texto.match(/\w/g)); // caracteres [a-zA-Z0-9]
console.log(texto.match(/\W/g)); // não caracteres ![a-zA-Z0-9]

console.log(texto.match(/\s/g)); // espaço [\t \n \f \r]
console.log(texto.match(/\s/g)); // não espaço [\t \n \f \r]
