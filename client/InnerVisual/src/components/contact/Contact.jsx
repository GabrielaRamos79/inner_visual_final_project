import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [nameError, setNameError] = useState('');

  const [surname, setSurname] = useState('');
  const [surnameTouched, setSurnameTouched] = useState(false);
  const [surnameError, setSurnameError] = useState('');

  const [telephone, setTelephone] = useState('');
  const [telephoneTouched, setTelephoneTouched] = useState(false);
  const [telephoneError, setTelephoneError] = useState('');

  const [message, setMessage] = useState('');
  const [messageTouched, setMessageTouched] = useState(false);
  const [messageError, setMessageError] = useState('');

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
    setName('');
    setSurname('');
    setTelephone('');
    setMessage('');
    setMissingFields([]);

    setEmailError('');
    setNameError('');
    setSurnameError('');
    setTelephoneError('');
    setMessageError('');
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className='jobs-container-contact-with-us'>
        <h2 className='titleJobs'>Contacta con Nosotros</h2>
        <div className='jobs-section-contact-with-us'>
          <form onSubmit={handleSubmit}>
            <div className="contact-form-contact-with-us">
              <div className="input-group-email-contact-with-us">
                <label htmlFor="email-contact-with-us">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email-contact-with-us"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                     setEmailTouched(true); 
                      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                      setEmailError("Introduce email");
                    }
                  }}
                  className={`input-field half-width ${missingFields.includes('Introduce email') && emailTouched ? 'error' : ''}`}
                />
                {emailError && <p>{emailError}</p>}
              </div>

              <div className='input-group-name-contact-with-us'>
                <label htmlFor="name-contact-with-us">Nombre:</label>
                <input
                  type="text"
                  id="name-contact-with-us"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => {
                    setNameTouched(true);
                       if (!name.trim()) {
                        setNameError("Introduce nombre");
                   }
                  }}
                  className={`input-field ${nameError && nameTouched? 'error' : ''}`}
                />
                {nameError && <p>{nameError}</p>}
              </div>

              <div className='input-group-surname-contact-with-us'>
                <label htmlFor="surname-contact-with-us">Apellido:</label>
                <input
                  type="text"
                  id="surname-contact-with-us"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  onBlur={() => {
                    setSurnameTouched(true);
                      if (!surname.trim()) {
                        setSurnameError("Introduce apellido");
                        }
                  }}
                  className={`input-field ${surnameError && surnameTouched? 'error' : ''}`}
                />
                {surnameError && <p>{surnameError}</p>}
              </div>

              <div className='input-group-telephone-contact-with-us'>
                <label htmlFor="telephone-contact-with-us">Teléfono:</label>
                <input
                  type="tel"
                  id="telephone-contact-with-us"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  onBlur={() =>{
                     setTelephoneTouched(true);
                    if (!telephone.trim()) {
                      setTelephoneError("Introduce teléfono");
                 }
                   } }

                  className={`input-field ${telephoneError && telephoneTouched? 'error' : ''}`}
                  />
                  {telephoneError && <p>{telephoneError}</p>}
              </div>

              <div className='input-group-message-contact-with-us'>
                <label htmlFor="message-contact-with-us">Mensaje:</label>
                <textarea
                  id="message-contact-with-us"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => {
                    setMessageTouched(true);
                    if (message.length < 5) {
                      setMessageError("El mensaje debe tener al menos 5 caracteres.");
                      }
                    }}
                  required
                  className={`textarea-field ${messageTouched && message.length < 5 ? 'error' : ''}`}
                />
                {messageError && <p>{messageError}</p>}
              </div>

              <div className="submit-button-wrapper-contact-with-us">
                <button type="submit" className="submit-button-contact-with-us">Enviar Mensaje</button>
              </div>
            </div>
          </form>
          {showAlert && (
            <div className="alert">
              <span className="close-btn-contact-with-us" onClick={handleCloseAlert}>X</span>
              <p>Mensaje enviado, nuestro administrador se pondrá en contacto con usted. Gracias por confiar en Inner Visuals.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
