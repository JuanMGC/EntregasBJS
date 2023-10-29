//---------------------CASE 1------------------------------

// Definimos una lista de reservas con información sobre el tipo de habitación, número de personas y noches.
const bookingsList = [
  {
    typeRoom: "standard",
    pax: 1,
    nights: 3
  },
  {
    typeRoom: "standard",
    pax: 1,
    nights: 4
  },
  {
    typeRoom: "suite",
    pax: 2,
    nights: 1
  }
];

// Precios de las habitaciones estándar y suite.
const Room_Prices = {
  standard: 100,
  suite: 150
};

// Costo adicional por persona.
const Additional_Person_Cost = 40;

// Tasa de impuestos.
const TaxRate = 0.21;

// Definimos una clase PrivateBooking para gestionar reservas privadas.
class PrivateBooking {
  constructor(bookingsList) {
    this.bookings = bookingsList;
  }

  // Método para calcular el costo de una habitación.
  calculateRoomCost(typeRoom) {
    return Room_Prices[typeRoom] || 0;
  }

  // Método para calcular los cargos adicionales por persona y noche.
  calculateAdditionalCharges(pax, nights) {
    return (pax > 1) ? (pax * Additional_Person_Cost * nights) : 0;
  }

  // Método para calcular el subtotal de las reservas.
  calculateSubtotalBookings() {
    this.subtotal = this.bookings.reduce((subtotal, { typeRoom, pax, nights }) =>
      subtotal + (nights * this.calculateRoomCost(typeRoom)) + this.calculateAdditionalCharges(pax, nights), 0);
  }

  // Método para calcular el total de las reservas, incluyendo impuestos.
  calculateTotalBookings() {
    this.total = this.subtotal * (1 + TaxRate);
  }
}

// Creamos una instancia de PrivateBooking y realizamos cálculos.
const privateBooking = new PrivateBooking(bookingsList);
privateBooking.calculateSubtotalBookings();
privateBooking.calculateTotalBookings();


console.log(` CASE 1 `);
console.log(`Private Bookings`);
console.log(`Subtotal: ${privateBooking.subtotal.toFixed(2)}€`);
console.log(`Total: ${privateBooking.total.toFixed(2)}€`);
console.log('');

//------------------------CASE 2--------------------------------

// Definimos una clase TourOperatorBooking que hereda de PrivateBooking y le añadimos el coste fijo por habitación que se aplica al Tour operador.
class TourOperatorBooking extends PrivateBooking {
  constructor(bookingsList) {
    super(bookingsList);
    this.fixedRoomCost = 100;
  }

  // Sobreescribimos el método de la clase base para calcular el total de las reservas para operadores turísticos.
  calculateTotalBookings() {
    // Calculamos el subtotal con un costo fijo por habitación.
    this.subtotal = this.bookings.reduce((subtotal, { pax, nights }) =>
      subtotal + (nights * this.fixedRoomCost) + this.calculateAdditionalCharges(pax, nights), 0);
    
    // Aplicamos un descuento del 15% al subtotal.
    this.subtotal *= 0.85;
    
    // Calculamos el total con impuestos.
    this.total = this.subtotal * (1 + TaxRate);
  }
}

// Creamos una instancia de TourOperatorBooking y realizamos cálculos.
const tourOperatorBooking = new TourOperatorBooking(bookingsList);
tourOperatorBooking.calculateSubtotalBookings();
tourOperatorBooking.calculateTotalBookings();


console.log(' CASE 2 ');
console.log('Tour Operator Bookings');
console.log(`Subtotal: ${tourOperatorBooking.subtotal.toFixed(2)}€`);
console.log(`Total: ${tourOperatorBooking.total.toFixed(2)}€`);
