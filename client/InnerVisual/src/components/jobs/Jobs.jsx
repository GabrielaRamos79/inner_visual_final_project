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

    if (missing.length > 0) {
      setMissingFields(missing);
      return;
    }

    setShowAlert(true);
    setEmail('');
    setMessage('');
    setMissingFields([]);
  };
    const handleCloseAlert = () => {
     setShowAlert(false);
  };

  return (
    <>
        <div className='jobs-container-about'>
           <h2 className='titleJobs'>Contacta con Nosotros</h2>
           <div className='jobs-section'>      
              <form onSubmit={handleSubmit}>
             <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setEmailTouched(true)}
                        style={{ border: missingFields.includes('Introduce email') && emailTouched ? '2px solid red' : '1px solid #ccc' }}
              />
            </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={() => setMessageTouched(true)} 
                        required
                        className="message-textarea"
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
    </>);
};

export default Jobs;
