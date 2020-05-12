const texto = `Bom\n\tDia`
console.log(texto.match(/./gi)); // não aparece o \n
console.log(texto.match(/.../gi));
// se ele reconhece o \n, seria um DotAll; O DotAll não é implementado no javascript. Mas nas linguagens que é, ele usa a flag s /./s

