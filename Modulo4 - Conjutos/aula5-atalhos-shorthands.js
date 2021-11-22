// Atalho para: [a-zA-Z0-9_]   [A-Z] | [a-z] | _ | [0-9]
const w = /\w/

// Atalho para: ^[a-zA-Z0-9_] ^([A-Z] | [a-z] | _ | [0-9])
const W = /\W/

// Atalho para: [0-9]
const d = /\d/

// Atalho para: [^0-9] (não número)
const D = /\D/

// Atalho para: espaço, tab, nova linha e retorno de linha [ \t\n\r]
const s = /\s/

// Atalho para: não espaços [^ \t\n\r]
const S = /\S/