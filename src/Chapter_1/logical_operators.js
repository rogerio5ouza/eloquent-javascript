// JavaScript suporta três operadores lógicos: AND, OR, and NOT.
//O operador AND (&&) representa o & lógico. É um operador binário e seu resultado é verdadeiro apenas se ambos os valores dados a ele forem verdadeiros:

console.log(true && false);
// false
console.log(true && true);
// true

// O operador || denota lógico OR. Produz verdadeiro se algum dos valores dados a ele for verdadeiro:

console.log(false || true);
// true
console.log(false || false);
// false

// NOT é escrito com um ponto de exclamação (!). É um operador unário que inverte o valor dado a ele -! True fornrce falso, False fornece True.

verdadeiro = true
falso = false

console.log(verdadeiro != true);
console.log(verdadeiro != false);
console.log(verdadeiro);
console.log(falso);

// O último operador lógico não é unário, nem binário, mais alternativo, operando três valoes. É escrito com um ponto de interrogação e dois pontos:

console.log(true ? 1 : 2);
// 1
console.log(false ? 1 : 2);
// 2