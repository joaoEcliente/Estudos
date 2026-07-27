//Operadores lógicos

// && (porta and)
/*
if(10 >= 5 && 10 <= 14){
    console.log('Aprovado"')
} else{
    console.log('Reprovado"')
}
*/

// || (porta or)

/*
if(10 >= 5 || 10 >= 3){
    console.log('ainda tem chance.')
} else{
    console.log('Caso perdido...')
}
*/

// ! (Porta not)

/*
if(!(5 > 6 && 5 < 4)){
    console.log("Era pra ser aprovado, mas é reprovado por causa da orta not.")
} else{
    console.log('Deu erro')
}

*/

// Exercício prático

const nota = prompt('Digite a nota do aluno:')
const faltas = prompt('Digite a quantidade de faltas do aluno:')

if(nota >= 6 && faltas <= 15){
    document.write('Aluno aprovado...')
} else{
    document.write('Aluno reprovado, pois não atingiu as expectativas esperadas...')
}