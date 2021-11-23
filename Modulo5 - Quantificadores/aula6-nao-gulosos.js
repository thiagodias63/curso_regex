const texto = '<div> conteudo 01 </div><div> conteudo 2 </div>'

// quantificadores são gulosos (greedy)
// div, caracter coringa uma ou mais vezes e fecha div
console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));

// quantificadores não gulosos (lazy)
console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));