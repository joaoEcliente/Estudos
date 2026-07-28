function calcular(){
    var operacao = document.getElementById('operacao').value;
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);


    if(num1 == '' || num1 == null) {
        alert('Digitar valor válido.');
        return false;
    }

    if(num2 == '' || num2 == null) {
        alert('Digitar valor válido.');
        return false;
    }

    var soma = null;

    switch(operacao){
        case '1': // subtração
            soma = num1 - num2;
            break

        case '2': // Adição
            soma = num1 + num2;
            break

        case '3': // Multiplicação
            soma = num1 * num2;
            break

        case '4': // Divisão
            soma = num1 / num2
            break

        default:
            alert('Opção inválida')
            return false
    }

    document.getElementById('resultado').value = soma;
}