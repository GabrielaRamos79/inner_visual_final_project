import React, { useState } from "react";
import {
  CustomSweetAlertOk,
  CustomSweetAlertError,
} from "../../components/sweetAlertComponent/CustomSweetAlert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./jobs.css";

const Jobs = () => {
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
    if (!telephone.trim()) {
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
      <Container fluid className="mt-4 content-jobs d-flex justify-content-center">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={6} >
              <h2 className="jobs-title mb-5">TRABAJA CON NOSOTROS</h2>
              <p>
                NOS ENCANTA EL TALENTO CON ESPÍRITU JÓVEN Y RESPONSABLE.
              </p><br />
              <p>
                SI TE GUSTA LO QUE HACEMOS EN INNER VISUALS Y CREES QUE PUEDES AYUDARNOS A EXPANDIRNOS,
                NO TE CORTES Y ENVÍANOS UN EMAIL.
              </p>
            </Col>

            <Col xs={12} md={12} lg={6} className="d-flex justify-content-center">
              <form action="post" className="form-jobs" onSubmit={handleSubmit}>
                <p className="fw-bold mb-2">NOMBRE</p>
                <input
                  type="text"
                  id="name-jobs-work-with-us"
                  value={name}
                  placeholder="Introduce tu nombre"
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setNameTouched(true)}
                  className={`input-jobs ${nameTouched && !name.trim() ? "error" : ""
                    }`}
                />
                <p className="fw-bold mb-2 mt-4">TELÉFONO</p>
                <input
                  type="text"
                  id="telephone-jobs-work-with-us"
                  value={telephone}
                  placeholder="Introduce tu teléfono"
                  onChange={(e) => setTelephone(e.target.value)}
                  onBlur={() => setTelephoneTouched(true)}
                  className={`input-jobs ${telephoneTouched &&
                      (!telephone.trim() || !telephoneRegex.test(telephone))
                      ? "error"
                      : ""
                    }`}
                />
                <p className="fw-bold mb-2 mt-4">EMAIL</p>
                <input
                  type="text"
                  id="email-jobs-work-with-us"
                  value={email}
                  placeholder="Introduce tu correo electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  className={`input-jobs ${emailTouched && !emailRegex.test(email) ? "error" : ""
                    }`}
                />
                <Col className="d-flex mt-3">
                  <Form.Group className="mb-3 " id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      onChange={() => setTermsAccepted(!termsAccepted)}
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
                <button className="btn-register p-1" type="submit">
                  ENVIAR
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Jobs;
