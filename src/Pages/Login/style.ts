import styled from "styled-components";
import loginImage from "../../assets/t2m-login-image.svg";
import { Col, InputGroup } from "react-bootstrap";

export const LoginImage = styled(Col)`
    flex: 0 0 auto;
    background-image: url(${loginImage});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 70%;
`;

export const Logo = styled.img` 
    height: 12rem;
    width: 17rem;
`;

export const FormWrapper = styled.div`
    display: flex;
    height: 100vh;
    font-size: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: 70%;
`;

export const ProjectTitle = styled.h1<{ color: string }>`
    font-size: 2rem;
    margin-top: 2rem;
    color: ${({color}) => `var(${color})`};
`;

export const ProjectSubtitle = styled.span`
    color: var(--preto-primario);
    font-size: 1.25rem;
`;

export const LoginInfo = styled.div`
    text-align: center;
    align-self: center;
    align-items: center;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    -moz-box-pack: justify;
    align-items: space-between;
    width: 90%;
    padding: 20px;
`;

export const RegisterText = styled.a`
    margin-top: 0.625rem;
    font-size: 1.25rem;
    align-self: center;
    text-decoration: none;
    cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    align-self: center;
    margin-top: 2rem;
`;

export const StyledInputGroupText = styled(InputGroup.Text)`
    background-color: #E9ECEF;
    color: #212529;
    border-color: #ced4da;
`;