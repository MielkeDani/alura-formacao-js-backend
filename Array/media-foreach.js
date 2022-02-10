const notas = [10, 6.5,8,7.5]

let somaNotas = 0 

// FOR + MODERNO
// SOMANDO I++ 
//  CALLBACK -> FUNÇÃO QUE CHAMA FUNÇÃO
// NESSE EXEMPLO ARROW FUNCTION, PORÉM TIPO DE DECLARAÇÃO TMB É USADO
notas.forEach(notas => { 
    somaNotas += notas
})

let media = somaNotas / notas.length
console.log(media) ;  

notas.forEach