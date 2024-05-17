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

        <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic temporibus iste dignissimos, delectus excepturi ea quam alias soluta dolore voluptates animi reprehenderit sunt nulla deleniti possimus commodi neque quas praesentium?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat velit voluptatibus totam. Consectetur labore maxime, dicta, veritatis nemo repellendus eligendi vitae assumenda laborum hic similique incidunt, vel quidem totam.
        </Accordion.Body>
      </Accordion.Item>  
      </Accordion>




      <p>Niveles del curso</p>
    </>
  )
}

export default LevelsCourse
