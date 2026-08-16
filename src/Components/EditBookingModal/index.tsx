import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import ButtonComponent from "../ButtonComponent";
import type { Bookings } from "../../types/entity";
import { putBooking, type BookingRequest } from "../../Service/postData";
import DatePicker from "react-datepicker";

interface EditBookingModalProps {
  show: boolean;
  onHide: () => void;
  currentBooking: Bookings | null;
  onSave: (bookingRequest: BookingRequest, bookingId: number) => void;
}

const STATUS_OPTIONS = ["Pending", "Canceled", "Completed"];

export default function EditBookingModal({
  show,
  onHide,
  currentBooking,
  onSave
}: EditBookingModalProps) {
  const [validated, setValidated] = useState(false);

  const [roomNumber, setRoomNumber] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date);
  const [endDate, setEndDate] = useState<Date>(new Date);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (currentBooking) {
      setRoomNumber(String(currentBooking.roomNumber));
      setStartDate(new Date(currentBooking.startDate));
      setEndDate(new Date(currentBooking.endDate));
      setStatus(currentBooking.status);
      setValidated(false);
    }
  }, [currentBooking]);

  if (!currentBooking) return;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedBooking: BookingRequest = {
      HotelId: currentBooking.hotelId,
      RoomNumber: Number(roomNumber),
      StartDate: startDate,
      EndDate: endDate,
      Status: status,
    };

    onSave(updatedBooking, currentBooking.id);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Editar Reserva #{currentBooking.id}</Modal.Title>
      </Modal.Header>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Número do Quarto</Form.Label>
            <Form.Control
              type="number"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              placeholder="Ex: 302"
              required
            />
            <Form.Control.Feedback type="invalid">
              Informe o número do quarto.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de Início</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
              placeholderText="Selecione a data"
              minDate={new Date()}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de Término</Form.Label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
              placeholderText="Selecione a data"
              minDate={startDate}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Selecione um status</option>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Selecione o status da reserva.
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <ButtonComponent
            type="submit"
            $bgColor="var(--botao)"
            $textColor="#FFF"
            size="10rem"
            action={() => null}
            alternativeText="Salvar alterações"
            >
              Salvar
            </ButtonComponent>
            <ButtonComponent
              type="button"
              $bgColor="var(--cinza-primario)"
              $textColor="#FFF"
              size="10rem"
              action={onHide}
              alternativeText="Cancelar"
              >
              Cancelar
              </ButtonComponent>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
