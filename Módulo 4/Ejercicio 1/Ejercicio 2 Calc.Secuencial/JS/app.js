// la aplicación realiza las operaciones correctamente sin usar el igual, a mejorar el hecho de que
//después de operar varias veces si el resultado llega a 0 la multiplicación y la división no funcionan.
const inputNum = document.getElementById("inputNum");
const buttonSum = document.getElementById("sumButton");
const buttonSubst = document.getElementById("substButton");
const buttonMultiply = document.getElementById("multiplyButton");
const buttonDiv = document.getElementById("divButton");
const buttonEqual = document.getElementById("equalButton");
let result = document.getElementById("result");

let memory = 0;
result.value = memory;
console.log(memory);

  function handleSum()  {
     if(inputNum.value === "") {
        alert('Error, hay que introducir un número');	
   } else {
      let total = parseInt(inputNum.value) + parseInt(result.innerText);
      result.innerText = total;
   
      inputNum.value = "";
   }
}

 function handleSubst ()  {
      if (inputNum.value === "") {
        alert('Error, hay que introducir un número');	
    } else {
        let total =  parseInt(result.innerText) - parseInt(inputNum.value);
        result.innerText = total;
        console.log(total);
        inputNum.value = "";
    }
}

  function handleMultiply()  {

     if (inputNum.value === "") {
        alert('Error, hay que introducir un número');	

    } else if (result.value === 0) {
        let memory = result.innerText = inputNum.value ;
        result.value = memory;
        console.log(memory);
        inputNum.value = '';

    } else { 
        let total = parseInt(inputNum.value) * parseInt(result.innerText);
        result.innerText= total;
        console.log(total);
        inputNum.value = "";
    }       
} 

  function handleDiv()  {
    if (inputNum.value === "" ) {
        alert('Error, hay que introducir un número.')	

    } else if (result.value === 0) {
        let memory = result.innerText = inputNum.value;
        result.value = memory;
        console.log(memory);
        inputNum.value = "";
      
    } else {
        let total = parseInt(result.innerText) / parseInt(inputNum.value);
        result.innerText = total;
        console.log(total);
        inputNum.value = "";
    }
}
// esta función está sin acabar, no funciona
function handleEqual()  {
  if (inputNum.value === "") {
    alert('Error, hay que introducir un número');	
  } else {
    let total = parseInt(result.value) = parseInt(result.innerText);
    result.innerText = total;
  
} 
}



buttonSum.addEventListener("click", handleSum);
buttonSubst.addEventListener("click", handleSubst);
buttonMultiply.addEventListener("click", handleMultiply);
buttonDiv.addEventListener("click", handleDiv);
buttonEqual.addEventListener("click", handleEqual);
