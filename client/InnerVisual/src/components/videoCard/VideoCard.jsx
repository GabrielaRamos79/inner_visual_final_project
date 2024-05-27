import "./videoCard.css";
import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Accordion, Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import { ContentHandler } from "../../handler/ContentHandler";
import { VideoContext } from "../../context/VideoContext";
import {
  CustomSweetAlertError,
  CustomSweetAlertOk,
} from "../sweetAlertComponent/CustomSweetAlert";

const VideoCard = ({ video, onVideoComplete, user }) => {
  const [notes, setNotes] = useState("");
  const { updateVideoNotes } = useContext(VideoContext);

  useEffect(() => {
    setNotes(video.notes);
  }, [video]);

  const handleSaveClick = async () => {
    try {
      let response = await ContentHandler.updateNotes(
        user.id,
        video.id_content,
        notes
      );
      if (response.message) {
        CustomSweetAlertOk("Las notas se han guardado correctamente");
        updateVideoNotes(video.id_content, notes); // Actualizamos notas en contexto
        setNotes("");
      } else if (response.error) {
        CustomSweetAlertError(
          "No se ha podido modificar las notas. Vuelva a intentarlo más tarde"
        );
      }
    } catch (error) {
      console.error("Error handling save click:", error);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <ReactPlayer
              url={video.url_video}
              controls={true}
              onEnded={() => onVideoComplete(video)}
              width="80%"
            />
            <div className="video-info">
              <p className="fw-bold text-uppercase mb-4 mt-4">
                {video.title_video}
              </p>
              <p className="mb-4">{video.description}</p>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="mb-3">Notas</Accordion.Header>
                  <Accordion.Body>
                    <Form.Control
                      as="textarea"
                      placeholder="Deje su notas aquí"
                      style={{ height: "100px" }}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="mb-4 textarea-notes"
                    />
                    <button
                      className="btn-notes p-1 mb-4"
                      type="submit"
                      onClick={handleSaveClick}
                    >
                      GUARDAR
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur dolor vero reiciendis, eveniet tempora, eos rem
                repudiandae atque rerum iste quasi quisquam enim, ea iusto
                doloremque praesentium excepturi? Porro, nemo.
              </p>
              <a href={video.pdf} download>
                <button className="btn-notes p-1 mb-4 mt-4">
                  DESCARGAR PDF
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VideoCard;
