
//* Ejercicio 1
const product = { count: 4, price: 12.55, type:"cosas"};
var compraSinIva;
    if (product.count > 0) {
        compraSinIva = product.count * product.price
    } else {
        compraSinIva = 0;
    }
console.log(compraSinIva);

var tipoIva;
switch (product.type) {
    case "alimentacion": tipoIva = 0.10; break;
    case "libro": tipoIva = 0.04; break;
    default: tipoIva = 0.21;
}
console.log("El IVA aplicado es: ", tipoIva, "%");

var iva = compraSinIva * tipoIva;
console.log(iva);

var compraConIva = compraSinIva + iva;
console.log(compraConIva);


//* He creado esta función que hace lo que se espera de ella, pero no he avanzado más en las otras partes del ejercicio.
function getTotalVat(product) {
    return compraSinIva + iva;
    }
    
    console.log(getTotalVat());
