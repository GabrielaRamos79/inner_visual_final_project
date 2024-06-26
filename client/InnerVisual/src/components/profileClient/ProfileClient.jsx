import "./profileClient.css";
import fotoperfil from "../../assets/img/review1.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../../context/AuthContext.jsx';
import { VideoContext } from '../../context/VideoContext';
import UserHandler from "../../handler/UserHandler.js";
import { ContentHandler } from "../../handler/ContentHandler";
import { CustomSweetAlertOk, CustomSweetAlertError } from '../sweetAlertComponent/CustomSweetAlert.jsx';

const ProfileClient = ({ handleShow }) => {
  const { user, logout } = useContext(UserContext);
  const { progress, fetchData } = useContext(VideoContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const postUserContent = async () => {
    if (user && user.id && !isLoading) {
      setIsLoading(true);
      try {
        const user_content = await ContentHandler.postUserContentHandler(user.id);
        console.log('user_content posted');
        CustomSweetAlertOk('Los videos están disponibles, puedes empezar prácticas YA');
        await fetchData();
        return user_content;
      } catch (error) {
        console.error("Error posting user content:", error);
        CustomSweetAlertError("No se ha podido enviar el contenido del usuario. Vuelva a intentarlo más tarde.");
      } finally {
        setIsLoading(false);
      }
    }
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
        logout();
        navigate('/');
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
              <br />
              <hr />
              <p>
                <b>PROGRESO</b>
              </p>
              <hr />
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

          <div className="right-column">
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
            <button className="btn-customP" onClick={postUserContent} disabled={isLoading}>
              Empezar Prácticas
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
