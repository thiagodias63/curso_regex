// desafio: fazer uma regex que ache o a b e os tres espaços
const texto = 'a   b'
const regexTresEspacos = /a\s\s\sb/g
console.log(texto.match(regexTresEspacos))

//nos futuros modulos do curso, são mostrados outras formas
const regexComOperadorMais = /a\s+b/g
console.log(texto.match(regexComOperadorMais))

const regexComQuantificador = /a\s{3}b/g
console.log(texto.match(regexComQuantificador))