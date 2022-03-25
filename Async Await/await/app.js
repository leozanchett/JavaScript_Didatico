const brainstormDinner = require('./library.js');


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}


// async/await version:
async function announceDinner() {
    //const meal = await brainstormDinner();
    await brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);  
    }).catch((erro ) => {
        console.log(`deu ruim em ${erro}`);
    });
}

//nativePromiseDinner();
announceDinner();