import { Outlet, useNavigate } from "react-router-dom"
import { SidebarDesktop } from "./SidebarDesktop"
import { Container, Row } from "react-bootstrap";
import { SidebarMobile } from "./SidebarMobile";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export const Layout = () => {

    const navigate = useNavigate();
    const { currentFontSize } = useContext(ThemeContext);

    function logOut() {
      navigate("/login");
    }

  return (
    <>
                <Container fluid style={{fontSize: `${currentFontSize}px`}}>
                    <SidebarMobile logOut={logOut}></SidebarMobile>
                      <Row>
                          <SidebarDesktop
                          logOut={logOut}
                          ></SidebarDesktop>
                          <Outlet />
                      </Row>
                </Container>
    </>
  )
}