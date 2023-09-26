//1- Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).

//TIP: No accedas a 'id' con punto (.) o con corchetes ([]).

const obj1 = { name: 'Pedro', age:25 };
const obj2 = { id: 109, name: 'Luis' };

const hasId = (obj) => obj.hasOwnProperty('id');

console.log(hasId(obj1)); 
console.log(hasId(obj2));
//----------------------------------------------------

//2-Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

//TIP: No utilices el corchete ([]) para acceder a la posición 0.

const languages = ["javascript","java","python","c","c++","sql"]

const head = ([first]) => first;
console.log(head(languages));

//---------------------------------------------------------------

//3- Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.

//No se debe modificar el array de entrada. Piensa en destructuring y rest.

function tail(arr) {
  const [first, ...rest] = arr;
  return rest;
}

const numbers = [1, 2, 3, 4, 5];
const result = tail(numbers);
console.log(result); 

//---------------------------------------------------------------

//4- Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.

//TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.


function swapFirstToLast(inputArray) {
  
  if (inputArray.length < 1) {
    return inputArray; 
  }
  const [first, ...rest] = inputArray;
  const newArray = [...rest, first];

  return newArray;
}

const input = [1, 2, 3, 4, 5];
const test = swapFirstToLast(input);
console.log(test); 

//---------------------------------------------------------------

//5- Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera.

// No modifiques el objeto de entrada. Piensa en destructuring y rest.

function excludeId(inputObject) {
  const { id, ...rest } = inputObject;
  return rest;
}

const input5 = { id: 899, name: "Marcos", age: 27, sons:["Samuel", "Lucia"] };
const test5 = excludeId(input5);
console.log(test5); 

//---------------------------------------------------------------

//6- Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.

//No utilices bucles.

function wordsStartingWithA(wordArray) {
  const filteredArray = wordArray.filter(word => word.startsWith('a') || word.startsWith('A'));
  return filteredArray;
}

const fruits = ["apple", "banana", "cherry", "Avocado", "apricot"];
const result6 = wordsStartingWithA(fruits);
console.log(result6); 

//---------------------------------------------------------------

//7- Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |.

//No utilices bucles.

function concat(...args) {
 const result = args.join('|');
  return result;
}

const concatenatedString = concat("Hola", "esto", "es", "un", "ejemplo", "de","uso","del","método", "join");
console.log(concatenatedString); 

//---------------------------------------------------------------

//8- Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

//No utilices bucles.

function multArray(arr, x) {
  const resultArray = arr.map(number => number * x);
  return resultArray;
}

const array8 = [1, 2, 3, 4, 5];
const multiplier = 3;
const result8 = multArray(array8, multiplier);
console.log(result8); 

//---------------------------------------------------------------

//9-Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.

//No utilices bucles.

function calcMult(...numbers) {
  const result = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  return result;
}

const product = calcMult(2, 4, 5, 18, 345, 2455);
console.log(product); 



