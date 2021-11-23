const texto = 'O joão recebeu 120 milhões apostando 6 9 21 23 45 46'

// para definir o quantificador você utiliza chaves {}

// número com 1 ou 2 digitos
console.log(texto.match(/\d{1,2}/g));
// apenas números com 2 digitos
console.log(texto.match(/[0-9]{2}/g));
// apenas números com o máximo de digitos possíveis, a partir de 1
console.log(texto.match(/[0-9]{1,}/g));

// palavras com 7 digitos (até o setimo digito) // desconsiderou a acentuação
console.log(texto.match(/\w{7}/g));
// palavras com 7 digitos (todos os digitos) // considerou a acentuação
console.log(texto.match(/[\wõ]{7,}/g));

// Entre 1 caracter e 2, com bordas
console.log(texto.match(/\b\d{1,2}\b/g));