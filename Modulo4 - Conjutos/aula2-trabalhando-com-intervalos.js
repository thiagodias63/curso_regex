const texto = '1,2,3,4,5,6,a.b c!d?e[f'

const regexIntervalosLetrasMinusculas = /[a-z]/g
console.log(texto.match(regexIntervalosLetrasMinusculas))

const regexIntervalosLetrasBD = /[b-d]/g
console.log(texto.match(regexIntervalosLetrasBD))

const regex2a4 = /[2-4]/g
console.log(texto.match(regex2a4))

const regexA3 = /[a-z1-3]/g
console.log(texto.match(regexA3))
