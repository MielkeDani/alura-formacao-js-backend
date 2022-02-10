const cliente = {
    nome: 'Daniel' , 
    idade: 21, 
    cpf: '04832113038', 
    email: 'danielvmielke@outlook.com' , 
    fones: ['5553981447571', '5554981717544'] ,
    depedente : [{
    nome: 'Sara' , 
    parentesco : 'filha' , 
    dataNasc : '20/03/2021'
}]
}

console.log(cliente) ; 

cliente.depedente.push({
     nome: 'Samia Maria', 
     parentesco: 'mãe' , 
     dataNasc: '04/01/2014'
}
) 

console.log(cliente) ; 

const filhaMaisNova = cliente.depedente.filter(depedentevar => depedentevar.dataNasc === '04/01/2014')

console.log(filhaMaisNova[0].nome) ; 