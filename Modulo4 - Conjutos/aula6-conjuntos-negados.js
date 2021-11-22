const texto = '1,2,3,4,5,6,a.b c!d?e[f'
const regexNegada1 = /[^0-9]/g // /D
console.log(texto.match(regexNegada1))

const regexNegada2 = /[^\d!\?\[\s\.]/g
console.log(texto.match(regexNegada2))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'
const regexNegada3 = /[^!-/:-@\s]/g
console.log(texto2.match(regexNegada3))