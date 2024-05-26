import "./levelCourse.css";
import React, { useEffect, useState, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ContentHandler } from "../../handler/ContentHandler";
import VideoCard from "../videoCard/VideoCard";
import VideoList from "../videoList/VideoList";
import { UserContext } from "../../context/AuthContext.jsx";
import { VideoContext } from "./../../context/VideoContext"; // імпорт контексту

const LevelsCourse = () => {
  const { user } = useContext(UserContext);
  const { videos, setVideos, selectedVideo, setSelectedVideo } =
    useContext(VideoContext);
  const [activeKey, setActiveKey] = useState("0"); // Додати стан для відстеження поточного відкритого рівня

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

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleVideoComplete = async (video) => {
    console.log(`Video ${video.title_video} has ended`);
    const videoIndex = videos.findIndex(
      (v) => v.id_content === video.id_content
    );
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

  const handleAccordionSelect = (eventKey) => {
    setActiveKey(eventKey);
    setSelectedVideo(null); // Скинути обраний відео при відкритті нового рівня
  };

  return (
    <section className="levelContainer">
      <section className="levels-course">
        <h2 className="titleCourse">PRÁCTICAS</h2>
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
                        key={selectedVideo.id_content} // Додавання ключа змушує React перемонтувати компонент, коли змінюється selectedVideo.
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
      </section>
    </section>
  );
};

export default LevelsCourse;
