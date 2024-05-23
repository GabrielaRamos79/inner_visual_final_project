import './levelCourse.css';
import React, { useEffect, useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContentHandler } from '../../handler/ContentHandler';
import VideoCard from '../videoCard/VideoCard';
import VideoList from '../videoList/VideoList'; 
import { UserContext } from '../../context/AuthContext.jsx'; 

const LevelsCourse = () => {
  const { user } = useContext(UserContext); 
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  //const [activeKey, setActiveKey] = useState("0");

  const fetchData = async () => {
    if (user && user.id) {
      const contentData = await ContentHandler.getAllContent(user.id);
      setVideos(contentData);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleVideoComplete = async (video) => {
    console.log(`Video ${video.title_video} has ended`);
    const videoIndex = videos.findIndex(v => v.id_content === video.id_content);
    const nextVideo = videos[videoIndex + 1];
  
    if (nextVideo) {
      try {
        await ContentHandler.updateStatusVideo(user.id, nextVideo.id_content);
        fetchData(); 
      } catch (error) {
        console.error("Помилка при оновленні статусу відео:", error);
      }
    }
  };

  // const handleAccordionChange = (key) => {
  //   setActiveKey(key);
  //   setSelectedVideo(null);
  // };
//onSelect={handleAccordionChange}
//activeKey={activeKey}
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Level 1</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <VideoList
                    videos={videos.slice(0, 3)}
                    onVideoSelect={handleVideoSelect}
                  />
                </Col>
                <Col>
                  {selectedVideo && (
                    <VideoCard 
                      video={selectedVideo} 
                      onVideoComplete={handleVideoComplete} 
                    />
                  )}
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Level 2</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <VideoList
                    videos={videos.slice(3, 5)}
                    onVideoSelect={handleVideoSelect}
                  />
                </Col>
                <Col>
                  {selectedVideo && (
                    <VideoCard 
                      video={selectedVideo} 
                      onVideoComplete={handleVideoComplete} 
                    />
                  )}
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Level 3</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <VideoList
                    videos={videos.slice(5, 10)}
                    onVideoSelect={handleVideoSelect}
                  />
                </Col>
                <Col>
                  {selectedVideo && (
                    <VideoCard 
                      video={selectedVideo} 
                      onVideoComplete={handleVideoComplete} 
                    />
                  )}
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default LevelsCourse;


// import './levelCourse.css';
// import React, { useEffect, useState, useContext } from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { ContentHandler } from '../../handler/ContentHandler';
// import VideoCard from '../videoCard/VideoCard';
// import VideoList from '../videoList/VideoList'; 
// import { UserContext } from '../../context/AuthContext.jsx'; 

// const LevelsCourse = () => {
//   const { user } = useContext(UserContext); 
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [activeKey, setActiveKey] = useState("0");
//   const [watchedVideos, setWatchedVideos] = useState([]);

//   const fetchData = async () => {
//     if (user && user.id) {
//       const contentData = await ContentHandler.getAllContent(user.id);
//       setVideos(contentData);
//       const watchedData = contentData.map(video => video.status_video);
//       setWatchedVideos(watchedData);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [user]);

//   const handleVideoSelect = (video) => {
//     setSelectedVideo(video);
//   };

//   const handleVideoComplete = async (video) => {
//     console.log(`Video ${video.title_video} has ended`);
//     const videoIndex = videos.findIndex(v => v.id_content === video.id_content);
//     const nextVideo = videos[videoIndex + 1];

//     if (nextVideo) {
//       try {
//         await fetch(`http://127.0.0.1:5000/user_content/update_user_content/${user.id}/${nextVideo.id_content}`, { method: 'PATCH' });
//         fetchData(); // Оновлення даних, щоб отримати оновлений статус перегляду
//       } catch (error) {
//         console.error("Помилка при оновленні статусу відео:", error);
//       }
//     }
//   };

//   const handleAccordionChange = (key) => {
//     setActiveKey(key);
//     setSelectedVideo(null);
//   };

//   return (
//     <>
//       <Accordion activeKey={activeKey} onSelect={handleAccordionChange}>
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>Level 1</Accordion.Header>
//           <Accordion.Body>
//             <Container>
//               <Row>
//                 <Col>
//                   <VideoList
//                     videos={videos.slice(0, 3)}
//                     onVideoSelect={handleVideoSelect}
//                     watchedVideos={watchedVideos.slice(0, 3)}
//                   />
//                 </Col>
//                 <Col>
//                   {selectedVideo && (
//                     <VideoCard 
//                       video={selectedVideo} 
//                       onVideoComplete={handleVideoComplete} 
//                     />
//                   )}
//                 </Col>
//               </Row>
//             </Container>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="1">
//           <Accordion.Header>Level 2</Accordion.Header>
//           <Accordion.Body>
//             <Container>
//               <Row>
//                 <Col>
//                   <VideoList
//                     videos={videos.slice(3, 5)}
//                     onVideoSelect={handleVideoSelect}
//                     watchedVideos={watchedVideos.slice(3, 5)}
//                   />
//                 </Col>
//                 <Col>
//                   {selectedVideo && (
//                     <VideoCard 
//                       video={selectedVideo} 
//                       onVideoComplete={handleVideoComplete} 
//                     />
//                   )}
//                 </Col>
//               </Row>
//             </Container>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="2">
//           <Accordion.Header>Level 3</Accordion.Header>
//           <Accordion.Body>
//             <Container>
//               <Row>
//                 <Col>
//                   <VideoList
//                     videos={videos.slice(5, 10)}
//                     onVideoSelect={handleVideoSelect}
//                     watchedVideos={watchedVideos.slice(5, 10)}
//                   />
//                 </Col>
//                 <Col>
//                   {selectedVideo && (
//                     <VideoCard 
//                       video={selectedVideo} 
//                       onVideoComplete={handleVideoComplete} 
//                     />
//                   )}
//                 </Col>
//               </Row>
//             </Container>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     </>
//   );
// };

// export default LevelsCourse;




// import './levelCourse.css';
// import React, { useEffect, useState } from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { ContentHandler } from '../../handler/ContentHandler';
// import VideoCard from '../videoCard/VideoCard';
// import VideoList from '../videoList/VideoList'; 

// const LevelsCourse = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [watchedVideos, setWatchedVideos] = useState([]);

//   const fetchData = async () => {
//     const contentData = await ContentHandler.getAllContent();
//     setVideos(contentData);
//     setWatchedVideos(new Array(contentData.length).fill(false));
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleVideoSelect = (video) => {
//     setSelectedVideo(video);
//   };

//   const handleVideoComplete = (video) => {
//     const videoIndex = videos.findIndex(v => v.id_content === video.id_content);
//     if (videoIndex !== -1) {
//       const updatedWatchedVideos = [...watchedVideos];
//       updatedWatchedVideos[videoIndex] = true;
//       setWatchedVideos(updatedWatchedVideos);
//     }
//   };

//   return (
//     <>
//       <Accordion defaultActiveKey="0">
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>Level 1</Accordion.Header>
//           <Accordion.Body>
//             <Container>
//               <Row>
//                 <Col>
//                   <VideoList
//                     videos={videos.slice(0, 3)}
//                     onVideoSelect={handleVideoSelect}
//                     watchedVideos={watchedVideos.slice(0, 3)}
//                   />
//                 </Col>
//                 <Col>
//                   {selectedVideo && (
//                     <VideoCard 
//                       video={selectedVideo} 
//                       onVideoComplete={handleVideoComplete} 
//                     />
//                   )}
//                 </Col>
//               </Row>
//             </Container>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="1">
//           <Accordion.Header>Level 2</Accordion.Header>
//           <Accordion.Body>
//             <Container>
//               <Row>
//                 <Col>
//                   <VideoList
//                     videos={videos.slice(3, 5)}
//                     onVideoSelect={handleVideoSelect}
//                     watchedVideos={watchedVideos.slice(3, 5)}
//                   />
//                 </Col>
//                 <Col>
//                   {selectedVideo && (
//                     <VideoCard 
//                       video={selectedVideo} 
//                       onVideoComplete={handleVideoComplete} 
//                     />
//                   )}
//                 </Col>
//               </Row>
//             </Container>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="2">
//           <Accordion.Header>Level 3</Accordion.Header>
//           <Accordion.Body>
//             <Container>
//               <Row>
//                 <Col>
//                   <VideoList
//                     videos={videos.slice(5, 10)}
//                     onVideoSelect={handleVideoSelect}
//                     watchedVideos={watchedVideos.slice(5, 10)}
//                   />
//                 </Col>
//                 <Col>
//                   {selectedVideo && (
//                     <VideoCard 
//                       video={selectedVideo} 
//                       onVideoComplete={handleVideoComplete} 
//                     />
//                   )}
//                 </Col>
//               </Row>
//             </Container>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>

//       <p>Рівні курсу</p>
//     </>
//   );
// };

// export default LevelsCourse;




