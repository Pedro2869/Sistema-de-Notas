/* ### Transformar notas Escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/
// Primeiro Passo: criar e determinar as variáveis

let note = document.querySelector('input');
// Segundo Passo: criar condições de acordo com as notas
// Se a nota for 90 ou maior, mostra-se A
// Se a nota for entre 89 e 89, mostra-se B
// Se a nota for entre 70 e 79, mostra-se C
// Se a nota for entre 60 e 69, mostra-se D
// Se a nota for menor que 60, mostra-se F