const cliente = {
    nome: 'Daniel' , 
    idade: 21, 
    cpf: '04832113038', 
    email: 'danielvmielke@outlook.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email' ] ; 
// Quando acessar a chaves, sempre usa os conchetes 
// console.log(cliente[chaves[0]]) ; 

chaves.forEach( info => console.log(cliente[info])) ; 

