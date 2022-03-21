/*
  Em muitos casos, os módulos exportam um grande número de funções, mas apenas uma ou duas delas são necessárias. 
  Você pode usar a desestruturação de objetos para extrair apenas as funções necessárias.
  antes: const converters = require('./converters.js');
  depois: const { celsiusToFahrenheit } = require('./converters.js');
*/

const { celsiusToFahrenheit } = require('./converters.js');
   
console.log(process.argv);
const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
  
console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);

  