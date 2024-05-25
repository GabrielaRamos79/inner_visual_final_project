import "./profileClient.css";
import fotoperfil from "../../assets/img/review1.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProfileClient = ({ handleShow }) => {
  return (
    <>
      <div className="profile-container">
        <section className="profile-content">
          <div className="left-column">
            <div className="welcome-message">
              <h2>Hola, [username]</h2>
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
                <CircularProgressbar value={75} text={`${75}%`} />
                <p style={{ color: "white" }}>Curso 1</p>
              </div>
              <div className="progress-info">
                <CircularProgressbar value={75} text={`${75}%`} />
                <p style={{ color: "white" }}>Curso 2</p>
              </div>
              <div className="progress-info">
                <CircularProgressbar value={75} text={`${75}%`} />
                <p style={{ color: "white" }}>Curso 3</p>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <img
              className="profile-picture"
              src={fotoperfil}
              alt="Foto del Cliente"
            />
            <button className="btn-custom" onClick={handleContinue}>
              Continuar Prácticas
            </button>
            <button className="btn-custom" onClick={handleShow}>
              Notas
            </button>
            <button className="btn-custom" onClick={handleDelete}>
              Eliminar
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

const handleContinue = () => {
  console.log("Continuar Prácticas");
};

const handleDelete = () => {
  console.log("Eliminar");
};

export default ProfileClient;
