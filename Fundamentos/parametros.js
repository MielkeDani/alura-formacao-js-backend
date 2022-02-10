// Parametros de Função

function soma (num1, num2) {
    return num1+ num2 
}

console.log(soma(12,40)) ; 


// Parametros x Argumentos 
// PARAMETROS PASSAREMOS NA DECLARAÇÃO DA FUNÇÃO 
// ARGUMENTOS PASSAREMOS NA EXECUÇÃO DA FUNÇÃO
// Ordenação dos Paramtros 

//EXEMPLO 
function nomeIdade(nome, idade) { 
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade('Daniel',21)) ; 


//SE NÃO COLOCAR NADA, CONSEGUIMOS COLOCAR VALORES PRÉ-DEFIN 
function multiplica(num1 =1  , num2 =1 ) { 
    return num1 * num2
}


console.log(multiplica(soma(4,5) , soma(2,2)))

function comParametro(param) {
    console.log(param)
}
comParametro()