import styled from "styled-components";

interface SidebarStyleProps {
    collapse: boolean
}

export const SidebarStyle = styled.div<SidebarStyleProps>`  
  user-select: none;
  display: flex;
  flex: 1 auto auto;
  font-size: 100%;
  margin: 0 !important;
  width: ${(props) => (props.collapse ? "7%" : "20%")};
  margin-top: 1rem !important;
  height: calc(100vh - 2rem);
  padding-top: 1rem;
  box-shadow: 1px 1px 5px #000;
  border-radius: 0rem 1rem 1rem 0rem;
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
  background-color: var(--header-background);
  z-index: 9999;
  transition: 0.3s;

  .column-container {
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .collapse-sidebar-action {
      svg {
        font-size: 24px;
        &:hover {
          cursor: pointer;
          color: var(--verde-primario) !important;
        }
      }
    }

    .collapse-sidebar-action:hover {
      cursor: pointer;
    }

    .logo-area {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 1rem;
      background-color: var(--header-background) !important;
      border-bottom: 1px solid var(--branco-secundario); 

      img {
        display: block;
        margin: 0 auto;
        /* max-width: ${(props) => (props.collapse ? "70%" : "6rem")}; */
        max-width: ${(props) => (props.collapse ? "70%" : "40%")};
      }

      span{
        color: var(--login-titulo);
        font-weight: bold;
        text-align: center;
      }
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      align-items: ${(props) => (props.collapse ? "center" : "flex-start")};
      width: ${(props) => (props.collapse ? "auto" : "95%")};

      .sidebar-nav-item {
        width: 100%;
        border-radius: 4px;
        color: var(--preto-primario) !important;
        transition: 0.3s;
        &:hover {
          color: ${(props) =>
            props.collapse
              ? "var(--preto-primario) !important"
              : "var(--branco) !important"};
          background-color: ${(props) =>
            props.collapse ? "none" : "var(--verde-primario)"};
        }
      }

      .area-icons-label {
        display: flex;
        flex-direction: ${(props) => (props.collapse ? "column" : "row")};
        align-items: center;
        width: 100%;
        padding: 0.5rem;
        gap: 0.5rem;
        font-weight: 600;
        transition: 0.3s;

        &:hover {
          cursor: pointer;
          color: ${(props) =>
            props.collapse
              ? "var(--verde-primario) !important"
              : "var(--branco) !important"};
        }
      }
    }    

    .user-container {
      display: flex;
      align-items: center;
      justify-content: ${(props) =>
        props.collapse ? "center" : "space-around"};
      background-color: ${(props) =>
        props.collapse ? "var(--sidebar-background)" : "var(--verde-primario)"};
      color: var(--branco);
      padding: 0.4rem;
      width: 95%;
      border-radius: 5px;

      svg {
        font-size: 24px;
        color: ${(props) =>
          props.collapse ? "var(--preto-primario)" : "var(--branco)"};

        :hover {
          cursor: pointer;
          color: ${(props) =>
            props.collapse ? "var(--verde-primario) !important" : ""};
        }
      }

      .user-info {
        display: flex;
        flex-direction: column;
        font-size: 100%;
      }

      .user-info #user-department {
        font-size: 100%;
        font-weight: 200;
      }
    }

    .active {
      border-radius: 4px;
      color: var(--sidebar-active-icon)
    }
  }
`;