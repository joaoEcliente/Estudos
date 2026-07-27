// Operadores aritméticos

// + 
// -
// *
// /
// %
// ++
// --

// parseint
// parsefloat

const numero1 = prompt('Digite o primerio valor:')
const numero2 = prompt('Digite o segundo valor:')

const num1 = parseInt(numero1);
const num2 = parseInt(numero2);

document.write('A adição de: ', num1, ' + ', num2, ' = ', num1 + num2, '<br>');
document.write('A subtração de: ', num1, ' - ', num2, ' = ', num1 - num2, '<br>');
document.write('A multiplicação de: ', num1, ' * ', num2, ' = ', num1 * num2, '<br>');
document.write('A divisão de: ', num1, ' / ', num2, ' = ', num1 / num2, '<br>');
document.write('O resto da divisão de: ', num1, ' % ', num2, ' = ', num1 % num2, '<br>');
document.write('O incremento de ', num1,' é: ', --num1);
document.write(num1, '<br>');
document.write('O decremento de ', num1,' é: ', --num1);
document.write(num1, '<br>');