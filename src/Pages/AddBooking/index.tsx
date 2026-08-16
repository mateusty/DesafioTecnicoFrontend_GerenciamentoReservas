import { Col, Form, Row } from "react-bootstrap"
import PageContainer from "../../Components/Layout/PageContainer"
import PageHeaderContainer from "../../Components/Layout/PageHeaderContainer"
import { CgHome } from "react-icons/cg"
import PageContentContainer from "../../Components/Layout/PageContentContainer"
import DatePicker from "react-datepicker"
import ButtonComponent from "../../Components/ButtonComponent"
import { useEffect, useState } from "react"
import type { Bookings, Hotel } from "../../types/entity"
import { fetchHotels } from "../../Service/fetchData"
import "react-datepicker/dist/react-datepicker.css"
import { postBooking, type BookingRequest } from "../../Service/postData"
import { StyledForm } from "./style"
import { useNavigate } from "react-router-dom"

export const AddBooking = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [selectedHotel, setSelectedHotel] = useState<number>(0);
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [roomnumber, setRoomnumber] = useState<string>('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingRequest: BookingRequest = {
            HotelId: selectedHotel,
            RoomNumber: Number(roomnumber),
            StartDate: startDate,
            EndDate: endDate,
            Status: "Pending"
        }

        await postBooking(bookingRequest);

        navigate("/home");
    };

    useEffect(() => {
        fetchHotels(setHotels, setIsLoading);
    }, [])

  return (
    <Col>
        <PageContainer>
            <PageHeaderContainer title="Reservar" icon={<CgHome/>}></PageHeaderContainer>
            <PageContentContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <Form.Group className="mb-2 d-flex flex-column flex-md-row align-items-start gap-3 w-100">
                    <div className="mb-3 mb-md-0 flex-fill">
                        <Form.Label>Data de Início</Form.Label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="form-control w-100"
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Selecione a data"
                            minDate={new Date()}
                        />
                    </div>
                    <div className="mb-3 mb-md-0 flex-fill">
                        <Form.Label>Data de Fim</Form.Label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            className="form-control w-100"
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Selecione a data"
                            minDate={new Date()}
                        />
                    </div>
                </Form.Group>


                    <Form.Group className="mb-3">
                    <Form.Label>Hotel</Form.Label>
                    <Form.Select
                        value={selectedHotel}
                        onChange={(e) => setSelectedHotel(Number(e.target.value))}
                        required
                    >
                        <option value="">Selecione um hotel</option>
                        {hotels.map((h) => (
                        <option key={h.id} value={h.id}>
                            {h.name}
                        </option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Informe o hotel da reserva
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>Número do Quarto</Form.Label>
                    <Form.Control
                        type="number"
                        value={roomnumber}
                        onChange={(e) => setRoomnumber(e.target.value)}
                        placeholder="Ex: 302"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Informe o número de quarto da reserva
                    </Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-flex flex-column flex-md-row gap-1 align-self-end">
                        <ButtonComponent
                        type="submit"
                        $bgColor="var(--botao)"
                        $textColor="#FFF"
                        size="18rem"
                        action={() => null}
                        alternativeText="Confirmar reserva"
                        >
                        Confirmar
                        </ButtonComponent>
                        <ButtonComponent
                            type="button"
                            $bgColor="var(--cinza-primario)"
                            $textColor="#FFF"
                            size="10rem"
                            action={() => null}
                            alternativeText="Cancelar"
                        >
                        Cancelar
                        </ButtonComponent>
                    </div>
                </StyledForm>
            </PageContentContainer>
        </PageContainer>
    </Col>
  )
}
