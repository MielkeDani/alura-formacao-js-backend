function Cliente ( nome, cpf, email, saldo)
{ 
    this.nome= nome 
    this.cpf=cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new Cliente ('Andre', '147582396', 'email@gmail.com', 100) ; 

console.log(andre) ; 