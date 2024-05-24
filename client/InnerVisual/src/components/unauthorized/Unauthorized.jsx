import "./unauthorized.css";
import NavbarCustom from "./../navbarCustom/NavbarCustom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import error from "../../assets/img/error.svg";
const Unauthorized = () => {
  return (
    <>
      <section>
        <Container className="d-flex justify-content-center mt-5 mb-5">
          <Row>
            <Col>
              <figure>
                <img src={error} alt="" className="custom-image-size" />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Unauthorized;
