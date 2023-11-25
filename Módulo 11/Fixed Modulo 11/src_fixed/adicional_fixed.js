// Datos de reservas
const reservas = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1
  }
];

// Precios de las habitaciones
const Room_Prices = {
  standard: 100,
  suite: 150
};

// Costos adicionales y tasas
const Additional_Person_Cost = 40;
const Breakfast_Cost = 15;
const TaxRate = 0.21;

// Clase base para gestionar reservas
class Booking {
  constructor(bookingsList, roomPrices) {
    this.bookings = bookingsList;
    this.roomPrices = roomPrices;
  }

  // Método para calcular el costo de una habitación
  calculateRoomCost(typeRoom) {
    return this.roomPrices[typeRoom] || 0;
  }

  // Método para calcular los cargos adicionales por persona y noche, incluyendo el desayuno
  calculateAdditionalCharges(pax, nights, hasBreakfast) {
    const additionalPersonCost = (pax > 1) ? (pax - 1) * Additional_Person_Cost : 0;
    const breakfastCost = hasBreakfast ? pax * nights * Breakfast_Cost : 0;
    return additionalPersonCost + breakfastCost;
  }

  // Getter para calcular el subtotal de las reservas
  get subtotal() {
    return this.bookings.reduce((subtotal, { tipoHabitacion, desayuno, pax, noches }) =>
      subtotal + (noches * this.calculateRoomCost(tipoHabitacion)) + this.calculateAdditionalCharges(pax, noches, desayuno), 0);
  }

  // Getter para calcular el total de las reservas, incluyendo impuestos
  get total() {
    return this.subtotal * (1 + TaxRate);
  }
}

// Clase para gestionar reservas privadas
class PrivateBooking extends Booking {
  constructor(bookingsList, roomPrices) {
    super(bookingsList, roomPrices);
  }
}

// Clase para gestionar reservas de operadores turísticos
class TourOperatorBooking extends Booking {
  constructor(bookingsList, roomPrices) {
    super(bookingsList, roomPrices);
    this.fixedRoomCost = 100;
  }

  // Getter para calcular el total de las reservas para operadores turísticos, incluyendo descuentos
  get total() {
    const subtotal = this.bookings.reduce((subtotal, { pax, noches, desayuno }) =>
      subtotal + (noches * this.fixedRoomCost) + this.calculateAdditionalCharges(pax, noches, desayuno), 0);

    // Aplicamos un descuento del 15%
    return subtotal * 0.85 * (1 + TaxRate);
  }
}

// Crear instancia de PrivateBooking y realizar cálculos
const privateBooking = new PrivateBooking(reservas, Room_Prices);
console.log('Private Bookings');
console.log(`Subtotal: ${privateBooking.subtotal.toFixed(2)}€`);
console.log(`Total: ${privateBooking.total.toFixed(2)}€`);
console.log('');

// Crear instancia de TourOperatorBooking y realizar cálculos
const tourOperatorBooking = new TourOperatorBooking(reservas, Room_Prices);
console.log('Tour Operator Bookings');
console.log(`Subtotal: ${tourOperatorBooking.subtotal.toFixed(2)}€`);
console.log(`Total: ${tourOperatorBooking.total.toFixed(2)}€`);
