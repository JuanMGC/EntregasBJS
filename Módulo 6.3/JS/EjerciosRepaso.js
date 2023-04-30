//Implementa una función que muestre por consola “Hola Mundo”.
const saludo = () => {
    console.log("Hola Mundo");
}
saludo();
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.
const admitParameter = (name) => {
    console.log("Hola " + name);
}
admitParameter("Antonio");
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------

//Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.
const stringToUpper = (string) => {
    return string.toUpperCase();
}
console.log(stringToUpper("buenas noChes PoR la NoChe"))
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que dado un string como parámetro devuelva el string en minúsculas.
const stringToLower = (string) => {
    return string.toLowerCase();
}
console.log(stringToLower("BUENOS Dias PoR La MAñana"));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------

//Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.
const addParameters = (num1, num2) => {
    return num1 +num2;
}
console.log(addParameters (9, 134));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------

//Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.
function concatenateStrings  (stringOne, stringTwo, stringThree) {
    return stringOne + stringTwo + stringThree;
}
console.log(concatenateStrings("Hola, ", "¿Cómo ", "estas?"))
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------

//Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ inicializada a null.
function objectIdSetUp (object) {
    object.id = null;
}
const myObject = {name:"Luis", age: 21 };
objectIdSetUp(myObject);
console.log(myObject);
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null .
function esUndefinedOrNull(parametro) {
    return parametro === undefined || parametro === null;
  }
  console.log(esUndefinedOrNull(undefined)); 
  console.log(esUndefinedOrNull(null)); 
  console.log(esUndefinedOrNull("Hola")); 
  console.log(esUndefinedOrNull(0)); 
  console.log(esUndefinedOrNull(false)); 
  //----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.
function isPositiveOrNegative(number) {
    if (number > 0) {
      return "positivo";
    } else if (number < 0) {
      return "negativo";
    } else {
      return "cero";
    }
  }
  console.log(isPositiveOrNegative(5)); 
  console.log(isPositiveOrNegative(-5)); 
  console.log(isPositiveOrNegative(0)); 
   //----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100 o exactamente 100.
function compareWith100(number) {
    if (number > 100) {
      console.log("El número es mayor que 100");
    } else if (number < 100) {
      console.log("El número es menor que 100");
    } else {
      console.log("El número es exactamente 100");
    }
  }
compareWith100(120); 
compareWith100(80); 
compareWith100(100); 
  //----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name' o no.
function hasPropertyName(objeto) {
    return objeto.hasOwnProperty("name");
  }
const objeto1 = { name: "Juan", edad: 25 };
const objeto2 = { edad: 25 };

console.log(hasPropertyName(objeto1)); 
console.log(hasPropertyName(objeto2));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.

function checkIfDiv(num1, num2) {
    return num1 % num2 === 0;
  }
console.log(checkIfDiv(10, 2)); 
console.log(checkIfDiv(10, 3)); 
console.log(checkIfDiv(0, 5)); 
console.log(checkIfDiv(10, 0));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres.
function checkForLength(str, num) {
    return str.length === num;
  }
console.log(checkForLength("hola", 4)); 
console.log(checkForLength("adios", 6)); 
console.log(checkForLength("", 0)); 
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto)
function getDayOfTheWeek(dayNumber) {
  switch(dayNumber) {
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miércoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sábado";
    case 7:
      return "Domingo";
    default:
      return "El número ingresado no corresponde a un día de la semana válido.";
  }
}
console.log(getDayOfTheWeek(1));
console.log(getDayOfTheWeek(4));
console.log(getDayOfTheWeek(13));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.
function getMonthName(monthNumber) {
  switch(monthNumber) {
    case 1:
      return "Enero";
    case 2:
      return "Febrero";
    case 3:
      return "Marzo";
    case 4:
      return "Abril";
    case 5:
      return "Mayo";
    case 6:
      return "Junio";
    case 7:
      return "Julio";
    case 8:
      return "Agosto";
    case 9:
      return "Septiembre";
    case 10:
      return "Octubre";
    case 11:
      return "Noviembre";
    case 12:
      return "Diciembre";
    default:
      return "El número ingresado no corresponde a un mes válido.";
  }
}
console.log(getMonthName(3));
console.log(getMonthName(9));
console.log(getMonthName(25));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.
function getLongestArray(array1, array2) {
  if (array1.length >= array2.length) {
    return array1;
  } else {
    return array2;
  }
}
var x = [4, undefined, 38, 423567, 51,"car",true];
var p = [null, 25, 678,[3,9]];
console.log(getLongestArray(x,p))
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.
function compareFirstElement(array1, array2) {
  if (array1[0] === array2[0]) {
    return true;
  } else {
    return false;
  }
}
var x = [4, undefined, 38, 423567, 51,"car",true];
var p = [null, 25, 678,[3,9]];
console.log(compareFirstElement(x,p));
var x = [4, undefined, 38, 423567, 51,"car",true];
var p = [4,null, 25, 678,[3,9]];
console.log(compareFirstElement(x,p));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir, devuelva ‘undefined'.
    function getSecondElement(array) {
        if (array.length >= 2) {
          return array[1];
        } else {
          return undefined;
        }
      }

var numbers = [1, 7, 3, 16, 58];
var secondElement = getSecondElement(numbers);
console.log(secondElement); 
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------

