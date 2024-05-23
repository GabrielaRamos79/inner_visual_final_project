import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const VideoList = ({ videos, onVideoSelect, watchedVideos }) => (
  <ListGroup>
    {videos.map((video, index) => (
      <ListGroup.Item
        key={video.id_content}
        action
        variant="info"
        onClick={() => onVideoSelect(video)}
        disabled={!video.status_video}  // Блокуємо відео, якщо status_video false
      >
        {video.title_video}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default VideoList;
