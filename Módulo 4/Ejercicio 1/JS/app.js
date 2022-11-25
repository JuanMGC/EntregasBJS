

//Entradas
var num1 =() => parseInt(document.getElementById("numero1").value);
var num2 =() => parseInt(document.getElementById("numero2").value);
//operaciones
var sum = () => num1() + num2();
var rest = () => num1() - num2();
var multi = () => num1() * num2();
var div = () => num1() / num2();

//Obtener resultado
var getSum = () => document.getElementById("resultado").innerText = sum();
var getRest = () => document.getElementById("resultado").innerText = rest();
var getMulti = () => document.getElementById("resultado").innerText = multi();
var getDiv = () => document.getElementById("resultado").innerText = div();

//Activa funciones
document.getElementById("suma").addEventListener("click", getErrorSum);
document.getElementById("resta").addEventListener("click", getErrorRest);
document.getElementById("multiplicacion").addEventListener("click", getErrorMulti);
document.getElementById("division").addEventListener("click", getErrorDiv);

//Reset Entradas
function reset() {
    document.getElementById('formulary').reset();
}
//Error
function getErrorSum () {
    if (isNaN(num1()) || isNaN(num2())) {
        document.getElementById("resultado").innerText = "Error"; 
       
} else{
    getSum();
  
}
};

function getErrorRest () {
    if (isNaN(num1()) || isNaN(num2())) {
        document.getElementById("resultado").innerText = "Error"; 
       
} else{
    getRest();
}
};

function getErrorMulti () {
    if (isNaN(num1()) || isNaN(num2())) {
        document.getElementById("resultado").innerText = "Error"; 
       
} else{
    getMulti();
}
};

function getErrorDiv () {
    if (isNaN(num1()) || isNaN(num2())) {
        document.getElementById("resultado").innerText = "Error"; 
       
} else{
    getDiv();
}
};