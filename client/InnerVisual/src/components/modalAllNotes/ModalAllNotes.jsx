// ModalAllNotes.jsx
import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { VideoContext } from './../../context/VideoContext'; // імпорт контексту

const ModalAllNotes = ({ show, handleClose }) => {
  const { videos } = useContext(VideoContext); // використання контексту для отримання всіх відео

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Notas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {videos.length > 0 ? (
          videos.map(video => (
            <div key={video.id_content}>
              <h5>{video.title_video}</h5>
              <p>{video.notes}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAllNotes;
