import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { VideoContext } from './../../context/VideoContext'; 
import './modalAllNotes.css'

const ModalAllNotes = ({ show, handleClose }) => {
  const { videos } = useContext(VideoContext); 

  return (
    <Modal show={show} onHide={handleClose} style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }} size='lg' >
      <Modal.Header closeButton style={{ backgroundColor: 'var(--lightblue)' }}>
        <Modal.Title className='custom-title'>Notas</Modal.Title>
      </Modal.Header >
      <Modal.Body className="custom-body">
        {videos.length > 0 ? (
          videos.map(video => (
            <div key={video.id_content} className="custom-content">
              <h5>{video.title_video}</h5>
              <p>{video.notes}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </Modal.Body>
      <Modal.Footer className="custom-footer">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAllNotes;
