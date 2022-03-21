// Import the encryptors functions here.
const encrypt = require('./encryptors.js');

  const tipoEncodeDecode = (tipo, str) => {
    switch(tipo){
      case 0:
        return encrypt.caesarCipher(str, 13);
      case 1:
        return encrypt.symbolCipher(str);
      case 2:
        return encrypt.reverseCipher(str);
    }
  }

  const encodeMessage = (str, encodeTipe) => {
    // Use the encryptor functions here.
    return tipoEncodeDecode(encodeTipe, str);
  }
  
  const decodeMessage = (str, encodeTipe) => {
    // Use the encryptor functions here.
    return tipoEncodeDecode(encodeTipe, str);
  }
  
  // User input / output.
  
  const handleInput = (userInput) => {
    let countEncode = 2;
    while(countEncode >= 0) {
      const str = userInput.toString().trim();
      let output;
      if (process.argv[2] === 'encode') {
        output = encodeMessage(str, countEncode);
      } 
      if (process.argv[2] === 'decode') {
        output = decodeMessage(str, countEncode);
      } 
      process.stdout.write(output + '\n');
      countEncode--;
    }
    process.exit();
  }
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);