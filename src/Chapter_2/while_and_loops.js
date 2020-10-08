/*
Considere um programa que produz todos os números pares de 0 a 12. Uma maneira de escrever isso é a seguinte:
*/

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

/*
Isso funciona, mas a ideia de escrever um programa é fazer algo funcionar menos, não mais. Se precisássemos de todos os
números pares menores que 1.000, essa abordagem seria impraticável. O que precisamos é uma maneira de executar um trecho
de código várias vezes. Essa forma de fluxo de controle é chamada de Loop.

O fluxo de controle de Loop nos permite voltar a algum ponto no programa onde
estávamos antes de repeti-lo com nosso estado atual do programa.
*/

let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

/*
Vamos escrever um programa que faz algo útil, um programa que que calcula a mostra o valor de 2^10 (2 elevado a 10ª potência).

Usamos dois bindings: um para controlar o resultado e outro para contar quantas vezes multiplicamos esse resultado por 2.
O Loop testa se o segundo binding(counter) atingiu 10 e, se não, atualiza os bindings.
*/

let result = 1;
let counter = 0;

while (counter < 10) {
    result = result * 2; // 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024
    counter = counter + 1; // 1, 2, 3, 4, 5, 6, 7, 8, 9 
}

console.log(result); // 1024