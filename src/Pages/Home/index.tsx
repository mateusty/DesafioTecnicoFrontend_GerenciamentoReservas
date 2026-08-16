import { CgHome } from "react-icons/cg"
import PageContainer from "../../Components/Layout/PageContainer"
import PageHeaderContainer from "../../Components/Layout/PageHeaderContainer"
import { Col, Container, Row } from "react-bootstrap"
import PageContentContainer from "../../Components/Layout/PageContentContainer"
import { useEffect, useState } from "react"
import type { Bookings, Hotel } from "../../types/entity"
import SearchComponent from "../../Components/TableComponents/SearchComponent"
import ButtonComponent from "../../Components/ButtonComponent"
import TableComponent from "../../Components/TableComponents/TableComponent"
import PaginationComponent from "../../Components/TableComponents/PaginationComponent"
import { BsEye } from "react-icons/bs"
import StatusDisplay from "../../Components/TableComponents/StatusDisplay"
import { useNavigate } from "react-router-dom"
import { fetchBookings, fetchHotels } from "../../Service/fetchData"
import EditBookingModal from "../../Components/EditBookingModal"
import { putBooking, type BookingRequest } from "../../Service/postData"

export const HomePage = () => {

  const [selectedValue, setSelectedValue] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [userBookings, setUserBookings] = useState<Bookings[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const [currentBooking, setCurrentBooking] = useState<Bookings | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    fetchHotels(setHotels, setIsLoading);
    fetchBookings(setUserBookings, setIsLoading);
  }, []);

  const handleShowModalButton = (booking: Bookings) => {
    setCurrentBooking(booking);
    setShowModal(true);
  }

  const onSaveEditBooking = async (bookingRequest: BookingRequest, bookingId: number) => {
    await putBooking(bookingRequest, bookingId);
    setShowModal(false)
    fetchBookings(setUserBookings, setIsLoading);
  }

  return (
    <Col>
      <PageContainer>
        <PageHeaderContainer title="Home" icon={<CgHome/>}></PageHeaderContainer>
        <PageContentContainer>
          <Container fluid>
            <Row>
              <Col className="col-10">
                <SearchComponent />
              </Col>
              <Col className="col-5 col-xl-2">
                <ButtonComponent
                  type="button"
                  size="18rem"
                  $bgColor="var(--botao)"
                  $textColor="#FFFFFF"
                  action={() => navigate("/booking")}
                  alternativeText="Adicionar uma reserva"
                >Reservar</ButtonComponent>
              </Col>
            </Row>
            <Row>
              <TableComponent columns={["Registro", "Hotel", "Quarto", "Check-in", "Status", ""]}>
                {userBookings
                .slice((currentPage - 1) * selectedValue, currentPage * selectedValue)
                .map((booking) => {
                  const hotel = hotels.find((h) => h.id === booking.hotelId);

                  return (
                    <tr key={booking.id}>
                      <td>#{booking.id}</td>
                      <td>{hotel ? hotel.name : "Hotel não encontrado"}</td>
                      <td>{booking.roomNumber}</td>
                      <td>{new Date(booking.startDate).toLocaleDateString("pt-BR")}</td>
                      <td><StatusDisplay status={booking.status}/></td>
                      <td className="action-column" onClick={() => handleShowModalButton(booking)}>
                        <BsEye />
                      </td>
                    </tr>
                  );
                })}
              </TableComponent>
              <EditBookingModal 
              show={showModal}
              onHide={() => setShowModal(false)}
              currentBooking={currentBooking}
              onSave={onSaveEditBooking}
              />
            </Row>
            <Row>
              <PaginationComponent
                selectedValue={selectedValue} 
                setSelectedValue={setSelectedValue} 
                totalItems={userBookings.length}
                totalPages={Math.ceil(userBookings.length / selectedValue)}
                currentPage={currentPage}
                changePage={setCurrentPage}
              ></PaginationComponent>
            </Row>
          </Container>
        </PageContentContainer>
      </PageContainer>
    </Col>
  )
}
