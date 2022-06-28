// com var eu posso declarar duas vezes a mesma variável e o valor será o ultimo valor declarado
var a = 'a';
var a = 'b';

// com let eu posso declarar uma variável somente uma vez
let b = 'c';
//let b = 'd'; -> error

console.log(Math.floor(5 / 2)); // 2
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1

//escapar uma aspa para que não seja considerada como o fim de uma string ao colocar a barra invertida (\) na frente da aspa
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);

// array multidimensional
const teams = [["Bulls", 23], ["White Sox", 45]];
