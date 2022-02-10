// Lista dentro de Listas 

const alunos = ['João', 'Juliana', 'Caio', 'Ana'] ; 
const mediaAlunos = [10,7,9,6]



let listaDeNotasEAlunos = [ alunos, mediaAlunos] ; 

// INCLUDES - > SE ESTÁ INCLUSO, BUSCA O VALOR NA LISTA -> true/false 
//INDEXOF  -> RETORNA A POSIÇÃO DO PARÂMETRO 

const exibeNomeAluno = (nomedoAluno) => {
    if ( listaDeNotasEAlunos[0].includes(nomedoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomedoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else { 
        return 'Aluno não está cadastrado'
    }
}

console.log(exibeNomeAluno('joão')) ; 