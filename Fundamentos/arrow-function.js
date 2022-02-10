// MODELO TRADICIONAL ATÉ AGORA 
function apresenta(nome) { 
    return `meu nome é ${nome}`
}
console.log(apresenta('Daniel')) ; 

//MODELO ARROW FUNCTION
//CURTO, RÁPIDO
// VANTAGENS EM OBJETO
// SEMELHANTE A EXPRESSÃO 
const apresentaArrow = nome => `meu nome é ${nome}` ; 
console.log(apresentaArrow('Daniel')) ;
const soma = ( num1, num2) => num1 + num2; 

// MODELO FUNCTION ARROW + 1 LINHA 

const somanumpeq = (num1, num2) => {
    if((num1 > 0 && num1 < 10) && (num2 > 0 && num2 < 10)){
        return num1 + num2;
    } else {
        return "Somente números de 1 a 9";
    }
}
console.log(somanumpeq(4,3)) ; 