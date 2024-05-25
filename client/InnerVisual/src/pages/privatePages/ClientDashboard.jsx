import React, { useState } from 'react';
import ProfileClient from './../../components/profileClient/ProfileClient';
import Achievements from './../../components/achievements/Achievements';
import IntroCourse from './../../components/introCourse/IntroCourse';
import LevelsCourse from './../../components/levelsCourse/LevelsCourse';
import ProgressBar from '../../components/progressBar/ProgressBar';
import ModalAllNotes from '../../components/modalAllNotes/ModalAllNotes';

const ClientDashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ProfileClient handleShow={handleShow} />
      <Achievements />
      <IntroCourse />
      <LevelsCourse />
      <ProgressBar />
      <ModalAllNotes show={show} handleClose={handleClose} />
    </>
  );
};

export default ClientDashboard;

