// os intervalos tem que respeitar a ordem da tabela unicode

// intervalos válidos
const regexIntervaloAlfabeticoMaiusculo = /[A-Z]/
const regexIntervaloAlfabeticoMinusculo = /[a-z]/
const regexIntervaloAlfabeticoMaiusculoEMinusculo = /[A-z]/
const regexIntervaloNumerico = /[0-9]/g

// intervalos inválidos
const regexAlfabeticaInvalida1 = /[a-Z]/
const regexAlfabeticaInvalida2 = /[F-A]/
const regexAlfabeticaInvalida3 = /[b-a]/
const regexNumericaInvalida = /[3-1]/