// la aplicación realiza las operaciones correctamente sin usar el igual, a mejorar

const inputNum = document.getElementById("inputNum");
const buttonSum = document.getElementById("sumButton");
const buttonSubst = document.getElementById("substButton");
const buttonMultiply = document.getElementById("multiplyButton");
const buttonDiv = document.getElementById("divButton");
const buttonEqual = document.getElementById("equalButton");
const result = document.getElementById("result");



  function handleSum()  {
     if(inputNum.value === "") {
        alert('Error, hay que introducir un número');	
   } else {
      var total = parseInt(inputNum.value) + parseInt(result.innerText);
      result.innerText = total;
   
      inputNum.value = "";
   }
}

 function handleSubst ()  {
      if (inputNum.value === "") {
        alert('Error, hay que introducir un número');	
    } else {
        var total =  parseInt(result.innerText) - parseInt(inputNum.value);
        result.innerText = total;
        console.log(total);
        inputNum.value = "";
    }
}

  function handleMultiply()  {

     if (inputNum.value === "") {
        alert('Error, hay que introducir un número');	

    } else if (parseInt(result.innerText) === 0) {
     var setFirstValue = parseInt(inputNum.value) + parseInt(result.innerText)
      result.innerText = setFirstValue
        console.log(setFirstValue);
        inputNum.value = '';

    } else { 
        let total = (inputNum.value) *(result.innerText);
        result.innerText= total;
        console.log(total);
        inputNum.value = "";
    }       
} 

  function handleDiv()  {
    if (inputNum.value === "" ) {
        alert('Error, hay que introducir un número.')	

      } else if (parseInt(result.innerText) === 0) {
        var setFirstValue = parseInt(inputNum.value) + parseInt(result.innerText)
         result.innerText = setFirstValue
           console.log(setFirstValue);
           inputNum.value = '';
      
    } else {
        var total =(result.innerText) / (inputNum.value);
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
    var total = parseInt(result.value) = parseInt(result.innerText);
    result.innerText = total;
  
} 
}



buttonSum.addEventListener("click", handleSum);
buttonSubst.addEventListener("click", handleSubst);
buttonMultiply.addEventListener("click", handleMultiply);
buttonDiv.addEventListener("click", handleDiv);
buttonEqual.addEventListener("click", handleEqual);
