//Solución con función externa para no repetir números en la generación aleatoria
const  checkIfDuplicatedNum = (array, target) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}

const randomPick = (n, min, max) =>{
  if (n > (max - min + 1))
  return console.log("ERROR!!.La cantidad 'n' de números está fuera del rango establecido");
  
  var numbers = [];
  while (numbers.length < n) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!checkIfDuplicatedNum(numbers,randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers;
}

//Solución usando el método IndexOf
// const randomPick = (n, min, max) => {
//   if (n > (max - min + 1))
//   return console.log("ERROR!!. La cantidad 'n' de números está fuera del rango establecido.");
  
//   var numbers = [];
//   while (numbers.length < n) {
//     var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (numbers.indexOf(randomNum) === -1) {
//       numbers.push(randomNum);
//     }
//   }
//   return numbers;
// };

console.log(randomPick(50, 1, 49));
console.log(randomPick(15, 1, 132));
console.log(randomPick(6, 15, 17));
console.log(randomPick(89, 1, 200));
console.log(randomPick(23, 1, 17));
console.log(randomPick(89, 1, 2700));





