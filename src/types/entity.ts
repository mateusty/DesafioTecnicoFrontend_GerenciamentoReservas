export interface Hotel {
    id: number;
    name: string;
    address: string;
    city: string;
    country: string;
    pricePerNight: number;
}

export interface Bookings {
    id: number;
    userId: string;
    hotelId: number;
    roomNumber: number;
    startDate: string;
    endDate: string;
    status: string;
}