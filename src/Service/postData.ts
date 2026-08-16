import { toast } from "react-toastify";
import api from "./api";

export interface BookingRequest {
    HotelId: number;
    RoomNumber: number;
    StartDate: Date;
    EndDate: Date;
    Status: string;
}

export const postBooking = async (bookingRequest: BookingRequest) => {
    try {
        api.post("/booking", bookingRequest);
        toast.success("Reserva feita com sucesso!");
    } catch(error) {
        console.log(error);
        toast.error("Houve um erro durante a requisição para criar uma reserva");
    }
}