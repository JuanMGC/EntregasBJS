const roomType = document.getElementById('roomType');
const occupancy = document.getElementById('occupancy');
const nightsBooked = document.getElementById('nights');
const parking = document.getElementById('parking');
const spa = document.getElementById('spa');
const calcButton = document.getElementById('calcular');
const totalInvoice = document.getElementById('total');

function parkingBooked() {
    return 10 * parking.value;
}

function roomTypePrice() {
    var price = 0;

    if (roomType.value === 'standard') {
        price = 100;
    } else if (roomType.value === 'junior') {
        price = 120;
    } else {
        price = 150;
    }
    price = (spa.checked) ? price + 20 : price;
        return price * nightsBooked.value;
}

function OccupancyRate(price) {
    if (occupancy.value === 'individual') {
        return price - (price * 0.25);
    } else if (occupancy.value === 'triple') {
        return price + (price * 0.25);
    } else {
        return price;
    }
}

function totalBooking() {
    var totalPrice = (OccupancyRate(roomTypePrice())) + parkingBooked();
        return totalPrice;
}

function calculate()  {
    if (nightsBooked.value === "") {
        alert('Por favor, introduzca el número de noches que quiere reservar.');	
    } else {
        totalInvoice.innerHTML = totalBooking();
        nightsBooked.value = "";
        parking.value = "";
    }
}

    calcButton.addEventListener('click', calculate);