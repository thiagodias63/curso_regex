const palavras = `dia diatonico diafragma media wikipedia bom_dia melodia radial dia_a_dia`

console.log(palavras.match(/\bdia\w+/gi)); // começa com dia
console.log(palavras.match(/\w+dia\b/gi)); // termina com dia
console.log(palavras.match(/\w+dia\w+/gi)); // entre dia
console.log(palavras.match(/\bdia\b/gi)); // começa e termina com dia

// borda não considera acentos
const palavrasAcentuadas = `dia diatônico diafragma, média wikipédia bom-dia melodia radial`
console.log(palavrasAcentuadas.match(/\bdia\b/gi)); // erro, pois trás 4 dia
console.log(palavrasAcentuadas.match(/(\S*)?dia(\S*)?/gi)); // a vírgula entra nessa solução :C
console.log(palavrasAcentuadas.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi)); // a vírgula não entra nessa solução :)