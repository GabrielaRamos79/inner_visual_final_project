import './levelCourse.css'
import ReactPlayer from 'react-player'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useEffect, useState } from 'react';
import VideoCard from '../videoCard/VideoCard';

// Render a YouTube video player

const LevelsCourse = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/content/get_content/');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);



  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>NIVEL 1</Accordion.Header>
          <Accordion.Body>

          <Container>
      <Row>

        <Col>

        
        <ul>
        {videos.map((video) => (
          <li key={video.id} onClick={() => window.location.href = `/video/${video.id}`}>
            {video.title_video}
          </li>
        ))}
      </ul>
            
        </Col>

        <Col>

        <Container>
              {/* <Row>
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
              </Row> */}
              <VideoCard/>
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
