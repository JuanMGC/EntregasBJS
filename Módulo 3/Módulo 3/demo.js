
//* Ejercicio 1
const product = { count: 3, price: 100, type:"cosas"};
var compraSinIva;
    if (product.count > 0) {
        compraSinIva = product.count * product.price
    } else {
        compraSinIva = 0;

        
    }
// console.log(compraSinIva);

var tipoIva;
switch (product.type) {
    case "alimentacion": tipoIva = 0.10; break;
    case "libro": tipoIva = 0.04; break;
    default: tipoIva = 0.21;
}
// console.log("El IVA aplicado es: ", tipoIva, "%");

var iva = compraSinIva * tipoIva;
// console.log(iva);

var compraConIva = compraSinIva + iva;
// console.log(compraConIva);


function getVat(product) {  
   var tipoIva = 0;
    switch (product.type) {
        case "alimentacion": tipoIva = 0.10; break;
        case "libro": tipoIva = 0.04; break;
        default: tipoIva = 0.21;
    }
    console.log(tipoIva);
    return product.price * tipoIva;
}
console.log(getVat(product));

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
  }
    
    console.log(getTotalVat(product));

function precioFinal( product) {
    const subtotal = getVat(product);
    let vat = getTotalVat(product);
    let total = subtotal + vat;
    

    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}
precioFinal(product);
