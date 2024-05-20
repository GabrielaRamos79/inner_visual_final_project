import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './videoList.css'

const VideoList = ({ videos, onVideoSelect }) => (
  <ListGroup>
    {videos.map((video) => (
      <ListGroup.Item
        key={video.id_content}
        action
        variant="info"
        onClick={() => onVideoSelect(video)}
      >
        {video.title_video}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default VideoList;