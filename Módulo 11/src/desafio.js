
const reservations = [
  {
    roomType: "standard",
    pax: 1,
    nights: 3,
  },
  {
    roomType: "standard",
    pax: 1,
    nights: 4,
  },
  {
    roomType: "suite",
    pax: 2,
    nights: 1,
  },
];

// Definimos una clase HotelReservation para calcular costos de reservas
class HotelReservation {
  constructor() {
    // Precios base de las habitaciones en el constructor
    this.prices = {
      standard: 100,
      suite: 150,
    };
  }

  // Método para calcular el costo total de las reservas
  calculateCost(reservations) {
    const totalCostWithoutVAT = reservations.reduce((total, reservation) => {
      // Desestructura la reserva en variables individuales
      const { roomType, pax, nights } = reservation;
      // Obtiene el precio base de la habitación
      const roomPrice = this.prices[roomType];
      // Calcula el costo base sin impuestos
      const baseCost = roomPrice * nights;
      // Calcula cargos adicionales por huéspedes adicionales
      const additionalCharges = (pax > 1) ? (pax - 1) * 40 : 0;
      // Calcula el costo total antes de impuestos
      const costBeforeVAT = baseCost + additionalCharges;
      // Acumula el costo en el total
      return total + costBeforeVAT;
    }, 0);

    // Calcula el costo total con impuestos (IVA al 21%)
    const totalCostWithVAT = totalCostWithoutVAT * 1.21;
    // Redondea el costo total con impuestos a dos decimales
    const roundedTotalCostWithVAT = totalCostWithVAT.toFixed(2);

    return roundedTotalCostWithVAT;
  }
}

// Definición de la clase IndividualCustomer que hereda de HotelReservation
class IndividualCustomer extends HotelReservation {
  constructor() {
    // Llamamos al constructor de la clase base (HotelReservation) 
    super();
  }
}

// Definición de una clase TourOperator que hereda de HotelReservation
class TourOperator extends HotelReservation {
  constructor() {
    // Llamamos al constructor de la clase base (HotelReservation) 
    super();
  }

  // Método para calcular el costo con descuento para operadores turísticos
  calculateDiscountedCost(reservations) {
    // Calculamos el costo total utilizando el método de la clase base
    const totalCost = super.calculateCost(reservations);

    // Aplica un descuento del 15% al costo total
    const discount = totalCost * 0.85;
    // Redondea el costo con descuento a dos decimales
    const roundedDiscount = discount.toFixed(2);

    return roundedDiscount;
  }
}

// Creación de instancias para un cliente individual y un operador turístico
const individualCustomer = new IndividualCustomer();
const tourOperator = new TourOperator();

// Cálculo de costos para el cliente individual y el operador turístico
const costForIndividualCustomer = individualCustomer.calculateCost(reservations);
const costForTourOperator = tourOperator.calculateDiscountedCost(reservations);


console.log("Cost for individual customer:", costForIndividualCustomer);
console.log("Cost for tour operator:", costForTourOperator);
