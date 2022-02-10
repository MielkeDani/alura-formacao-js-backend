const cliente = {
    nome: 'Daniel' , 
    idade: 21, 
    cpf: '04832113038', 
    email: 'danielvmielke@outlook.com'
}
console.log(cliente) ; 

// Para adicionar valores, objeto.'nome do novo campo' = valor 
cliente.fone = '53981447571' ; 

console.log(cliente) ; 
 
// JS atualiza o valore, substitui já existente quando dimensão já existe. 
cliente.fone = '5553981447571' ; 
console.log(cliente) ; 


// Para deleter campos, só escrever a palavra delete a frente do caso adicioanr
delete cliente.fone  ; 
console.log(cliente) ; 
