// import './team.css'

// const Team = () => {
//   return (
//     <>
//     <p>Equipo</p>
//     </>
//   )
// }

// export default Team


// src/components/Team.jsx
import React from 'react';
import './team.css'; // Importa el archivo de estilos


const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Quiénes Somos</h2>
      <div className="team-members">
        <div className="team-member">
          <div className="member-photo-container">
            <img src="img/Kike.png" alt="Miembro 1" className="member-photo" />
            <h3 className="member-name">Kike</h3>
          </div>
          <p className="member-description">"Si quieres cambiar algo, hazlo desde dentro" Kike se lo tomó al pie de la letra y creó Movimiento interno, un proyecto para aportar un cambio positivo a la sociedad a través del deporte.

Pasó varios años viviendo y entrenando en China, donde aprendió sobre meditación, chikung, artes marciales… y ahora se dedica al entrenamiento de deportistas a través de estas técnicas de arraigo oriental.</p>
        </div>
        <div className="team-member">
          <div className="member-photo-container">
            <img src="ruta_a_la_foto2.jpg" alt="Miembro 2" className="member-photo" />
            <h3 className="member-name">Juan</h3>
          </div>
          <p className="member-description">Breve descripción del miembro 2. Breve descripción del miembro 2. Breve descripción del miembro 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
