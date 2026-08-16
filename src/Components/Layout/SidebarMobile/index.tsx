import { useContext, useEffect, useState } from "react";
import { useNavigate, type To } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoT2m from "../../../assets/t2m-logo-tema-claro.png";
import LogoT2mEscuro from "../../../assets/t2m-logo-tema-escuro.png";

import { CgHome } from "react-icons/cg";
import { BsArrowBarLeft } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import {
  MdContrast,
  MdOutlineExitToApp,
  MdOutlineTextDecrease,
  MdOutlineTextIncrease,
} from "react-icons/md";
import {
  SidebarMobileStyle,
  SidebarMobileNavStyle,
  LogoArea,
  CloseIconArea,
  StyledOffcanvas,
} from "./styles.ts";
import { ThemeContext } from "../../../Context/ThemeContext.ts";

interface SidebarMobileProps {
  logOut: () => void;
}

export function SidebarMobile({ logOut }: SidebarMobileProps) {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const { toggleTheme, currentTheme, decreaseFontSize, increaseFontSize } = useContext(ThemeContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  function navigateTo(route: To) {
    setShow(false);
    window.scrollTo(0, 0);
    navigate(route);
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    if (windowWidth > 992) {
      handleClose();
    }

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <SidebarMobileStyle>
      <Row className="d-block d-lg-none">
        <Col className="px-0 col">
          <div className="button-show-area">
            <div className="button-show">
              <CgMenuRound onClick={handleShow} />
            </div>
            <div className="central-area">
              {currentTheme === "light" ? (
                <img src={LogoT2m} alt="Logo T2M" />
              ) : (
                <img src={LogoT2mEscuro} alt="Logo T2M" />
              )}
              <span>SGR</span>
            </div>
            <div className="right-area"></div>
          </div>
          <StyledOffcanvas
            show={show}
            onHide={handleClose}
            className="d-block d-lg-none"
          >
            <Offcanvas.Header>
              <Offcanvas.Title>
                <LogoArea>
                  {currentTheme === "light" ? (
                    <img src={LogoT2m} alt="Logo T2M" />
                  ) : (
                    <img src={LogoT2mEscuro} alt="Logo T2M" />
                  )}
                  <span>Sistema de Gerenciamento de Reservas</span>
                </LogoArea>
              </Offcanvas.Title>
              <CloseIconArea>
                <BsArrowBarLeft onClick={handleClose} />
              </CloseIconArea>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SidebarMobileNavStyle>
                <div className="sidebar-nav-item" onClick={increaseFontSize}>
                  <div
                    className="area-icons-label"
                    aria-label="Aumentar tamanho da fonte"
                    title="Aumentar tamanho da fonte"
                    role="button"
                  >
                    <MdOutlineTextIncrease aria-hidden="true" size={24} />
                    <span className="label-sidebar"> Aumentar Fonte</span>
                  </div>
                </div>

                <div className=" sidebar-nav-item" onClick={decreaseFontSize}>
                  <div
                    className="area-icons-label"
                    aria-label="Diminuir tamanho da fonte"
                    title="Diminuir tamanho da fonte"
                    role="button"
                  >
                    <MdOutlineTextDecrease aria-hidden="true" size={24} />
                    <span className="label-sidebar"> Diminuir Fonte</span>
                  </div>
                </div>
                <div className="my-1 sidebar-nav-item" onClick={toggleTheme}>
                  <div
                    className="area-icons-label"
                    aria-pressed={currentTheme === "dark"}
                    aria-label={
                      currentTheme === "dark"
                        ? "Ativar modo claro"
                        : "Ativar modo escuro"
                    }
                    title={
                      currentTheme === "dark"
                        ? "Ativar modo claro"
                        : "Ativar modo escuro"
                    }
                    role="button"
                  >
                    <MdContrast aria-hidden="true" size={24} />
                    <span className="label-sidebar"> Contraste</span>
                  </div>
                </div>

                <div onClick={() => navigateTo("/home")}>
                  <div className="area-icons-label">
                    <CgHome title="Início" size={24} />
                    <span className="label-sidebar">Início</span>
                  </div>
                </div>
                <div className="sidebar-nav">
                  <div className="mb-4 sidebar-nav-item">
                    <div onClick={() => logOut()}>
                      <div className="area-icons-label">
                        <MdOutlineExitToApp title="Sair" size={24} />
                        <span className="label-sidebar">Sair</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SidebarMobileNavStyle>
            </Offcanvas.Body>
          </StyledOffcanvas>
        </Col>
      </Row>
    </SidebarMobileStyle>
  );
}