const chart = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
    ];


      
// //  PRIMER PUNTO: LISTAR TODOS LOS PRODUCTOS
function listProperties(chart) {
  for (var i = 0; i < chart.length; i++) {
      for (var property in chart[i]) {
          console.log(property + ": " + chart[i][property]);
      }
  }
}
console.log(listProperties(chart));
  

//SEGUNDO PUNTO: ELIMINAR UN PRODUCTO DEL CARRITO
function removeElement(chart, id) {
  for (var i = 0; i < chart.length; i++) {
      if (chart[i].id === id) {
          chart.splice(i, 1);
      }
  }
}
removeElement(chart,75621);
console.log(chart)

//TERCER PUNTO: CALCULAR EL TOTAL DE LA COMPRA

function calculateTotal(chart) {
    var total = 0;
    for (i = 0; i < chart.length; i++) {
      total += chart[i].price * chart[i].count;
    }
    console.log(total);
  }
console.log(calculateTotal(chart))
//CUARTO PUNTO: FILTRAR LOS PRODUCTOS QUE SEAN PRIME

function getPremiumProducts(chart) {
  var primeProducts = [];
  for (let i = 0; i < chart.length; i++) {
    if (chart[i].premium === true) {
        primeProducts.push(chart[i])
    }
  }
  console.log(primeProducts)
}
console.log(getPremiumProducts(chart));