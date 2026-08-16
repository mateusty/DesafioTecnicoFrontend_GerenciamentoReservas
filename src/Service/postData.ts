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
        await api.post("/booking", bookingRequest);
        toast.success("Reserva feita com sucesso!");
    } catch(error) {
        console.log(error);
        toast.error("Houve um erro durante a requisição para criar uma reserva");
    }
}

export const putBooking = async (bookingRequest: BookingRequest, bookingId: number) => {
    try {
        await api.put(`/booking/${bookingId}`, bookingRequest);
        toast.success("Reserva atualizada com sucesso!");
    } catch(error) {
        console.log(error);
        toast.error("Houve um erro durante a requisição para atualizar uma reserva");
    }
}