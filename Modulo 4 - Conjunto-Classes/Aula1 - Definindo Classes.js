const texto = '1,2,3,4,5,6,a.b c!d?e'

// para definir uma classe (ou conjunto) de caracteres, use []
const regexPares = /[02468]/g
console.log(texto.match(regexPares));


const texto2 = 'São sempre os mesmos santos'
const regexComESemAcento = /s[aã]/ig
console.log(texto2.match(regexComESemAcento));
