import './levelCourse.css';
import React, { useEffect, useState } from 'react';
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
  const [watchedVideos, setWatchedVideos] = useState([]);

  const fetchData = async () => {
    const contentData = await ContentHandler.getAllContent();
    setVideos(contentData);
    setWatchedVideos(new Array(contentData.length).fill(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleVideoComplete = (video) => {
    const videoIndex = videos.findIndex(v => v.id_content === video.id_content);
    if (videoIndex !== -1) {
      const updatedWatchedVideos = [...watchedVideos];
      updatedWatchedVideos[videoIndex] = true;
      setWatchedVideos(updatedWatchedVideos);
    }
  };

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Level 1</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <VideoList
                    videos={videos.slice(0, 3)}
                    onVideoSelect={handleVideoSelect}
                    watchedVideos={watchedVideos.slice(0, 3)}
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
                    watchedVideos={watchedVideos.slice(3, 5)}
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
                    watchedVideos={watchedVideos.slice(5, 10)}
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

      <p>Рівні курсу</p>
    </>
  );
};

export default LevelsCourse;




