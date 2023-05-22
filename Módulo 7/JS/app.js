//Validar un IBAN
//Caso 1
function validateIban(iban) {
    var regularExp = /^[A-Z]{2}\d{22}$/;
    return regularExp.test(iban);
  }

console.log(validateIban("ES6600190020961234567890"));
console.log(validateIban("ES6600190020961234567"));

//Caso 2
function validateIban(iban) {
    var regularExp = /^(ES\d{2})(\s?\d{4}){5}$/;
    return regularExp.test(iban);
  }

  console.log(validateIban("ES6600190020961234567890"));
  console.log(validateIban("ES66 0019 0020 9612 3456 7890"));
  console.log(validateIban("ES66 0019 0020 9612 3456    7890"));

//Caso 3 (devolvemos el código del país y el dígito de control en forma de objeto y si algo no coincide un null)
function extractDataFromIban(iban) {
    var regularExp = /^(ES)(\d{2})(\s?\d{4}){5}$/;
      if (regularExp.test(iban)) {
        var countryCode = iban.slice(0, 2); 
        var controlDigit = iban.slice(2, 4); 
      return {
        countryCode: countryCode,
        controlDigit: controlDigit,
        };
      }else{
      return null;
      }
}
console.log(extractDataFromIban("ES6600190020961234567890"));
console.log(extractDataFromIban("ES66 0019 0020 9612 3456 7890"));
console.log(extractDataFromIban("AZ66 0019 0020 9612 3456 7890"));

//Validar matrícula de coche
//Caso 1
function validatePlateNumber(plateNumber) {
  var regularExp = /^\d{4}[- ]?[A-Z]{3}$/;
  return regularExp.test(plateNumber);
}
console.log(validatePlateNumber("2021 GMD"));
console.log(validatePlateNumber("2345-GMD"));
console.log(validatePlateNumber("4532BDB"));
console.log(validatePlateNumber("0320-AAA"));

//Caso 2
const dissectPlateNumber = (plateNumber) => {
  //Añadimos paréntesis para crear grupos de captura en la expresión regular
  var regularExp =/^(\d{4})[- ]?([A-Z]{3})$/;
  var result = plateNumber.match(regularExp);
  if (result) {
    var numberSide = result[1];
    var letterSide = result[2];
   return {
     numberSide,
     letterSide,
    };
  }else{
    return null
  }
} 
console.log(dissectPlateNumber("2021 GMD"));
console.log(dissectPlateNumber("2345-GMD"));
console.log(dissectPlateNumber("4532BDB"));
console.log(dissectPlateNumber("0320-AAA"));

//Opcionales
//Extraer imágenes de un fichero HTML
// Caso 1
const extractOneImg = document.getElementsByTagName('img')[0].src;
console.log(extractOneImg)

// Caso 2
const extractAllImg = document.getElementsByTagName('img');
const imageSources = [];

for (var img of extractAllImg) {
  imageSources.push(img.src)
}
console.log(imageSources);

//Validar sintaxis tarjeta de crédito
//caso 1
function validateMastercard(cardNumber) {
  var regularExp = /^(50|51|52|53|54|55)[0-9]{2}([ -]?[0-9]{4}){3}$/;
  return regularExp.test(cardNumber);
}

var creditCards = ["5299 6400 0000 0000","5299-6400-0000-0000","5299640000000000","1023-00-00230-000"];

// Validar y mostrar resultados por consola
function checkCreditCards(creditCards){
for (var i = 0; i < creditCards.length; i++) {
  var cardNumber = creditCards[i];
  var isValid = validateMastercard(cardNumber);
  
  if (isValid) {
    console.log(cardNumber + ": Valid");
  } else {
    console.log(cardNumber + ": Not valid");
  }
}
}
checkCreditCards(creditCards);

//Caso 2
function validateMastercardCaseTwo(cardNumber) {
  var regularExp = /^(50|51|52|53|54|55)[0-9]{2}([ -]?[0-9]{4}){3}$/;
  
  if (!regularExp.test(cardNumber)) {
    return false; 
  }
  var group = cardNumber.match(/[0-9]{4}/g);
  return group;
}

var creditCard = "5599 6400 0000 0000";

const extractDigitGroups = (creditCard) => {
  var digitGroups = validateMastercardCaseTwo(creditCard);

    if (digitGroups) {
    console.log(digitGroups); 
    }else{
    console.log("Not Valid CreditCard");
    }
};
extractDigitGroups(creditCard);


// Buscar Expresiones regulares para comprobar si una clave es fuerte o no
//Clave compleja, que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, un numero y un caracter especial.
function strongPingCheck(pin) {
  var regularExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!¡¿?])(?=.*[^\s]).{8,}$/;
  return regularExp.test(pin);
}

console.log(strongPingCheck("Abcd123!")); 
console.log(strongPingCheck("abcd1234")); 
console.log(strongPingCheck("abcd1234!")); 

//Clave moderada,  Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.
function moderatePingCheck(pin) {
  var regularExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regularExp.test(pin);
}

console.log(moderatePingCheck("Abcd1234")); 
console.log(moderatePingCheck("abcd1234")); 
console.log(moderatePingCheck("ACD123")); 

//Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó www.lemoncode.net ó lemoncode.net).
function validateUrl(url) {
  var regularExp = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z0-9-]+(\/.*)?$/;
  return regularExp.test(url);
}

console.log(validateUrl("https://www.lemoncode.net")); 
console.log(validateUrl("www.lemoncode.net")); 
console.log(validateUrl("lemoncode.net")); 
console.log(validateUrl("https://lemoncode")); 
console.log(validateUrl("www.lemoncode")); 
console.log(validateUrl("lemoncode")); 

//Validar que un color en Hexadecimal está bien formado.
function validateIfIsHexColor(color) {
  var regularExp = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return regularExp.test(color);
}

console.log(validateIfIsHexColor("#FFA500")); 
console.log(validateIfIsHexColor("#123")); 
console.log(validateIfIsHexColor("#abcd")); 
console.log(validateIfIsHexColor("#GGGGGG"));

