import './videoCard.css';
import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, Accordion, Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { ContentHandler } from '../../handler/ContentHandler';
import { VideoContext } from '../../context/VideoContext';
import { CustomSweetAlertError, CustomSweetAlertOk } from '../sweetAlertComponent/CustomSweetAlert';

const VideoCard = ({ video, onVideoComplete, user }) => {
  const [notes, setNotes] = useState('');
  const { updateVideoNotes } = useContext(VideoContext); 

  useEffect(() => {
    setNotes(video.notes); 
  }, [video]);

  const handleSaveClick = async () => {
    try {
      let response = await ContentHandler.updateNotes(user.id, video.id_content, notes);
      if (response.message) {
        CustomSweetAlertOk("Las notas se han guardado correctamente");
        updateVideoNotes(video.id_content, notes); // Actualizamos notas en contexto
      } else if (response.error) {
        CustomSweetAlertError("No se ha podido modificar las notas. Vuelva a intentarlo más tarde");
      }
    } catch (error) {
      console.error("Error handling save click:", error);
    }
  };

  return (
<>

          <ReactPlayer
            url={video.url_video}
            controls={true}
            onEnded={() => onVideoComplete(video)}
            width="100%"
          />

        <Col>{video.title_video}</Col>
        <Col className="scrollable-text">{video.description}</Col>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Notas</Accordion.Header>
            <Accordion.Body>

                <Form.Control
                  as="textarea"
                  placeholder="Deje su notas aquí"
                  style={{ height: '100px' }}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <Button variant="outline-primary" onClick={handleSaveClick}>Guardar</Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolor vero reiciendis,
            eveniet tempora, eos rem repudiandae atque rerum iste quasi quisquam enim, ea iusto doloremque
            praesentium excepturi? Porro, nemo.</p>
          <a href={video.pdf} download>
            <Button variant="outline-primary">Descargar PDF</Button>
          </a>
          </>
  );
};

export default VideoCard;
