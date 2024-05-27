import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaLock, FaUnlock } from 'react-icons/fa'; 
import './videoList.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const VideoList = ({ videos, onVideoSelect }) => (
  // <ListGroup>
  //   {videos.map((video) => (
  //     <ListGroup.Item
  //       key={video.id_content}
  //       action
  //       variant="info"
  //       onClick={() => onVideoSelect(video)}
  //       disabled={!video.status_video}
  //     >
  //       {video.status_video ? (
  //         <FaUnlock className="orange-icon" />
  //       ) : (
  //         <FaLock className="orange-icon" />
  //       )}
  //       {video.title_video}
  //     </ListGroup.Item>
  //   ))}
  // </ListGroup>
      <ButtonGroup vertical>
      {videos.map((video) => (
        <Button
          key={video.id_content}
          onClick={() => onVideoSelect(video)}
          disabled={!video.status_video}
        >
          {video.status_video? (
            <FaUnlock className="orange-icon" /> // Icono desbloqueado
          ) : (
            <FaLock className="orange-icon" /> // Icono bloqueado
          )}
          {video.title_video}
        </Button>
      ))}
    </ButtonGroup>
);

export default VideoList;

