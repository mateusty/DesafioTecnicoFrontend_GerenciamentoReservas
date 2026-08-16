import { useContext, useState } from "react";
import { useNavigate, type To } from "react-router-dom";

import LogoT2m from "../../../assets/t2m-logo-tema-claro.png";
import LogoT2mEscuro from "../../../assets/t2m-logo-tema-escuro.png"

import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { CgHome } from "react-icons/cg";
import { MdContrast, MdOutlineExitToApp, MdOutlineTextDecrease, MdOutlineTextIncrease } from "react-icons/md";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SidebarStyle } from "./styles";
import { ThemeContext } from "../../../Context/ThemeContext";

interface SidebarProps {
    logOut: () => void;
}

export function SidebarDesktop({ logOut }: SidebarProps) {
  const [sideBarCollapse, setSideBarCollapse] = useState<boolean>(true);
  const navigate = useNavigate();
  const { toggleTheme, currentTheme, decreaseFontSize, increaseFontSize } = useContext(ThemeContext);

  function navigateTo(route: To) {
    setSideBarCollapse(true);
    window.scrollTo(0, 0);
    navigate(route);
  }

  return (
    <Col className="px-0 d-none d-lg-block" lg={1}>
      <SidebarStyle collapse={sideBarCollapse}>
        <Row>
          <Col className="column-container">
            <div className="logo-area">
              {
                currentTheme === 'light' ?
                <img src={LogoT2m} alt="Logo T2M" />
                :
                <img src={LogoT2mEscuro} alt="Logo T2M" />
              }
              {sideBarCollapse ? <span>SGR</span> : <span>Sistema de Gerenciamento de Reservas</span>}              
            </div>

            <div className="sidebar-nav">
              <div className="mt-3 sidebar-nav-item" onClick={toggleTheme}>
                <div
                  className="area-icons-label"
                  aria-pressed={currentTheme === "dark"}
                  aria-label={currentTheme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
                  title={currentTheme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
                  role="button"
                >
                  <MdContrast aria-hidden="true" size={24}/>
                  {sideBarCollapse ?
                      <span className="label-sidebar d-none d-xxl-block">Contraste</span>
                    :
                      <span className="label-sidebar">Contraste</span>
                    }
                </div>
              </div>
              <div className="sidebar-nav-item" onClick={increaseFontSize}>
                <div
                  className="area-icons-label"
                  aria-label="Aumentar tamanho da fonte"
                  title="Aumentar tamanho da fonte"
                  role="button"
                >
                  <MdOutlineTextIncrease aria-hidden="true" size={24}/>
                  {sideBarCollapse ?
                      <span className="label-sidebar d-none d-xxl-block">Aumentar</span>
                    :
                      <span className="label-sidebar">Aumentar Fonte</span>
                  }
                </div>
              </div>
              <div className="sidebar-nav-item" onClick={decreaseFontSize}>
                <div
                  className="area-icons-label"
                  aria-label="Diminuir tamanho da fonte"
                  title="Diminuir tamanho da fonte"
                  role="button"
                >
                  <MdOutlineTextDecrease aria-hidden="true" size={24}/>
                  {sideBarCollapse ?
                      <span className="label-sidebar d-none d-xxl-block">Diminuir</span>
                    :
                      <span className="label-sidebar">Diminuir Fonte</span>
                  }
                </div>
              </div>
              
              <div className="my-3 sidebar-nav-item">
                <div onClick={() => setSideBarCollapse(!sideBarCollapse)}>
                  <div className="area-icons-label">
                    {sideBarCollapse ? (
                      <BsArrowBarRight
                        title="Expandir"
                        size={24}
                      />
                    ) : (
                      <BsArrowBarLeft
                        title="Retrair"
                        size={24}
                      />
                    )}
                    {sideBarCollapse ?
                      <span className="label-sidebar d-none d-xxl-block">Expandir</span>
                    :
                      <span className="label-sidebar">Retrair</span>
                    }
                  </div>
                </div>
              </div>
              <div className="sidebar-nav-item">
                <div onClick={() => navigateTo("/home")} className={location.pathname.startsWith("/home") ? "active" : ""}>
                  <div className="area-icons-label">
                    <CgHome title="Início" size={24}/>
                    {
                      sideBarCollapse ?
                        <span className="label-sidebar d-none d-xxl-block">Início</span>
                        :
                        <span className="label-sidebar">Início</span>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-nav">
              <div className="mb-4 sidebar-nav-item">
                <div onClick={() => logOut()}>
                  <div className="area-icons-label">
                    <MdOutlineExitToApp title="Sair" size={24}/>
                    {sideBarCollapse ? (
                      ""
                    ) : (
                      <span className="label-sidebar">Sair</span>
                    )}{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </SidebarStyle>
    </Col>
  );
}