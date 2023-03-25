// Variables que incluyen alfabetos a usar y conenectan con el DOM
const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";
const messageToDecrypt = document.getElementById('inputTextAreaToDecrypt');
const messageToEncrypt = document.getElementById('inputTextAreaToEncrypt');
const decryptBtn = document.getElementById('decryptBtn');
const encryptBtn = document.getElementById('encryptBtn');
const clearBtn = document.getElementById('clearBtn');

//Inicializamos los valores de las áreas de texto 
messageToDecrypt.value = '';
messageToEncrypt.value = '';

// Función para preparar el texto antes de procesarlo
const getTextReady = (text) => text.toLowerCase();

// Función para procesar el texto plano y encriptarlo usado bucles anidados
const encryptMessage = () => {
  var inputText = getTextReady(messageToDecrypt.value);
  var encryptedTextStorage = '';
  //Recorre el contenido de la variable "inputText" que contiene el valor introducido en el area de texto pasada a minusculas
  for (var i = 0; i < inputText.length; i++) {
    var encryptedChar = '';
    //Recorre la variable que contiene el alfabeto plano
    for (var j = 0; j < plainAlphabet.length; j++) {
      // Compara el carácter actual con el alfabeto plano
      if (inputText[i] === plainAlphabet[j]) {
        // Si coincide, agrega el carácter encriptado correspondiente del alfabeto encriptado
        encryptedChar = encryptedAlphabet[j];
        break;
      }
    }
    // Agrega el carácter encriptado al texto encriptado 
    encryptedTextStorage += encryptedChar;
  }
  // Actualiza el valor del área de texto encriptado
  messageToEncrypt.value = encryptedTextStorage;
};

  // Función para procesar el texto encriptado y pasarlo a plano usando el método indexOf
const decryptMessage =() => {
    var inputText = getTextReady(messageToEncrypt.value);
    var decryptedTextStorage = '';
    //Recorre el contenido de la variable "inputText"
    for (var i = 0; i < inputText.length; i++) {
      // Comprueba si el carácter actual es un espacio
      if (inputText[i] === ' ') {
        // Si es así, agrega un espacio al texto desencriptado
        decryptedTextStorage += ' ';
      } else {
        var index = encryptedAlphabet.indexOf(inputText[i]);
        // Si se encuentra el índice, agrega el carácter original correspondiente
          if (index !== -1) {
          decryptedTextStorage += plainAlphabet[index];
          } else {
          decryptedTextStorage += '';
        }
      }
    }
   // Actualiza el valor del área de texto desencriptado
    messageToDecrypt.value = decryptedTextStorage;
  }

// Función para limpiar ambas areas de texto con un botón
const clearText = () => {
  messageToDecrypt.value = '';
  messageToEncrypt.value = '';
}

// Event Listeners
decryptBtn.addEventListener('click', decryptMessage);
encryptBtn.addEventListener('click', encryptMessage);
clearBtn.addEventListener('click', clearText);