//Implementa una función que admita un string como parámetro y devuelva la última letra.
function getLastChar(string) {
    return string.slice(-1);
  }
  var textSample = " Esto es un string";
  var lastChar = getLastChar(textSample);
  console.log(lastChar);
  //----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el resultado.
function swapFirstElementForLast(array) {
  var firstElement= array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = firstElement;
  console.log(array);
}

var x = [4, undefined, 38, 423567, 51,"car",true];
swapFirstElementForLast(x);
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el número
function showTextAccordingToNumber(timesNum, text) {
  for (var i = 0; i < timesNum; i++) {
    console.log(text);
  }
}
showTextAccordingToNumber(4,"Buenas noches")
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto.
function countObjectProperties(objeto) {
 var count = 0;
  for (var property in objeto) {
    count++;
  }
  return count;
}
const userData = { name: "Carlos", age: "38", city:"Lugo", country:"Spain"};
console.log(countObjectProperties(userData));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.
function showObjectProperties(objeto) {
  for (var propiedad in objeto) {
    console.log(objeto[propiedad]);
  }
}
const userFile = { name: "Maria", age: "31", city:"Caceres", country:"Spain"};
showObjectProperties(userFile);
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento
//del array multiplicado por dicho número. Devuelve el resultado.
function addNumbersByParameterTimes(array, num) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i] * num;
  }
  console.log(result);
}
var numbers = [2, 44, 699, 82];
addNumbersByParameterTimes(numbers,6);
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece
//dicho carácter en el string.
function countingChars(str, char) {
  var numTimes = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      numTimes++;
    }
  }
  return numTimes;
}
const message = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...";
const searchChar = "o";
console.log(countingChars(message, searchChar));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada elemento por consola.
function showArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
const mixed = [4, undefined, 38, 423567, 51,"car",true];
showArray(mixed);
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos
//son menores a dicho número, y cuántos no.
function countLowerNumbers(array, num) {
  var lowerNum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < num) {
      lowerNum++;
    }
  }
  const higherNum = array.length - lowerNum;
  console.log(`Hay ${lowerNum} elementos menores a ${num} y ${higherNum} elementos mayores o iguales a ${num}`);
}

countLowerNumbers([1,4,90,65,89],5);
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el segundo
function swapArrayContent(arr1, arr2) {
  // Creamos una copia temporal de arr1 para no perder sus valores originales
  const tempArr = [...arr1];

  // Intercambiamos los elementos de arr1 por los de arr2
  arr1.splice(0, arr1.length, ...arr2);

  // Intercambiamos los elementos de arr2 por los de tempArr (los originales de arr1)
  arr2.splice(0, arr2.length, ...tempArr);

  // Mostramos los arrays transformados por consola
  console.log('Array 1 transformado:', arr1);
  console.log('Array 2 transformado:', arr2);
}
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];

swapArrayContent(array1, array2);
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de
//los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.
function buildObjectFromArray(arr) {
  const objet1 = {};

  for (var i = 0; i < arr.length; i++) {
    const property = `prop${i+1}`;
    objet1[property] = arr[i];
  }

  return objet1;
}
const miArray = ['hola', 3, true];
console.log(buildObjectFromArray(miArray));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
//Muestra por consola cada elemento por el que iteres.
function moveThroughArrayStartingFromIndex(arr, initialIndex) {
  for (var i = initialIndex; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
const arrayTesting= ['Blue', 3, true, 'worl', 5, undefined];
moveThroughArrayStartingFromIndex(arrayTesting, 2);
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.
function checkForExixtingStringInArray(arr, str) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return true;
    }
  }
  return false;
}
const array7 = ['adios', 'hasta luego', 'hola', 'chau'];
console.log(checkForExixtingStringInArray(array7, 'hola'));
console.log(checkForExixtingStringInArray(array7, 'Buenos dias'));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden
//pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
//otra función equivalente que haga la traducción inversa.
const fruitsInSpanish = ['manzana', 'piña', 'naranja', 'melocoton'];
const fruitsInInglish = ['apple', 'pineapple', 'orange', 'peach'];

function translateSpanishInglish(fruit) {
  const index = fruitsInSpanish.indexOf(fruit);
  if (index !== -1) {
    return fruitsInInglish[index];
  } else {
    return null;
  }
}

function translateEnglishSpanish(fruit) {
  const index = fruitsInInglish.indexOf(fruit);
  if (index !== -1) {
    return fruitsInSpanish[index];
  } else {
    return null;
  }
}
console.log(translateSpanishInglish("manzana"));
console.log(translateEnglishSpanish("peach"))
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.
function backWardsText(text) {
  const testText = text.split('').reverse().join('');
  console.log(testText);
}
console.log(backWardsText("Esta es una prueba de texto al reves"));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.
function camelText (text) {
  var outputText = "";
  for (var i = 0; i < text.length; i++) {
    outputText += i % 2 === 0 ? text[i].toUpperCase() : text[i];
}
return outputText;
};

console.log(camelText("En un lugar de la mancha de cuyo nombre no quiero acordarme "));
//----------------------------------------------------------------------------------------------------------------------
//********************************************************************************************************************** 
//----------------------------------------------------------------------------------------------------------------------
//Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos
//de cada subarray y mostrarlos por consola.

function subArrayIterate (arrayTest){
  for (var subArr of arrayTest){
    for (var element of subArr){
      console.log(element);
    }
  }
}

var myArray = [[1,2,5], [1,"hola",5], [undefined, true, false], 8];
subArrayIterate(myArray);