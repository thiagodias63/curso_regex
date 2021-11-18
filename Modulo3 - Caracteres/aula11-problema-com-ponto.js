// O \n não é resolvido pelo ponto (.)
// quando o ponto resolve pra tudo é chamado de "dot all", isso vem padrão em algumas linguagens

const texto = 'bom\ndia'
const regexPontoNormal = /./g
console.log(texto.split(regexPontoNormal))