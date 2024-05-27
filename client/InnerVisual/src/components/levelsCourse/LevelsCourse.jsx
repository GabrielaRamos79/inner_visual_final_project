import './levelCourse.css';
import React, { useEffect, useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContentHandler } from '../../handler/ContentHandler';
import VideoCard from '../videoCard/VideoCard';
import VideoList from '../videoList/VideoList';
import { UserContext } from '../../context/AuthContext.jsx';

const LevelsCourse = () => {
  const { user } = useContext(UserContext);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeKey, setActiveKey] = useState("0");

  const fetchData = async () => {
    if (user && user.id) {
      const contentData = await ContentHandler.getAllContent(user.id);
      setVideos(contentData);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleVideoComplete = (video) => {
    console.log(`Video ${video.title_video} has ended`);
  };

  const handleAccordionChange = (key) => {
    setActiveKey(key);
    setSelectedVideo(null);
  };

  return (
    <>
      <Accordion activeKey={activeKey} onSelect={handleAccordionChange}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Level 1</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <VideoList
                    videos={videos.slice(0, 3)}
                    onVideoSelect={handleVideoSelect}
                  />
                </Col>
                <Col>
                  {selectedVideo && (
                    <VideoCard
                      video={selectedVideo}
                      onVideoComplete={handleVideoComplete}
                    />
                  )}
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Level 2</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <VideoList
                    videos={videos.slice(3, 5)}
                    onVideoSelect={handleVideoSelect}
                  />
                </Col>
                <Col>
                  {selectedVideo && (
                    <VideoCard
                      video={selectedVideo}
                      onVideoComplete={handleVideoComplete}
                    />
                  )}
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Level 3</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <VideoList
                    videos={videos.slice(5, 10)}
                    onVideoSelect={handleVideoSelect}
                  />
                </Col>
                <Col>
                  {selectedVideo && (
                    <VideoCard
                      video={selectedVideo}
                      onVideoComplete={handleVideoComplete}
                    />
                  )}
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default LevelsCourse;


