import ProfileClient from './../../components/profileClient/ProfileClient';
import Achievements from './../../components/achievements/Achievements';
import IntroCourse from './../../components/introCourse/IntroCourse';
import LevelsCourse from './../../components/levelsCourse/LevelsCourse';

const ClientDashboard = () => {
  return (
    <>
    <ProfileClient />
    <Achievements />
    <IntroCourse />
    <LevelsCourse />
    </>
  )
}

export default ClientDashboard
