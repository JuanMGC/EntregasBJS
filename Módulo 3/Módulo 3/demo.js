
//* Ejercicio 1
let product = { count: 5, price: 25, type:"ropa"};
var compraSinIva;
    if (product.count > 0) {
        compraSinIva = product.count * product.price
    } else {
        compraSinIva = 0;

        
    }
console.log("El tipo de producto es:", product.type);

var tipoIva;
switch (product.type) {
    case "alimentacion": tipoIva = 0.10; break;
    case "libro": tipoIva = 0.04; break;
    default: tipoIva = 0.21;
}
console.log("El IVA aplicado es del: ", tipoIva, "%");

var iva = compraSinIva * tipoIva;
// console.log(iva);

var compraConIva = compraSinIva + iva;
// console.log(compraConIva);

function getTotal(product){
    return product.count * product.price;
}

function getVat(product) {  
   var tipoIva = 0;
    switch (product.type) {
        case "alimentacion": tipoIva = 0.10; break;
        case "libro": tipoIva = 0.04; break;
        default: tipoIva = 0.21;
    }
    // console.log(tipoIva);
    return product.price * tipoIva;
}
// console.log(getVat(product));

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
  }
    
    // console.log(getTotalVat(product));

function precioFinal( product) {
    const subtotal = getTotal(product);
    let vat = getTotalVat(product);
    let total = subtotal + vat;
    

    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}
precioFinal(product);
