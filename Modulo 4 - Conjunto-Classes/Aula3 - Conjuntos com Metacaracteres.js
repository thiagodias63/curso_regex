const texto = '1,2,3,4,5,6,a.b c!d?e'
console.log(texto.match(/[+.?*$]/g)); // não precisa de scape dentro do conjunto
console.log(texto.match(/[$-?]/g)); // intervalo
console.log(texto.match(/[$\-?]/g)); // ifen como literal
console.log(texto.match(/[-?]/g)); // não é um intervalo
