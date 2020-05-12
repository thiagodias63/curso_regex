const texto = `1,2,3,4,5,a.b c!d?e  -
f_g`

console.log(texto.match(/\D/g));
console.log(texto.match(/[^0-9]/g));
console.log(texto.match(/[^\d!\?\[\s,\.]/g));
console.log(texto.match(/[^\D]]/g));


