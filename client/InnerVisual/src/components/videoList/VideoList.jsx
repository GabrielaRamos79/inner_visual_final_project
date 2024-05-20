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
        disabled={index > 0 && !watchedVideos[index - 1]}  // Блокуємо відео, якщо попереднє не переглянуте
      >
        {video.title_video}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default VideoList;