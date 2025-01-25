export interface TransportInfo {
    userId: string;
    transportType: string;
    transportCompany: string;
    departureCity: string;
    arrivalCity: string;
    departureDate: string; 
    arrivalDate: string; 
    unit: string;
    availableQuantity: number;
    minReservation: number;
    reservationDeadline: string; 
    pickupLocation: string;
    deliveryLocation: string;
    currency: string;
    pricePerKg: number;
    message: string;
    imageUrl: string;
  }
  