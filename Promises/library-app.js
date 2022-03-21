// ------------------------------------------------------------------------------------------ Chaining Multiple Promises

const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
    .then((resolvedValueArray) => {
        console.log('first then ' + resolvedValueArray);
        return processPayment(resolvedValueArray); 
    })
    .then((resolvedValueArray) => {
        console.log('segundo then ' + resolvedValueArray);
        //return shipOrder(resolvedValueArray); 
        return 'teste';
    })
    .then((successMessage) => {
        console.log('MENSAGEM DE SUCESSO');
        console.log(successMessage);
    })
    .catch((errorMessage) => {
    console.log(errorMessage);
    });




checkInventory(order)
    .then((resolvedValueArray) => {
       return processPayment(resolvedValueArray);
    }).then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray);
    }).then((successMessage) => {
        console.log(successMessage);
    });