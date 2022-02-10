
const cliente = {
    nome: 'Daniel' , 
    idade: 21, 
    cpf: '04832113038', 
    email: 'danielvmielke@outlook.com'
}

// Template String
// Crase + Objetos 
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);  

console.log(cliente.cpf.substring(0,3)) ;