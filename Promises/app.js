// ------------------------------------------------------------------------------------------ PROMISE

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
// Write your code below:
const myExecutor = (resolve, reject) => {
    if(inventory.sunglasses > 0){
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
}
  
const orderSunglasses = () => new Promise(myExecutor);
const orderPromise = orderSunglasses();
console.log(orderPromise);

// ------------------------------------------------------------------------------------------ setTimeout()
console.log("This is the first line of code in app.js.");
const usingSTO = () => {
  console.log('Two seconds later :D');
}

setTimeout(usingSTO, 2000);

console.log("This is the last line of code in app.js.");

// ------------------------------------------------------------------------------------------ then () / Success and Failure Callback Functions

let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
  });
   
  const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
   
  const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
  };
   
  prom.then(handleSuccess).catch(handleFailure);
