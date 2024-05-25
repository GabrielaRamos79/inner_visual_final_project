// ClientDashboard.jsx
import React, { useState, useContext } from 'react';
import ProfileClient from './../../components/profileClient/ProfileClient';
import Achievements from './../../components/achievements/Achievements';
import IntroCourse from './../../components/introCourse/IntroCourse';
import LevelsCourse from './../../components/levelsCourse/LevelsCourse';
import ProgressBar from '../../components/progressBar/ProgressBar';
import ModalAllNotes from '../../components/modalAllNotes/ModalAllNotes';
import { VideoProvider, VideoContext } from './../../context/VideoContext'; // імпорт контексту

const ClientDashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <VideoProvider> {/* Обгортка в провайдер контексту */}
      <ProfileClient handleShow={handleShow} />
      <Achievements />
      <IntroCourse />
      <LevelsCourse />
      <ProgressBar />
      <ModalAllNotes show={show} handleClose={handleClose} />
    </VideoProvider>
  );
};

export default ClientDashboard;

