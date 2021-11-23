// 1 - CPF
// Encontrar apenas os cpfs da lista
const cpf = `CPF dos aprovados: 
    020.533.776-71
    020.776.533-72
    533.020.776-73`

const regexCpf = /\d.*/g
const regexCpfCorrecao = /\d{3}\.\d{3}\.\d{3}-\d{2}/g
console.log(cpf.match(regexCpf));
console.log(cpf.match(regexCpfCorrecao));


// 2 - Telefones
// Encontrar apenas os telefones da lista
const telefones = `Lista telefonica
    (11) 3396-6594
    328596-33647
    858741236
`
const regexTelefone = /\(?\d{0,2}?\)?\s?\d{4,5}-?\d{4}/g
console.log(telefones.match(regexTelefone));
const regexTelefoneCorrecao = /\(?\d{0,2}?\)?\s?\d{4,5}-?\d{4}/g
console.log(telefones.match(regexTelefoneCorrecao));


// 2 - Emails
// Encontrar apenas os emails da lista
const emails = `Lista de e-mails
    thiago@gmail.com
    contatos_lindos@fabricadosbits.com.br
    melhores_@sites.ninja.br
    thiago@com
    @mail.com
`
const regexEmails = /(\w+@\w+(\.\w+)+)+/g
// equals
const regexEmailsCorrecao = /([\w.]+@\w+(\.\w+)+)+/g
console.log(emails.match(regexEmails));
console.log(emails.match(regexEmailsCorrecao));
