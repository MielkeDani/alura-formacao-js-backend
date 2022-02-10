const cliente = {
    nome: 'Daniel' , 
    idade: 21, 
    cpf: '04832113038', 
    email: 'danielvmielke@outlook.com' , 
    fones: ['5553981447571', '5554981717544'] ,
    depedentes : [
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

let relatorio = '' ; 

for ( let info in cliente) 
{ 
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue
    } else { 
        relatorio += `
        ${info} ==> ${cliente[info]}`
    }
    
}

console.log(relatorio) ; 