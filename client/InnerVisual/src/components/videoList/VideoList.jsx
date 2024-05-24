import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaLock, FaUnlock } from 'react-icons/fa'; 
import './videoList.css'


const VideoList = ({ videos, onVideoSelect }) => (
  <ListGroup>
    {videos.map((video) => (
      <ListGroup.Item
        key={video.id_content}
        action
        variant="info"
        onClick={() => onVideoSelect(video)}
        disabled={!video.status_video}
      >
        {video.status_video ? (
          <FaUnlock className="orange-icon" />
        ) : (
          <FaLock className="orange-icon" />
        )}
        {video.title_video}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default VideoList;

