import React, { useState } from "react";
import { useUserHandler } from "../../handler/AuthHandler";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginphoto from "../../assets/img/loginphoto.svg";
import Form from "react-bootstrap/Form";
import { CustomSweetAlertError, CustomSweetAlertOk } from "../sweetAlertComponent/CustomSweetAlert";



const LoginComponent = ({ showRegisterForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useUserHandler();

  const handleRegisterLinkClick = () => {
    showRegisterForm();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      handleLogin(email, password);
      CustomSweetAlertOk('¡Login exitoso!').then(() => {
        setEmail("");
        setPassword("");
      });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center  container-custom-register ">
        <Container className="card-custom p-4">
          <Container>
          <Row className="mt-5 mb-5 ">
            <Col lg={12} xl={6} md={12} >
              <p className="fw-bold mb-2">LOGIN</p>
              <p className="fs-6">
                Si no tienes cuenta {" "}
                <a className="login-link" onClick={handleRegisterLinkClick}>
                  regístrate pinchando aquí
                </a>
                .
              </p>
              <hr className="hr" />
             
              <form onSubmit={handleSubmit} style={{ marginTop: '150px' }}>
                <Form.Group className="mb-3">
                <Form.Label className="fw-bold" htmlFor="formEmail">
                  EMAIL
                </Form.Label>
                <Form.Control
                // <div className="form-outline mb-4">
                //   <input
                    type="email"
                    id="formEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Introduce tu email"
                  />
                  </Form.Group>
                {/* </div> */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" htmlFor="formPassword">CONTRASEÑA</Form.Label>
                <Form.Control
                // <div className="form-outline mb-4">
                //   <input
                    type="password"
                    id="formPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Introduce tu contraseña"
                  />
              </Form.Group>
                {/* </div> */}
                
                <Container className="mb-4 ms-0">
                  <Row className="row-checkbox"> 
                    <Col>
                      <Form.Group id="formGridCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="Recordar contraseña"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <p className="fs-6">
                        {" "}
                        <a href="#" className="login-link">
                          Olvidé mi contraseña
                        </a>
                        .
                      </p>
                    </Col>
                  </Row>
                </Container>
                <button type="submit" className="btn-register p-1">
                  ENVIAR
                </button>
              </form>
            </Col>

            <Col>
              <img
                src={loginphoto}
                alt="foto login"
                
              />
            </Col>
          </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default LoginComponent;
