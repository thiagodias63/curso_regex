// 1 - CPF
// Encontrar apenas os cpfs da lista
const cpf = `CPF dos aprovados: 
    020.533.776-71
    020.776.533-72
    533.020.776-73`

const regexCpf = /\d.*/g
console.log(cpf.match(regexCpf));


// 2 - Telefones
// Encontrar apenas os telefones da lista
const telefones = `Lista telefonica
    (11) 3396-6594
    328596-33647
    9858741236
`
const regexTelefone = /(.{1}\d.{1,2}|\d){1,14}/g
console.log(telefones.match(regexTelefone));


// 2 - Emails
// Encontrar apenas os emails da lista
const emails = `Lista de e-mails
    thiago@gmail.com
    contatos_lindos@fabricadosbits.com.br
    melhores@sites.ninja.br
    thiago@com
    @mail.com
`

const regexEmails = /(\w+@\w+(\.\w+)+)+/g
console.log(emails.match(regexEmails));
