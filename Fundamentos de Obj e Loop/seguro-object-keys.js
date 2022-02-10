/*
METODOS DE OBJETO
FOR IN 
    MOSTOU RELATÓRIO, FILTRANDO OBJETOS PRIMITIVOS

OBJECT.[ KEYS, VALUES, ENTRIES]
    KEY -> COLUNAS
    VALUES -> RESULTADOS
    ENTRIES -> KEY E VALUES
*/ 

const cliente = {
    nome: 'Daniel' , 
    idade: 21, 
    cpf: '04832113038', 
    email: 'danielvmielke@outlook.com' , 
    fones: ['5553981447571', '5554981717544'] ,
    dependentes : [
    {
        nome: 'Sara Silva' , 
        parentesco : 'filha' , 
        dataNasc : '20/03/2021' } , 
    {
     nome: 'Samia Maria', 
     parentesco: 'mãe' , 
     dataNasc: '04/01/2014' } 
     
    ], 
    saldo: 100 ,
    depositar: function(valor) { 
        this.saldo += valor 
    }
}

const propsClientes = Object.keys(cliente) ; 

//console.log(propsClientes) ; 

function ofereceSeguro(obj) {
    const propsClientes = Object.keys(obj) ; 
    if ( propsClientes.includes('dependentes')) { 
        console.log(`Oferta de Seguro de vida para ${obj.nome}`) ; 
    } else { 
        console.log('Não há dependentes')
    } 
}

ofereceSeguro(cliente) ; 

