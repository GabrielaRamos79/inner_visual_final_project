
import React from 'react';
import './team.css';
import Kike from '../../assets/img/Kike.png';
import Juan from '../../assets/img/jjuan.jpg';

const Team = () => {
  return (
    <section className="team-container">
      <h2 className="team-title">Nosotros</h2>
      <div className="team-members">
        <div className="team-member1">
          <div className="member-photo-container">
            <img src={Kike} alt="Miembro 1" className="member-photo" />
            <div className='member-info'>
              <h3 className="member-name">Kike Mayordomo</h3>
              <p className="member-description">
                "Si quieres cambiar algo, hazlo desde dentro" Kike se lo tomó al pie de la letra y creó Inner Visuals, un proyecto para aportar un cambio positivo a la sociedad a través del deporte. Pasó varios años viviendo y entrenando en China, donde aprendió sobre meditación, chikung, artes marciales… y ahora se dedica al entrenamiento de deportistas a través de estas técnicas de arraigo oriental.
              </p>
            </div>
          </div>
        </div>
        <div className="team-member2">
          <div className="member-photo-container">
            <img src={Juan} alt="Miembro 2" className="member-photo" />
            <div className='member-info'>
              <h3 className="member-name">Juan Cruz</h3>
              <p className="member-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

