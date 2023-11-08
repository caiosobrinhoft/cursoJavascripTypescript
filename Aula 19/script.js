let a = [1, 2, 3];
let b = a;
//b aponta para a
let c = [...a]; //copia a em c

console.log(a, b);

a.push(4);
console.log(a, b);
//agora b vai retornar [1 2 3 4], pois os valores são passados por referencia em arrays