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


const myArray = [["John", 23], ["cat", 2]];

let removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);


const myList = [];
myList.unshift(["Chocolate", 35]);
myList.unshift(["Coffee", 25]);
myList.unshift(["Milk", 15]);
myList.unshift(["Bread", 10]);
myList.unshift(["Eggs", 5]);
console.log(myList);


function trueOrFalse(wasThatTrue) {
    return wasThatTrue ? "Yes, that was true" : "No, that was false";
    //return wasThatTrue && "Yes, that was true" || "No, that was false";
}

console.log(trueOrFalse(true));


typeof 3; // number
typeof "3"; // string
typeof true; // boolean
typeof undefined; // undefined
typeof null; // object
typeof {}; // object
typeof []; // array
typeof function () {}; // function
typeof Symbol(); // symbol
typeof new Date(); // object
typeof new Error(); // object


1 != 2; // true
1 == 2; // false
1 === 2; // false
1 !== 2; // true

