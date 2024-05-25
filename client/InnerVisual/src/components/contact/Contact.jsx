import React, { useState } from "react";
import {CustomSweetAlertOk,CustomSweetAlertError} from "../../components/sweetAlertComponent/CustomSweetAlert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contact.css";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [surname, setSurname] = useState("");
  const [surnameTouched, setSurnameTouched] = useState(false);

  const [telephone, setTelephone] = useState("");
  const [telephoneTouched, setTelephoneTouched] = useState(false);

  const [message, setMessage] = useState("");
  const [messageTouched, setMessageTouched] = useState(false);

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptTermsTouched, setAcceptTermsTouched] = useState(false);

  const emailRegex = /^\S+@\S+\.\S+$/;
  const telephoneRegex = /^\d{9}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      CustomSweetAlertError("El nombre es obligatorio.");
      setNameTouched(true);
      return;
    }

    if (!surname.trim()) {
      CustomSweetAlertError("El apellido es obligatorio.");
      setSurnameTouched(true);
      return;
    }

    if (!telephone.trim() || !telephoneRegex.test(telephone)) {
      CustomSweetAlertError("Introduce un teléfono válido.");
      setTelephoneTouched(true);
      return;
    }

    if (!emailRegex.test(email)) {
      CustomSweetAlertError("Introduce un email válido.");
      setEmailTouched(true);
      return;
    }

    if (message.length < 5) {
      CustomSweetAlertError("El mensaje debe tener al menos 5 caracteres.");
      setMessageTouched(true);
      return;
    }

    if (!acceptTerms) {
      CustomSweetAlertError("Debes aceptar el tratamiento de datos.");
      setAcceptTermsTouched(true);
      return;
    }
    CustomSweetAlertOk(
      "Mensaje enviado correctamente, nuestro administrador se pondará en contacto usted. Gracias"
    );

    setName("");
    setSurname("");
    setTelephone("");
    setEmail("");
    setMessage("");
    setAcceptTerms("");

    setNameTouched(false);
    setSurnameTouched(false);
    setTelephoneTouched(false);
    setEmailTouched(false);
    setMessageTouched(false);
    setAcceptTermsTouched(false);
  };

  return (
    <>
          {/* <div className='container-contact-with-us'>
         <div className='container-title-contact'>
            <h2 className='titleJobs-container-contact-with-us'>CONTACTO</h2>
         </div>
             <div className="contact-form-contact-with-us">
                  <form onSubmit={handleSubmit}>
                      <div className="input-group-contact-row">

                        <div className="input-group-name-contact-with-us">
                          <label htmlFor="name-contact-with-us">Nombre</label>
                          <input
                            type="text"
                            id="name-contact-with-us"
                            value={name}
                            placeholder="Introduce tu nombre"
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => setNameTouched(true)}
                            className={`input-field ${nameTouched && !name.trim() ? 'error' : ''}`}
                          />
                        </div>

                        <div className="input-group-surname-contact-with-us">
                          <label htmlFor="surname-contact-with-us">Apellido</label>
                          <input
                            type="text"
                            id="surname-contact-with-us"
                            value={surname}
                            placeholder="Introduce tu apellido"
                            onChange={(e) => setSurname(e.target.value)}
                            onBlur={() => setSurnameTouched(true)}
                            className={`input-field ${surnameTouched && !surname.trim() ? 'error' : ''}`}
                          />
                        </div>

                      </div>

                      <div className="input-group-contact-row">

                        <div className="input-group-telephone-contact-with-us">
                          <label htmlFor="telephone-contact-with-us">Teléfono</label>
                          <input
                            type="tel"
                            id="telephone-contact-with-us"
                            value={telephone}
                            placeholder="Introduce tu telféfono"
                            onChange={(e) => setTelephone(e.target.value)}
                            onBlur={() => setTelephoneTouched(true)}
                            className={`input-field ${telephoneTouched && (!telephone.trim() || !telephoneRegex.test(telephone)) ? 'error' : ''}`}
                          />
                        </div>

                        <div className="input-group-email-contact-with-us">
                          <label htmlFor="email-contact-with-us">Correo Electrónico</label>
                          <input
                            type="email"
                            id="email-contact-with-us"
                            value={email}
                            placeholder="Introduce tu correo electrónico"
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setEmailTouched(true)}
                            className={`input-field half-width ${emailTouched && !emailRegex.test(email) ? 'error' : ''}`}
                          />
                        </div>

                      </div>

                      <div className="input-group-message-contact-with-us">
                        <div className='input-message-contact'>
                        <label htmlFor="message-contact-with-us">Mensaje</label>
                        </div>
                        <div></div>
                        <textarea
                          id="message-contact-with-us"
                          value={message}
                          placeholder="Escribe tu consulta"
                          onChange={(e) => setMessage(e.target.value)}
                          onBlur={() => setMessageTouched(true)}
                          className={`textarea-field ${messageTouched && message.length < 5 ? 'error' : ''}`}
                        />
                      </div>

                      <div className="input-group-terms-contact-with-us">
                                       
                        <div className="checkbox-label-container">
                          <div className="checkbox-container">
                              <input
                                type="checkbox"
                                id="terms-contact-with-us"
                                checked={acceptTerms}
                                onChange={(e) => setAcceptTerms(e.target.checked)}
                                onBlur={() => setAcceptTermsTouched(true)}
                              />
                          </div>
                          <label htmlFor="terms-contact-with-us">
                            He leído y acepto los <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">términos y condiciones</a></label>
                       
                           <div className="submit-button-wrapper-contact-with-us"> 
                           <button type="submit" className="submit-button-contact-with-us">Enviar Mensaje</button>
                           </div> 
                        </div>  
                      </div>                      
                   </form>                                 
             </div>
         </div> */}
      <Container fluid className="mb-5 mt-4">
        <Row>
          <Col>
            <h2 className="contact-title ms-5">CONTACTO</h2>
          </Col>
        </Row>
      </Container>
      <Container fluid className="d-flex row">
        <Row>
          <Col>
            <form action="post" onSubmit={handleSubmit} style={{ marginBottom: '130px' }}>
              <Container fluid className="ms-5">
                <Row className="me-5">
                  <Col md={7}>
                    <p className="fw-bold mb-2">NOMBRE</p>
                    <input
                      type="text"
                      id="name-contact-with-us"
                      value={name}
                      placeholder="Introduce tu nombre"
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setNameTouched(true)}
                      className={`input ${
                        nameTouched && !name.trim() ? "error" : ""
                      }`}
                    />
                  </Col>
                  <Col md={5} className="">
                    <p className="fw-bold mb-2">APELLIDOS</p>
                    <input
                      type="text"
                      id="surname-contact-with-us"
                      value={surname}
                      placeholder="Introduce tu Apellido"
                      onChange={(e) => setSurname(e.target.value)}
                      onBlur={() => setSurnameTouched(true)}
                      className={`input ${
                        surnameTouched && !surname.trim() ? "error" : ""
                      }`}
                    />
                  </Col>
                </Row>
              </Container>

              <Container fluid className="ms-5 mt-5">
                <Row className="me-5">
                  <Col md={5}>
                    <p className="fw-bold mb-2">TELÉFONO</p>
                    <input
                      type="text"
                      id="telephone-contact-with-us"
                      value={telephone}
                      placeholder="Introduce tu teléfono"
                      onChange={(e) => setTelephone(e.target.value)}
                      onBlur={() => setTelephoneTouched(true)}
                      className={`input ${
                        telephoneTouched &&
                        (!telephone.trim() || !telephoneRegex.test(telephone))
                          ? "error"
                          : ""
                      }`}
                    />
                  </Col>
                  <Col md={7}>
                    <p className="fw-bold mb-2">EMAIL</p>
                    <input
                      type="text"
                      id="email-contact-with-us"
                      value={email}
                      placeholder="Introduce tu email"
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setEmailTouched(true)}
                      className={`input ${
                        emailTouched &&
                        (!email.trim() || !emailRegex.test(email))
                          ? "error"
                          : ""
                      }`}
                    />
                  </Col>
                </Row>
              </Container>
              <Container fluid className="ms-5 mt-5">
                <Row className="me-5">
                  <Col>
                  <p className="fw-bold mb-2">MENSAJE</p>
                    <textarea
                      id="message-contact-with-us"
                      value={message}
                      placeholder="Escribe tu consulta"
                      onChange={(e) => setMessage(e.target.value)}
                      onBlur={() => setMessageTouched(true)}
                      className={`textarea ${
                        messageTouched && message.length < 5 ? "error" : ""
                      }`}
                    />
                  </Col>
                </Row>
              </Container>
              <Container fluid className="ms-5 mt-5">
                <Row className="me-5">
                  <Col md={4} className="d-flex">
                    <Form.Group className="mb-3 ms-2" id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"

                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        onBlur={() => setAcceptTermsTouched(true)}
                      />
                    </Form.Group>
                    <label htmlFor="terms-contact-with-us" className="ms-2 mb-3">
                      He leído y acepto los{" "}
                      <a
                        href="/terms"
                        className="terms-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        
                      >
                        términos y condiciones
                      </a>
                    </label>
                  </Col>
                  <Col md={8} className="d-flex justify-content-center mb-4">
                    <button className="btn-register p-1" type="submit">
                      ENVIAR
                    </button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
