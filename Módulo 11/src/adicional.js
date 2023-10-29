const reservations = [
  {
    roomType: "standard",  
    breakfast: false,     
    pax: 1,              
    nights: 3,            
  },
  {
    roomType: "standard", 
    breakfast: false,     
    pax: 1,               
    nights: 4,            
  },
  {
    roomType: "suite",     
    breakfast: true,      
    pax: 2,               
    nights: 1,            
  },
];

// Creamos la clase HotelReservation para gestionar las reservas de hotel
class HotelReservation {
  constructor() {
    this.prices = {
      standard: 100,  
      suite: 150,     
    };
    this.breakfastCharge = 15;  
    this.reservations = [];     // Lista de reservas
  }

  // Calculamos el costo total de las reservas
  get totalPrice() {
    return this.calculateTotalCost();
  }

  // Añadimos una reserva a la lista de rerservas
  addReservation(reservation) {
    this.reservations.push(reservation);
  }

  // Calculamos el costo total de las reservas, incluyendo impuestos
  calculateTotalCost() {
    const totalCostWithoutVAT = this.reservations.reduce((total, reservation) => {
      const { roomType, pax, nights, breakfast } = reservation;
      const roomPrice = this.prices[roomType];
      const baseCost = roomPrice * nights;
      const additionalCharges = (pax > 1) ? (pax - 1) * 40 : 0;
      const breakfastCost = breakfast ? this.breakfastCharge * pax * nights : 0;
      const costBeforeVAT = baseCost + additionalCharges + breakfastCost;
      return total + costBeforeVAT;
    }, 0);

    const totalCostWithVAT = totalCostWithoutVAT * 1.21;  // Agregamos el 21% de impuestos

    return totalCostWithVAT;
  }
}

// Creamos una subclase IndividualCustomer que hereda de HotelReservation
class IndividualCustomer extends HotelReservation {
  constructor() {
    super();  // Llama al constructor de la clase base
  }
}

// Creamos una subclase TourOperator que también hereda de HotelReservation
class TourOperator extends HotelReservation {
  constructor() {
    super();  // Llama al constructor de la clase base
  }

  // Obtenemos el precio con descuento para operadores turísticos
  get discountedPrice() {
    return this.calculateDiscountedCost();
  }

  // Calculamos el costo con descuento para operadores turísticos
  calculateDiscountedCost() {
    const totalCost = this.calculateTotalCost();
    const discount = totalCost * 0.85;  // Aplicamos un descuento del 15%
    return discount;
  }
}

// Creamos instancias de las subclases IndividualCustomer y TourOperator
const individualCustomer = new IndividualCustomer();
const tourOperator = new TourOperator();

// Añadimos cada reserva a ambas instancias
reservations.forEach((reservation) => {
  individualCustomer.addReservation(reservation);
  tourOperator.addReservation(reservation);
});

console.log("Cost for individual customer:", individualCustomer.totalPrice.toFixed(2));
console.log("Cost for tour operator:", tourOperator.discountedPrice.toFixed(2));
