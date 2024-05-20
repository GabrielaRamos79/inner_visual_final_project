import './levelCourse.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContentHandler } from '../../handler/ContentHandler';
import VideoCard from '../videoCard/VideoCard';
import VideoList from '../videoList/VideoList'; 

const LevelsCourse = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const fetchData = async () => {
    const contentData = await ContentHandler.getAllContent();
    setVideos(contentData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>NIVEL 1</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <VideoList videos={videos.slice(0, 3)} onVideoSelect={handleVideoSelect} />
                </Col>
                <Col>
                  {selectedVideo && <VideoCard video={selectedVideo} />}
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>NIVEL 2</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <VideoList videos={videos.slice(3, 5)} onVideoSelect={handleVideoSelect} />
                </Col>
                <Col>
                  {selectedVideo && <VideoCard video={selectedVideo} />}
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>NIVEL 3</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <VideoList videos={videos.slice(5, 10)} onVideoSelect={handleVideoSelect} />
                </Col>
                <Col>
                  {selectedVideo && <VideoCard video={selectedVideo} />}
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <p>Niveles del curso</p>
    </>
  );
};

export default LevelsCourse;



