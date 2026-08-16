import { toast } from "react-toastify";
import type { Bookings, Hotel } from "../types/entity";
import api from "./api";

export const fetchBookings = async (setUserBookings: (b: Bookings[]) => void, setIsLoading: (b: boolean) => void) => {
    setIsLoading(true);
    try {
    const bookings = await api.get<Bookings[]>("/booking")
    const bookingsData = bookings.data.sort((a, b) => {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    })

    setUserBookings(bookingsData);
    } catch(error) {
    console.log(error);
    toast.error("Houve um erro durante a busca de reservas");
    } finally {
    setIsLoading(false);
    }
}

export const fetchHotels = async (setHotels: (b: Hotel[]) => void, setIsLoading: (b: boolean) => void) => {
    setIsLoading(true);
    try {
        const hotels = await api.get<Hotel[]>("/hotel")
        setHotels(hotels.data);
    } catch(error) {
        console.log(error);
        toast.error("Houve um erro durante a busca de hotéis");
    } finally {
        setIsLoading(false);
    }
}