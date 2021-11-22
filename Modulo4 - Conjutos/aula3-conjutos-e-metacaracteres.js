const texto = '.$+*?-'
// obs: não precisa de escape dentro de conjuntos
const regexMeta = /[+.?*$]/g
console.log(texto.match(regexMeta))

const regexMetaComIntervalos = /[$-?]/g
console.log(texto.match(regexMetaComIntervalos))

const regexMetaSemIntervalo = /[$\-?]/g
console.log(texto.match(regexMetaSemIntervalo))