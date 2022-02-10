//Variáveis 

//var altura = 5 ; 
//var comprimento = 7; 

//area = altura * comprimento ; 

//console.log(area) ; 
//var area ; 

// REATRIBUÍVEL, NÃO RESPEITA O BLOCO
// ---------------------------

//let forma = 'retângulo'
//let altura = 5 ; 
//let comprimento = 7; 
//let area ;  


//area = altura * comprimento ; 

//if ( forma === 'retângulo') { 
//    area = altura * comprimento
//} else {
//    area = (  altura * comprimento) / 2 
//}

 // console.log(area) ; 

// 
// REATRIBUÍVEL , RESPEIRA O BLOCO
// USA-SE MAIS O LET PARA QUANDO PRECISAR MUDAR O VALOR, REATRIBUIÇÃO
// - -------

const forma = 'quadrado' ; 
const altura = 5 ;
const comprimento  = 7  ; 
let  area ; 

if ( forma === 'triangulo') { 
   area = altura * comprimento 
} else { 
   area = ( altura * comprimento ) / 2 
}



console.log(area) ; 
 
// CONST NÃO É REATRIBUÍVEL
// RESPEITA BLOCO