// Declaração Função
// FUNCTION 
// Repetição de Estrutura de Funções 

//Como escrever Funções 

//DECLARAÇÃO DE FUNÇÃO
function imprimeTexto(texto) {
    console.log(texto)
}

//Execução
imprimeTexto('outro texto') ; 

//FUNÇÕES QUE SERIAM VARIAVEIS, USA-SE RETURN 
function soma () {
    return  2 + 2 ; // ULTIMA LINHA DA FUNÇÃO
}


// FUNÇOES DENTRO DE FUNÇÕES 
imprimeTexto(soma()) ; 