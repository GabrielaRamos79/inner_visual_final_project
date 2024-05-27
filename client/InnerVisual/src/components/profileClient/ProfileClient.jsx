import "./profileClient.css";
import fotoperfil from "../../assets/img/review1.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { VideoContext } from './../../context/VideoContext';
import { UserContext } from '../../context/AuthContext.jsx';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserHandler from "../../handler/UserHandler.js";

const ProfileClient = ({ handleShow }) => {
  const { user, logout } = useContext(UserContext);
  const { progress } = useContext(VideoContext);
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log("Continuar Prácticas");
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: '¿Está seguro?',
      text: '¡Todos sus datos se perderán, incluyendo el acceso al curso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await UserHandler.handleDeleteUserProfile(user.id);
        Swal.fire("'Eliminado", "Su cuenta ha sido eliminada", 'success');
        logout(); //  logout para limpiar cookies
        navigate('/'); // a casa
      } catch (error) {
        Swal.fire("Error", "Se ha producido un error al eliminar tu cuenta.", 'error');
      }
    }
  };


  return (
    <>
      <div className="profile-container">
        <section className="profile-content">
          <div className="left-column">
            <div className="welcome-message">
              {user ? (
                <h2 key={user.id_user}>Hola, {user.name}</h2>
              ) : (
                <h2>Hola!</h2>
              )}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero in nisl fringilla, at ultricies libero aliquet.
              </p>
              <br></br>
              <hr></hr>
              <p>
                <b>PROGRESO</b>
              </p>
              <hr></hr>
            </div>
            <div className="progress-section">
              <div className="progress-info">
                <CircularProgressbar value={progress.level1} text={`${progress.level1}%`} />
                <p style={{ color: "white" }}>Curso 1</p>
              </div>
              <div className="progress-info">
                <CircularProgressbar value={progress.level2} text={`${progress.level2}%`} />
                <p style={{ color: "white" }}>Curso 2</p>
              </div>
              <div className="progress-info">
                <CircularProgressbar value={progress.level3} text={`${progress.level3}%`} />
                <p style={{ color: "white" }}>Curso 3</p>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            {user ? (
              <img key={user.id_user}
                className="profile-picture"
                src={user.photo}
                alt="Foto del Cliente"
              />
            ) : (
              <img
                className="profile-picture"
                src={fotoperfil}
                alt="Foto del Cliente"
              />
            )}
            <button className="btn-customP" onClick={handleContinue}>
              Continuar Prácticas
            </button>
            <button className="btn-customP" onClick={handleShow}>
              Notas
            </button>
            <button className="btn-customP" onClick={handleDelete}>
              Eliminar
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfileClient;
