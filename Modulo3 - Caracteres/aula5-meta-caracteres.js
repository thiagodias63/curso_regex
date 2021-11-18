// Representantes
// . = Um caractere qualquer
// [] = Um conjunto de caracteres permitidos
// [^] = Um conjunto negado de proibidos

// Quantificadores
// ? = zero ou um
// * = zero ou mais
// + = um ou mais
// {n,m} = de n até m

// Ancoras
// ^ = inicio de uma linha
// $ = fim de linha
// \b = borda (inicio ou fim de palavara)

// \ = escape
// | = ou
// () = grupo
// \1..\9 = retrovisores

const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./
console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|!|\?| /
console.log(texto.split(regexSimbolos))