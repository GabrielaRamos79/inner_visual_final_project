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
import { VideoContext } from "./../../context/VideoContext";

const LevelsCourse = () => {
  const { user } = useContext(UserContext);
  const { videos, setVideos, selectedVideo, setSelectedVideo } =
    useContext(VideoContext);
  const [activeKey, setActiveKey] = useState("0");

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
    setSelectedVideo(null);
  };

  return (
    <>
      <section className="levelContainer">
        <h2 className="titleCourse mt-5 mb-5">PRÁCTICAS</h2>
        <div className="ms-3 me-4" xl={12} xs={12} sm={12} md={12}>
          <Accordion activeKey={activeKey} onSelect={handleAccordionSelect}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>NIVEL 1</Accordion.Header>
              <Accordion.Body>
                <Container fluid>
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={2} xl={3} className="p-0">
                      <VideoList
                        videos={videos.slice(0, 7)}
                        onVideoSelect={handleVideoSelect}
                      />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={9} xl={9} className="mt-5">
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
        </div>

        <div className="ms-3 me-4" xl={12} xs={12} sm={12} md={12}>
          <Accordion activeKey={activeKey} onSelect={handleAccordionSelect}>
            <Accordion.Item eventKey="1">
              <Accordion.Header>NIVEL 2</Accordion.Header>
              <Accordion.Body>
                <Container fluid>
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={2} xl={3} className="p-0">
                      <VideoList
                        videos={videos.slice(7, 9)}
                        onVideoSelect={handleVideoSelect}
                      />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={9} xl={9} className="mt-5">
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
        </div>

        <div className="ms-3 me-4" xl={12} xs={12} sm={12} md={12}>
          <Accordion activeKey={activeKey} onSelect={handleAccordionSelect}>
            <Accordion.Item eventKey="2">
              <Accordion.Header>NIVEL 3</Accordion.Header>
              <Accordion.Body>
                <Container fluid>
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={2} xl={3} className="p-0">
                      <VideoList
                        videos={videos.slice(9, 11)}
                        onVideoSelect={handleVideoSelect}
                      />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={9} xl={9} className="mt-5">
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
        </div>
      </section>
    </>
  );
};

export default LevelsCourse;
