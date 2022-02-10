const salaJS = [ 7,8,8,7,10,6.5,4,10,7] ; 
const salaJava = [6,5,8,9,5,6 ] ; 
const salaPy = [7,3.5,8,9.5] ; 

//MEDIA DE CADA SALA
//REDUCE -> LOOP 
//SOMANDO O TOTAL DE CADA LISTA 
function mediaSala (notasdaSala) { 
    const somaNotas = notasdaSala.reduce((acum, atual) => atual + acum ,0 )
    return somaNotas/notasdaSala.length
}

console.log(`Média da Sala de JS ${mediaSala(salaJS)}`) ; 
console.log(`Média da Sala de Java ${mediaSala(salaJava)}`) ; 
console.log(`Média da Sala de Py ${mediaSala(salaPy)}`) ; 