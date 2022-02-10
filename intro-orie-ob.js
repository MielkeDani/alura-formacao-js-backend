// BOAS PRATICAS DE CLASSE, SEMPRE PRIMEIRA LETRA MAIUSCULA 

class Cliente { 
    //ATRIBUTOS DA CLASSE
    constructor(nome, email, cpf , saldo) { 
        this.nome = nome 
        this.email = email
        this.cpf= cpf
        this.saldo = saldo
    }

    //COMPORTAMENTO DA CLASSE
    depositar( valor ) { 
        this.saldo += valor
    }

    //DECLARAÇÃO DA FUNÇÃO DO COMPORTAMENTO
    exibirSaldo() { 
        console.log(this.saldo)
    }

}


const andre = new Cliente( 'Andre','andre@gmail.com' ,'1597832637', 100) 

//console.log(andre) ; 
andre.exibirSaldo() ; 