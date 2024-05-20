import React from 'react';
import './profileClient.css'
import fotoperfil from '../../assets/img/fotoperfil.jpg'

const ProfileClient = () => {
  return (
    <>
    <div className="profile-container ms-5">
      <div className="welcome-message">
        <h2>Bienvenido, [Nombre del Cliente]</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in nisl fringilla, at ultricies libero aliquet.</p>
      </div>
      <div className="action-buttons me-5">
      <img className="profile-picture" src={fotoperfil} alt="Foto del Cliente" />
        <button className='btn-custom' onClick={handleContinue}>Continuar Prácticas</button>
        <button className='btn-custom' onClick={handleNotes}>Notas</button>
        <button className='btn-custom' onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
    

    <p>Perfil de cliente</p>
    </>
  )
};
const handleContinue = () => {
  console.log('Continuar Prácticas');
};

const handleNotes = () => {
  console.log('Notas');
};

const handleDelete = () => {
  console.log('Eliminar');
};

export default ProfileClient
