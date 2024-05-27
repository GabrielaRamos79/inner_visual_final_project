import React from 'react';
import { FaLock, FaUnlock } from 'react-icons/fa'; 
import './videoList.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const VideoList = ({ videos, onVideoSelect }) => (
      <ButtonGroup vertical>
      {videos.map((video) => (
        <button className='button-list mb-2 d-flex'
          key={video.id_content}
          onClick={() => onVideoSelect(video)}
          disabled={!video.status_video}
        >
          {video.status_video? (
            <FaUnlock className="orange-icon" />
          ) : (
            <FaLock className="orange-icon" />
          )}
          {video.title_video}
        </button>
      ))}
    </ButtonGroup>
);

export default VideoList;

