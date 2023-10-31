let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let aux;

/* solução basica
aux = varA;
varA = varB;
varB = varC;
varC = aux;
*/

//Versão melhorada
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);