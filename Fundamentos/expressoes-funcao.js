// FORMATOS DE FUNÇÕES 

// 1. BLOCO DE CODE

function minhaFuncao(param) { 
    // bloco de code
}

minhaFuncao('param') ; 

// 2. EXPRESSÃO DE FUNÇÃO 
// MAIS CURTAS, ANONIMA

const soma = function(num1, num2) {return num1 + num2} ; 
console.log(soma(1,1)) ;


// DIFERENÇA PRICIPAL 
// QUANDO CRIAR FUNÇÕES PODEMOS CHAMAR ELA ONDE QUISERMOS
// EXPRESSÃO DE FUNÇÃO, RESPEITA A 'ORDEM' DAS LINHAS 
// HOISTING 
function apresenta () { 
    return 'olá' 
}
console.log(apresenta()) ; 