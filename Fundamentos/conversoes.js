// Conversoes 
// Tipos de Dados 

// conversão implicita 
const number = 456 ; 
const numbertxt = '456' ; 

console.log(number == numbertxt ) // == conversão implicita, comparação pelo valor  
console.log(number == numbertxt ) // === comparação 'real', comparação valor e tipo 

console.log(number + numbertxt ) // + -> adição com algum tipo de string, ele irá concatenar

// Number 
// Converte para o número
console.log(number + Number(numbertxt))

//Strig 
// Converte para String

// conversão explícita 