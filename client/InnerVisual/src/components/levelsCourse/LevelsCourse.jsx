import './levelCourse.css'
import React from 'react'
import ReactPlayer from 'react-player'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Render a YouTube video player

const LevelsCourse = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>NIVEL 1</Accordion.Header>
          <Accordion.Body>

          <Container>
      <Row>

        <Col>

        
              <ButtonGroup vertical>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            
        </Col>

        <Col>

        <Container>
              <Row>
                <Col>
                  <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls={true} />
                </Col>
              </Row>
              <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
              </Row>
              <Row>
                <Col>NOTAS</Col>
              </Row>
            </Container>

        </Col>
      </Row>

    </Container>






            


          </Accordion.Body>
        </Accordion.Item>
      </Accordion>




      <p>Niveles del curso</p>
    </>
  )
}

export default LevelsCourse
