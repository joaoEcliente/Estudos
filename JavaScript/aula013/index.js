// Function

let largura = prompt('Digite a largura: ')
let comprimento = prompt('Digite o comprimento: ')

calcularTerreno(largura, comprimento);

function calcularTerreno(largura, comprimento){
    let largura_ = parseFloat(largura);
    let comprimento_ = parseFloat(comprimento);

    let area = largura_ * comprimento_;

    document.write('A área do terreno é de: ' + area + ' Metros quadrados.');
}