import './levelCourse.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { ContentHandler } from '../../handler/ContentHandler';
import VideoCard from '../videoCard/VideoCard';


const LevelsCourse = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const fetchData = async () => {
    const contentData = await ContentHandler.getAllContent();
    setVideos(contentData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>NIVEL 1</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <ListGroup>
                    {videos.map((video) => (
                      <ListGroup.Item
                        key={video.id_content}
                        action
                        variant="info"
                        onClick={() => handleVideoSelect(video)}
                      >
                        {video.title_video}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>

                <Col>
                  {selectedVideo && <VideoCard video={selectedVideo} />}
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic temporibus iste dignissimos, delectus excepturi ea quam alias soluta dolore voluptates animi reprehenderit sunt nulla deleniti possimus commodi neque quas praesentium?
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat velit voluptatibus totam. Consectetur labore maxime, dicta, veritatis nemo repellendus eligendi vitae assumenda laborum hic similique incidunt, vel quidem totam.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <p>Niveles del curso</p>
    </>
  );
};

export default LevelsCourse;


// import './levelCourse.css';
// import ReactPlayer from 'react-player';
// import Accordion from 'react-bootstrap/Accordion';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ListGroup from 'react-bootstrap/ListGroup';

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ContentHandler } from '../../handler/ContentHandler';
// //import VideoCard from '../videoCard/VideoCard';

// const LevelsCourse = () => {

//   const [videos, setVideos] = useState([]);

//   const fetchData = async () => {
//     const contentData = await ContentHandler.getAllContent();
//     setVideos(contentData);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Accordion defaultActiveKey="0">
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>NIVEL 1</Accordion.Header>
//           <Accordion.Body>
//             {videos.map((video) => (
//               <Container key={video.id_content}>
//                 <Row>
//                   <Col>
//                     <ListGroup>
//                       <ListGroup.Item action variant="info" onClick={() => window.location.href = `/video/${video.id_content}`}>
//                         {video.title_video}
//                       </ListGroup.Item>
//                     </ListGroup>
//                   </Col>

//                   <Col>
//                     <Container>
//                       <Row>
//                         <Col>
//                           <ReactPlayer url={video.url_video} controls={true} />
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col>{video.title_video}</Col>
//                         <Col>{video.description}</Col>
//                         <Col>2 of 3</Col>
//                       </Row>
//                       <Row>
//                         <Col>NOTAS</Col>
//                       </Row>
//                     </Container>
//                   </Col>
//                 </Row>
//               </Container>
//             ))}
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="1">
//           <Accordion.Header>Accordion Item #2</Accordion.Header>
//           <Accordion.Body>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic temporibus iste dignissimos, delectus excepturi ea quam alias soluta dolore voluptates animi reprehenderit sunt nulla deleniti possimus commodi neque quas praesentium?
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="2">
//           <Accordion.Header>Accordion Item #3</Accordion.Header>
//           <Accordion.Body>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat velit voluptatibus totam. Consectetur labore maxime, dicta, veritatis nemo repellendus eligendi vitae assumenda laborum hic similique incidunt, vel quidem totam.
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>

//       <p>Niveles del curso</p>
//     </>
//   );
// }

// export default LevelsCourse;
