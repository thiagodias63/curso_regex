const texto = 'você precisa responder sim, não ou não sei!';
const regexPipeOu = /sim|não sei|não/g
console.log(texto.match(regexPipeOu))