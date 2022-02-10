// EXTRAIMOS A INFO DAS LISTAS -> CORTAMOS 
// SLICE 

const nomes = [ 'João', 'Juliana' , 'Ana', 'Caio', 'Lara', 'Marjorie',
 'Guilherme', 'Aline', 'Fabiana', 'Andre',
  'Carlos', 'Paulo', 'Bia', 'Vivian', 
  'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

  // LENGHT -> CONTAGEM DA LISTA
  // COMO QUERO PEGAR DIVIDIR PELA METADE 
  const sala1 = nomes.slice(0, nomes.length/2) ; 
  const sala2 = nomes.slice(nomes.length/2) ; 

  console.log(`Alunos da sala 1: ${sala1}.`) ; 
  console.log(`Alunos da sala 1: ${sala2}.`)