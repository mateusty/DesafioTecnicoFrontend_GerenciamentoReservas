import { useState } from "react";
import type { SubmitEvent } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import {
  ButtonWrapper,
  FormWrapper,
  LoginForm,
  LoginImage,
  LoginInfo,
  Logo,
  ProjectSubtitle,
  ProjectTitle,
  RegisterText,
  StyledInputGroupText,
} from "./style.ts";

import logoClaro from "../../assets/t2m-logo-tema-claro.png";
import logoEscuro from "../../assets/t2m-logo-tema-escuro.png";
import { toast } from "react-toastify";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ButtonComponent from "../../Components/ButtonComponent/index.tsx";

const DOMINIO_EMAIL = "@t2mlab.com";

const Login = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [currentTheme, setCurrentTheme] = useState("light");


  // async function handleLogin(email: string, password: string) {
  //   let finalEmail = email;

  //   if (email.includes("@")) {
  //     if (!email.endsWith(DOMINIO_EMAIL)) {
  //       toast.error(
  //         "O email é invalido, deve ser do dominio @t2mlab.com ou apenas o usuario sem o dominio",
  //       );
  //       return;
  //     }
  //   } else {
  //     finalEmail = email + DOMINIO_EMAIL;
  //   }
  //   console.log(finalEmail + " " + password);

  // }

  const [showSenha, setShowSenha] = useState(false);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // await handleLogin(email, password);
  };

  return (
    <Container fluid>
      <Row>
        <LoginImage sm={0} md={7}></LoginImage>
        <Col md={5}>
          <FormWrapper>
            <LoginInfo>
              <Logo
                src={currentTheme == "light" ? logoClaro : logoEscuro}
                width={250}
                alt="T2M"
              />
              <Row>
                <ProjectTitle
                  color={currentTheme == "light" ? "#013D32" : "#FFF"}
                >
                  SGR
                </ProjectTitle>
              </Row>
              <Row>
                <ProjectSubtitle>
                  Sistema de Gerenciamento de Reservas
                </ProjectSubtitle>
              </Row>
            </LoginInfo>
            <LoginForm onSubmit={handleSubmit}>
              <InputGroup className="mb-4">
                <StyledInputGroupText id="basic-addon1">@</StyledInputGroupText>
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <StyledInputGroupText id="basic-addon2">
                  {DOMINIO_EMAIL}
                </StyledInputGroupText>
              </InputGroup>
              <InputGroup className="mb-4">
                <StyledInputGroupText id="basic-addon1">
                  <HiOutlineLockClosed />
                </StyledInputGroupText>
                <Form.Control
                  placeholder="Recipient's password"
                  aria-label="Password"
                  type={showSenha ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <StyledInputGroupText
                  id="basic-addon2"
                  onClick={() => setShowSenha(!showSenha)}
                  style={{ cursor: "pointer" }}
                >
                  {showSenha ? <BsEye /> : <BsEyeSlash />}
                </StyledInputGroupText>
              </InputGroup>
              <ButtonWrapper>
                <ButtonComponent
                  type="submit"
                  size="18rem"
                  $bgColor="var(--login-botao)"
                  $textColor="#FFFFFF"
                  action={() => null}
                  alternativeText="Submit Button"
                  >
                  Entrar
                </ButtonComponent>
              </ButtonWrapper>
              <RegisterText>Criar uma nova conta</RegisterText>
            </LoginForm>
          </FormWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;