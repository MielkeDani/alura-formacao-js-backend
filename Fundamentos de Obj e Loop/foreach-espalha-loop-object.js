const clientes = [ 
    { 
        nome: 'Andre',
        cpf: '12312312312',
        dependentes : [{
            nome: 'Sarah' ,
            parentesco : 'filha' ,
            dataNasc: '20/03/2011',
        }, 
    {
        nome: 'Samia' ,
        parentesco : 'filha' ,
        dataNasc: '04/01/2014',
    }]
    },
    {
        nome: 'Juliana',
        cpf: '12312312312',
        dependentes : [{
            nome: 'Sophia',
            parentesco : 'filha' ,
            dataNasc: '30/08/2020',
        }]
    }
] ; 

//console.log(clientes)  
// ... -> Espalhar
const listDepedentes = []
clientes.forEach(a => 
    listDepedentes.push(...a.dependentes))

//[...clientes[0].dependentes,...clientes[1].dependentes]


console.table(listDepedentes) ;   