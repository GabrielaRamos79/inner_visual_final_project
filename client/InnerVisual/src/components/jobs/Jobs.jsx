import React, { useState } from 'react';
import './jobs.css';

  const Jobs = () => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false); // Nuevo estado para el campo de correo electrónico
  const [message, setMessage] = useState('');
  const [messageTouched, setMessageTouched] = useState(false); // Nuevo estado para el campo de mensaje
  const [showAlert, setShowAlert] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
        
  const emailRegex = /^\S+@\S+\.\S+$/;
  const missing = [];

    if (!emailRegex.test(email)) {
      missing.push('Introduce email');
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (message.length < 5) {
      setMissingFields(missing);
      alert('El mensaje debe tener al menos 5 caracteres.');
      return;
    }

    // Mostrar la alerta y limpiar los campos
    setShowAlert(true);
    setEmail('');
    setMessage('');
  };
    const handleCloseAlert = () => {
     setShowAlert(false);
  };

  const handleCloseForm = () => {
    window.location.href = '/'; // Redirige a la página de inicio
  };


    // try {
    //   // Aquí iría tu lógica para enviar el correo electrónico al administrador
    //   console.log(`Correo electrónico enviado al administrador: admin@example.com`);
    //   console.log(`Mensaje al administrador: ${message}`);
    //   alert('Mensaje enviado al administrador');
    // } catch (error) {
    //   console.error('Error al enviar el correo electrónico:', error);
    //   alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    // }

  return (
    <>
        <div className='jobs-container-about'>
           <h2 className='titleJobs'>Contacta con Nosotros</h2>
           <div className='jobs-section'>
          <button onClick={handleCloseForm} className="close-form-button">X</button>
          
              <form onSubmit={handleSubmit}>
             <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setEmailTouched(true)} // Marcar como tocado cuando se pierde el foco
                        required
                        style={{ border: missingFields.includes('Introduce email') && emailTouched ? '2px solid red' : '1px solid #ccc' }} // Aplicar estilo de borde rojo si falta
                      />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={() => setMessageTouched(true)} // Marcar como tocado cuando se pierde el foco
                        required
                        style={{ border: missingFields.includes('email') && emailTouched ? '2px solid red' : '1px solid #ccc' }} // Aplicar estilo de borde rojo si falta
                        />
                    </div>
                <button type="submit" className="submit-button-contact">Enviar Mensaje</button>             
           </form>
           </div>
           {showAlert && (
            <div className="alert">
              <span className="close-btn" onClick={handleCloseAlert}>X</span>
          <p>Mensaje enviado, nuestro administrador se pondrá en contacto con usted. Gracias por confiar en Inner Visuals.</p>
        </div>
      )}
      </div>
    </>
  );
};

export default Jobs;
