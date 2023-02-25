// Constantes impuestos
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Objeto products
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

//Obtenemos referencia de los elementos del Dom
const productsContainer = document.getElementById('product-list-container');
const subtotal = document.getElementById('subtotal');
const spanVat = document.getElementById('tax');
const total = document.getElementById('total');
const btnCalculate = document.getElementById('btn-Calculate');

//Generamos HTML dinámico
const setInput = (product) => {
    var input = document.createElement("input");

    input.setAttribute("class","product-unit");
    input.setAttribute("type","number");
    input.setAttribute("value",product.units);
    input.setAttribute("min", 0);
    input.setAttribute("max", product.stock);

    input.addEventListener("change", (event) => {
        product.units = event.target.value;
        activateButton(btnCalculate, products);
    });

    return input;
}

const activateButton = (button, productList) => {
    selectedUnits = 0;

    for ( var product of productList) {
       selectedUnits += product.units;
    }

    button.disabled = selectedUnits <= 0;
}

const setItemList = (productList) => {
    var itemList = document.createElement("ol");
    itemList.setAttribute("class", "container");

    for (var product of productList) {
        var item = document.createElement("li");
        item.setAttribute("class", "list-product")
        item.innerText = product.description + " - " + product.price + " $/ud.";
        itemList.appendChild(item);
        item.appendChild(setInput(product));
    }

    productsContainer.appendChild(itemList);
    return itemList;
}
    
const printProductList = (productList) => {
    productsContainer.appendChild(setItemList(productList))
}

//Funciones para calcular el coste total del carrito

const pricePerUnit = (product) => {
    var pricePerUnit = product.price * product.units;
    return pricePerUnit;
}
    
const subTotalCost = (productList) => {
    var subTotalCost = 0;

    for ( var product of productList) {
        subTotalCost += pricePerUnit(product);
    }
    return subTotalCost;
}

const getVat = (productList) => {
    var vat = 0;
    for ( var product of productList) {
        vat += pricePerUnit(product) * (product.tax/100);
    }
    return vat;
}

const totalCost = (productList) => subTotalCost(productList) + getVat(productList);

const printTotalCart = (productList) => {
    subtotal.innerHTML = subTotalCost(productList);
    spanVat.innerHTML = getVat(productList);
    total.innerHTML = totalCost(productList);
}

    printProductList(products);
    activateButton(btnCalculate, products);

    btnCalculate.addEventListener("click", () => {
    printTotalCart(products);
    })

