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
import { VideoContext } from './../../context/VideoContext'; // імпорт контексту

const LevelsCourse = () => {
  const { user } = useContext(UserContext);
  const { videos, setVideos } = useContext(VideoContext); 

  // Локальний стан для вибраних відео кожного рівня
  const [selectedVideoLevel1, setSelectedVideoLevel1] = useState(null);
  const [selectedVideoLevel2, setSelectedVideoLevel2] = useState(null);
  const [selectedVideoLevel3, setSelectedVideoLevel3] = useState(null);

  const fetchData = async () => {
    if (user && user.id) {
      try {
        const contentData = await ContentHandler.getAllContent(user.id);
        setVideos(contentData); 
      } catch (error) {
        console.error("Error getting the videos:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleVideoSelect = (video, level) => {
    if (level === 1) setSelectedVideoLevel1(video);
    if (level === 2) setSelectedVideoLevel2(video);
    if (level === 3) setSelectedVideoLevel3(video);
  };

  const handleVideoComplete = async (video) => {
    console.log(`Video ${video.title_video} has ended`);
    const videoIndex = videos.findIndex(v => v.id_content === video.id_content);
    const nextVideo = videos[videoIndex + 1];

    if (nextVideo) {
      try {
        await ContentHandler.updateStatusVideo(user.id, nextVideo.id_content);
        fetchData();
      } catch (error) {
        console.error("Error updating video status:", error);
      }
    }
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Level 1</Accordion.Header>
        <Accordion.Body>
          <Container>
            <Row>
              <Col>
                <VideoList
                  videos={videos.slice(0, 3)}
                  onVideoSelect={(video) => handleVideoSelect(video, 1)}
                />
              </Col>
              <Col>
                {selectedVideoLevel1 && (
                  <VideoCard
                    video={selectedVideoLevel1}
                    onVideoComplete={handleVideoComplete}
                    user={user}
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
                  onVideoSelect={(video) => handleVideoSelect(video, 2)}
                />
              </Col>
              <Col>
                {selectedVideoLevel2 && (
                  <VideoCard
                    video={selectedVideoLevel2}
                    onVideoComplete={handleVideoComplete}
                    user={user}
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
                  onVideoSelect={(video) => handleVideoSelect(video, 3)}
                />
              </Col>
              <Col>
                {selectedVideoLevel3 && (
                  <VideoCard
                    video={selectedVideoLevel3}
                    onVideoComplete={handleVideoComplete}
                    user={user}
                  />
                )}
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default LevelsCourse;
