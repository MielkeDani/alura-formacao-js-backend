class Cliente { 
    constructor(nome, email, cpf , saldo) { 
        this.nome = nome 
        this.email = email
        this.cpf= cpf
        this.saldo = saldo
    }

    depositar( valor ) { 
        this.saldo += valor
    }

    exibirSaldo() { 
        console.log(this.saldo)
    }

}

class ClientePoup extends Cliente { 
    constructor(nome, email, cpf,saldo, saldoPoup) { 
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor) { 
        this.saldoPoup += valor 
    }
}

const andre = new ClientePoup ( 'André', 'andre@email.com' , 123456789 , 200, 100 ) 

console.log(andre) ; 

andre.depositar(50) ; 
andre.depositarPoup(200) ; 
/*
Mesmo sem mudar o cliente andre, onde estava o campo depositar, 
como tem o extends juntando as duas classes, me permite mostrar 
os dois valores sem que ter que mudar na outra classe
*/
console.log(andre) ; 