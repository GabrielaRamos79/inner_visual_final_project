import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { VideoContext } from './../../context/VideoContext'; 
import { jsPDF } from 'jspdf';
import './modalAllNotes.css'

const ModalAllNotes = ({ show, handleClose }) => {
  const { videos } = useContext(VideoContext); 

  const downloadPDF = () => {
    const doc = new jsPDF();

    let yPosition = 10;
    const lineHeight = 10;
    const pageHeight = doc.internal.pageSize.height;

    videos.forEach((video, index) => {
      // Add video title
      doc.setFontSize(16);
      doc.text(video.title_video, 10, yPosition);
      yPosition += lineHeight;

      // Add video notes, wrapping text as needed
      doc.setFontSize(12);
      const notes = doc.splitTextToSize(video.notes, 180); // 180 is the max width of the text
      notes.forEach(noteLine => {
        if (yPosition + lineHeight > pageHeight - 10) { // Check if we need a new page
          doc.addPage();
          yPosition = 10; // Reset y position for new page
        }
        doc.text(noteLine, 10, yPosition);
        yPosition += lineHeight;
      });

      yPosition += lineHeight;

      // Check if we need a new page for the next video
      if (yPosition + lineHeight * 2 > pageHeight - 10 && index !== videos.length - 1) {
        doc.addPage();
        yPosition = 10;
      }
    });

    doc.save('notes.pdf');
  };

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
        <Button variant="primary" onClick={downloadPDF}>
          Download as PDF
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAllNotes;
