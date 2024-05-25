import './videoCard.css';
import React, { useState, useEffect } from 'react';
//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';

import { ContentHandler } from '../../handler/ContentHandler';
import { CustomSweetAlertError, CustomSweetAlertOk } from '../sweetAlertComponent/CustomSweetAlert'

// ---- IMPORTANT---///
// 1. Añada la URL en este formato (https://docs.google.com/document/d/1BXeUUNFMux6tSApwVOnqsUf9Ki0Em2H7xhskUlmsiiE/export?format=pdf) 
// a la columna <pdf> de la tabla de <content> en <phpmyadmin> para que funcione la carga de archivos
//¿Por qué? Lea el archivo Read.me 

const VideoCard = ({ video, onVideoComplete, user }) => {
  //console.log(video)
  const [notes, setNotes] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setNotes(video.notes);
  }, [video.notes]);

  const handleSaveClick = async () => {
    try {
      let response = await ContentHandler.updateNotes(user.id, video.id_content, notes);
      if (response.message) {
        CustomSweetAlertOk("Las notas se han guardado correctamente");
        setIsEditing(false);
      } else if (response.error) {
        CustomSweetAlertError("No se ha podido modificar las notas. Vuelva a intentarlo más tarde");
      }
    } catch (error) {
      console.error("Error handling save click:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <ReactPlayer
            url={video.url_video}
            controls={true}
            onEnded={() => onVideoComplete(video)}
          />
        </Col>
      </Row>
      <Row>
        <Col>{video.title_video}</Col>
        <Col className="scrollable-text">{video.description}</Col>
      </Row>
      <Row>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Notas</Accordion.Header>
            <Accordion.Body>

              <Col>

                <Form.Control
                  as="textarea"
                  placeholder="Deje su notas aquí"
                  style={{ height: '100px' }}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />

                <Button variant="outline-primary" onClick={handleSaveClick}>Guardar</Button>
              </Col>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </Row>
      <Row>
        <Col>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolor vero reiciendis,
            eveniet tempora, eos rem repudiandae atque rerum iste quasi quisquam enim, ea iusto doloremque
            praesentium excepturi? Porro, nemo.</p>
          <a href={video.pdf} download>
            <Button variant="outline-primary">Descargar PDF</Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoCard;



// import './videoCard.css';
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ReactPlayer from 'react-player';
// import { useState, useEffect } from 'react';
// import { ContentHandler } from '../../handler/ContentHandler';

// const VideoCard = ({ video, onVideoComplete, user }) => {
//   const [notes, setNotes] = useState('');
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     setNotes(video.notes);
//   }, [video.notes]);

//   const handleSaveClick = async () => {
//     try {
//       let response = await ContentHandler.updateNotes(user.id, video.id_content, notes);
//       if (response.message) {
//         alert('Notes updated successfully');
//         setIsEditing(false);
//       } else if (response.error) {
//         alert('Error updating notes');
//       }
//     } catch (error) {
//       console.error("Error handling save click:", error);
//     }
//   };

//   const handleTextareaFocus = () => {
//     console.log("Textarea focused");
//     setIsEditing(true);
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <ReactPlayer
//             url={video.url_video}
//             controls={true}
//             onEnded={() => onVideoComplete(video)}
//           />
//         </Col>
//       </Row>
//       <Row>
//         <Col>{video.title_video}</Col>
//         <Col className="scrollable-text">{video.description}</Col>
//       </Row>
//       <Row>
//         <Col>
//           <h1>Notes</h1>
//           <textarea
//             id="notes"
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//             onFocus={handleTextareaFocus}
//             // disabled={!isEditing}
//           />
//           {isEditing && <button onClick={handleSaveClick}>Save</button>}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default VideoCard;



// import './videoCard.css';
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ReactPlayer from 'react-player';

// const VideoCard = ({ video, onVideoComplete }) => {
//   console.log(video); // borrar en su momento
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <ReactPlayer
//             url={video.url_video}
//             controls={true}
//             onEnded={() => onVideoComplete(video)}  // Añade una llamada de retorno para gestionar la finalización del vídeo
//           />
//         </Col>
//       </Row>
//       <Row>
//         <Col>{video.title_video}</Col>
//         <Col className="scrollable-text">{video.description}</Col>
//       </Row>
//       <Row>
//         <Col>{video.notes}</Col>
//       </Row>
//     </Container>
//   );
// };

// export default VideoCard;



// const handleSaveClick = () => {
//     fetch("http://127.0.0.1:5000/user_content/update_notes/6/2", {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ notes })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.message) {
//             alert('Notes updated successfully');
//             setIsEditing(false);
//         } else if (data.error) {
//             alert('Error updating notes');
//         }
//     });
// };