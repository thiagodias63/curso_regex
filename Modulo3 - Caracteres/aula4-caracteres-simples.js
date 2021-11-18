const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexVirgula = /,/
const regexVirgulaGlobal = /,/g
const regexAMaiusculaGlobal = /A/g
const regexAMaiusculaGlobalInsensitive = /A/gi
const regexDois = /2/
const regexBd = /b c!d/
console.log(texto.split(regexVirgula))
console.log(texto.split(regexVirgula))
console.log(texto.split(regexVirgulaGlobal))

console.log(texto.split(regexAMaiusculaGlobal))
console.log(texto.split(regexAMaiusculaGlobalInsensitive))

console.log(texto.split(regexDois))

console.log(texto.split(regexBd))