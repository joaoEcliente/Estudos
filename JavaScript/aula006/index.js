// ==
/*
if(6 == 6){
    console.log('Aluno de recuperação');
} else {
    console.log('Erro kkk');
}
*/

// === 

/*
if(6 === 6) {
    console.log('Valor e tipo identico.')
} else{
    console.log('Valor ou tipo errado.')
}
*/

// !=

/*
if(6 != 6) {
    console.log('Valores diferentes.')
} else {
    console.log('Valores não diferentes.')
}
*/

// !==

/*
if(6 !== '2'){
    console.log('Valor e tipo diferente.')
} else{
    console.log('Valor e tipo identico.')
}
*/

// <

/*
if(2 < 7) {
    console.log('Valor menor')
} else{
    console.log('Valor maior')
}
*/

// > 

/*
if(10 >  2) {
    console.log('Valor maior')
} else{
    console.log('Valor menor')
}
*/

// <=

/*
if(7 <= 7) {
    console.log('Valor menor ou igual')
} else{
    console.log('Valor maior')
}
*/

// >=

/*
if(7 >= 7) {
    console.log('Valor ,aior ou igual')
} else{
    console.log('Valor menor')
}
*/

// exemplo prático

const aluno = prompt('Digite o nome do aluno:');
const nota = prompt('Digite a nota media do aluno:');
const media = 7;

if(nota >= 7){
    document.write('Aluno: ', aluno, ' Aprovado!');
} else if(nota >= 4){
    document.write('Aluno: ', aluno, ' de recuperação.');
} else{
    document.write('Aluno: ', aluno, ' Reprovado...');
}