

//EJERCICIOS EXTRA

//1- Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.

//No modifiques el array de entrada original.

const cars = ['Audi', 'Mercedes', 'Seat', 'Renault', 'Fiat', 'Peugeot'];

function swapFirstSecond(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const [first, second, ...rest] = arr;
  const swappedArray = [second, first, ...rest];

  return swappedArray;
}
const swappedCarNames = swapFirstSecond(cars);

console.log(cars);        
console.log(swappedCarNames); 

//----------------------------------------------------------------

//2- Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.

//No utilices bucles. No accedas al primer carácter con corchetes ([])

function firstEqual(char, ...strings) {
  return strings.every((str) => {
    const [firstChar] = str;
    return firstChar === char;
  });
}

console.log(firstEqual('R', 'Roberto', 'Raquel', 'Rodrigo','Rosa')); 
console.log(firstEqual('C', 'Carlos', 'Cecilia', 'Carmelo','Lourdes')); 

  //----------------------------------------------------------------

  //Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.

//No utilices bucles. Hay diversas formas de hacerlo.

function longest(...arrays) {
  return arrays.reduce(function (prev, current) {
    if (current.length > prev.length) {
      return current;
    } else {
      return prev;
    }
  }, []);
}


const arr1 = [1, 6, 15, 41, 798];
const arr2 = [10, 8, 19, 49, 27, 58, 290];
const arr3 = [976, 2390, 27854, 1000289];

const longestArray = longest(arr1, arr2, arr3);
console.log(longestArray); 

//----------------------------------------------------------------

//Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.

// No utilices bucles.

//Convierte el string a un array mediante Array.from().

function searchInStringV1(str, char) {
  
  const charArray = Array.from(str);
  const count = charArray.reduce((acc, currentChar) => {
   if (currentChar === char) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return count;
}

const stringToCheck = "Reduce es una utilidad hermana de map y junto a ella son las manipulaciones estrella de los arrays";
const searchedChar = "e";
const chekedString = searchInStringV1(stringToCheck, searchedChar);
console.log(`El carácter "${searchedChar}" aparece ${chekedString} veces en la cadena.`);

//----------------------------------------------------------------

//Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce.

//No utilices bucles.

//Convierte el string a un array mediante Array.from().

function searchInStringV2(str, char) {
  const charArray = Array.from(str);
  const filteredArray = charArray.filter(currentChar => currentChar === char);
  const count = filteredArray.length;
  return count;
}
const stringToCheckV2 = "Filter permite extraer del array los elementos que cumplan cierta condición y devuelve un nuevo array con dichos elementos";
const searchedCharV2 = "m";
const chekedStringV2 = searchInStringV2(stringToCheckV2, searchedCharV2);
console.log(`El carácter "${searchedCharV2}" aparece ${chekedStringV2} veces en la cadena.`);

//----------------------------------------------------------------

//Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.

//No utilices bucles. No modifiques el string original de entrada.

//Convierte el string a un array mediante Array.from().

function sortCharacters(str) {
  const lowercaseStr = str.toLowerCase();
  const charArray = Array.from(lowercaseStr);
  const sortedArray = charArray.sort();
  const sortedString = sortedArray.join('');

  return sortedString;
}

const stringToCheck2 = "Se acerca la Navidad";
const sortedString2 = sortCharacters( stringToCheck2 );
console.log(`String original: "${ stringToCheck2 }"`);
console.log(`String ordenado: "${sortedString2}"`);

//----------------------------------------------------------------

//Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.

//No utilices bucles.

function shout(...words) {
  const shoutedWords = words.map(function(word) {
    return word.toUpperCase() + '!';
  });
  const shoutedText = shoutedWords.join(' ');
    return shoutedText;
}

const shoutResult = shout("me", "está", "costando", "mucho", "tiempo", "aprender", "javascript");
console.log(shoutResult); 

//----------------------------------------------------------------
//Lista de la compra

//Dada la siguiente lista de la compra:

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

//A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto

function calculateVAT(shoppingCart) {
  const vatRate = 0.21; 
  const productsWithVAT= shoppingCart.map(item => {
  const vat = item.price * vatRate;
    return { ...item, vat }; 
  });

  return productsWithVAT;
}

const shoppingCartWithVAT = calculateVAT(shoppingCart);
console.log(shoppingCartWithVAT);

//B. Ordena la lista de más a menos unidades.

function sortByUnitsDescending(shoppingCart) {
  const sortedShoppingCart = shoppingCart.sort(function(a, b) {
    return b.units - a.units;
  });
  return sortedShoppingCart;
}

console.log(sortByUnitsDescending(shoppingCart));

//C. Obtén el subtotal gastado en droguería.

function calculateSubtotalSpent(shoppingCart) {

  const drogueriaItems = shoppingCart.filter(item => item.category === "Droguería");
  const subtotal = drogueriaItems.reduce((acc, item) => acc + (item.price * item.units), 0);
   return subtotal;
}

const drogueriaSubtotal = calculateSubtotalSpent(shoppingCart);
console.log(`Subtotal gastado en droguería: ${drogueriaSubtotal.toFixed(2)} euros`);

//D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.


const CartListWithVAT  = [...shoppingCart];

const calculateTotalAndDisplayByCategory = (cartItems) =>
cartItems.sort((a, b) => {
        if (a.category > b.category) {
            return 1;
        } else if (a.category < b.category) {
            return -1;
        } else {
            return 0;
        }
    })
    .map(item => {
        console.log(`Producto -> ${item.product} -> Total: ${item.price.toFixed(2)}€`);
        return item.price;
    })
    .reduce((calculateTotalAndDisplayByCategory,item) => calculateTotalAndDisplayByCategory + item, 0);

console.log('Total compra:', calculateTotalAndDisplayByCategory(CartListWithVAT).toFixed(2) + '€');
