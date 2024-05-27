import './videoCard.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';

const VideoCard = ({ video, onVideoComplete }) => {
  console.log(video);
  return (
    <Container>
      <Row>
        <Col>
          <ReactPlayer
            url={video.url_video}
            controls={true}
            onEnded={() => onVideoComplete(video)}
          />
        </Col>
      </Row>
      <Row>
        <Col>{video.title_video}</Col>
        <Col className="scrollable-text">{video.description}</Col>
      </Row>
      <Row>
        <Col>NOTAS</Col>
      </Row>
    </Container>
  );
};

export default VideoCard;