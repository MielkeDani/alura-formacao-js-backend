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

function ClientePoup ( nome, cpf, email, saldo, saldoPoup )
{ 
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}


const ju = new ClientePoup ('Ju', '147582396', 'email@gmail.com', 100, 200) ;

console.log(ju) ; 

ClientePoup.prototype.depositarPoup  = function ( valor ) { 
    this.saldoPoup += valor 
}

ju.depositarPoup(30) ; 

console.log(ju.saldoPoup) ; 

console.log(ju) ; 