const cliente = {
    nome: 'Daniel' , 
    idade: 21, 
    cpf: '04832113038', 
    email: 'danielvmielke@outlook.com' , 
    fones: ['5553981447571', '5554981717544'] 
}

cliente.dependentes = {
    nome: 'Sara' , 
    parentesco : 'filha' , 
    dataNasc : '20/03/2021'
}

console.log(cliente) ; 

cliente.dependentes.nome = 'Sara Silva' ; 

console.log(cliente) ; 
