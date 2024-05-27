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
import { VideoContext } from './../../context/VideoContext'; 

const LevelsCourse = () => {
  const { user } = useContext(UserContext);
  const { videos, setVideos, selectedVideo, setSelectedVideo, progress, setProgress } = useContext(VideoContext); 
  const [activeKey, setActiveKey] = useState('0');

  const fetchData = async () => {
    if (user && user.id) {
      try {
        const contentData = await ContentHandler.getAllContent(user.id);
        //console.log('Fetched videos:', contentData);
        setVideos(contentData); 
      } catch (error) {
        console.error("Error getting the videos:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const updateProgress = (level) => {
    const totalVideos = level.length;
    const watchedVideos = level.filter(video => video.status_video === 1).length;

    //console.log('Total videos:', totalVideos, 'Watched videos:', watchedVideos);

    if (totalVideos === 0) {
      return 0;
    }

    return Math.round((watchedVideos / totalVideos) * 100);
  };

  useEffect(() => {
    setProgress({
      level1: updateProgress(videos.slice(0, 3)),
      level2: updateProgress(videos.slice(3, 5)),
      level3: updateProgress(videos.slice(5, 10))
    });
  }, [videos]);

  const handleVideoComplete = async (video) => {
    //console.log(`Video ${video.title_video} has ended`);
    
    const videoIndex = videos.findIndex(v => v.id_content === video.id_content);
    const nextVideo = videos[videoIndex + 1];

    if (nextVideo) {
      try {
        await ContentHandler.updateStatusVideo(user.id, nextVideo.id_content);
        console.log('Video status updated successfully');
        await fetchData();
      } catch (error) {
        console.error("Error updating video status:", error);
      }
    }
  };

  // useEffect(() => {
  //   console.log('Updated progress:', progress);
  // }, [progress]);

  const handleAccordionSelect = (eventKey) => {
    setActiveKey(eventKey);
    setSelectedVideo(null); 
  };

  return (
    <Accordion activeKey={activeKey} onSelect={handleAccordionSelect}>
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
                    key={selectedVideo.id_content}
                    video={selectedVideo}
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
                  onVideoSelect={handleVideoSelect}
                />
              </Col>
              <Col>
                {selectedVideo && (
                  <VideoCard
                    key={selectedVideo.id_content}
                    video={selectedVideo}
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
        <Accordion.Header>Level 3 </Accordion.Header>
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
                    key={selectedVideo.id_content}
                    video={selectedVideo}
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



