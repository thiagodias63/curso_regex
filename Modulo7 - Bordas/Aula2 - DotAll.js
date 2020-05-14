const texto = `Romário era um excelente jogador\n, mas hoje é um político questionador`
// console.log(texto.match(/r/gi));
// console.log(texto.match(/^r/gi)); // no ínicio
// console.log(texto.match(/r$/gi)); // no final

// console.log(texto.match(/^r(.|\s)*r$/gi)); // borda inicial e final
console.log(texto.match(/^r[\s\S]*r$/gi)); // DOT ALL borda inicial e final