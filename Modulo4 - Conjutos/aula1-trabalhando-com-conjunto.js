const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// para definirmos uma classe (ou conjunto) de caracteres usamos []
const regexPares = /[02468]/g // equivalente a 0|2|4|6|8
console.log(texto.match(regexPares));

const textoJoao = 'João não vai passear na moto';
const regexComESemAcento = /n[aã]./g
console.log(textoJoao.match(regexComESemAcento))