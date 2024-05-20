import React, { useState } from 'react';
import './jobs.css';

const Jobs = () => {
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

    if (!name.trim()) {
      setMissingName('Introduce nombre');
      missing.push('name');
    } else {
      setMissingName('');
    }

    if (!surname.trim()) {
      setMissingSurname('Introduce apellido');
      missing.push('surname');
    } else {
      setMissingSurname('');
    }
    if (!telephone.trim()) {
      setMissingTelephone('Introduce teléfono');
      missing.push('telephone');
    } else {
      setMissingTelephone('');
    }

    if (!emailRegex.test(email)) {
      setMissingEmail('Introduce email');
      missing.push('email');
    } else {
      setMissingEmail('');
    }

    if (message.length < 5) {
      setMissingFields('El mensaje debe tener al menos 5 caracteres.');
      missing.push('message');
    } else {
      setMissingFields('');
    }

    if (missing.length > 0) {
      setMissingFields('Hay campos vacios. Por favor, completa todos los campos son obligatorios.');
      missing.push('missingFields');
    } else {
      setMissingFields('');
    }

    setShowAlert(true);    
    setName('');
    setSurname('');
    setTelephone('');
    setEmail('');
    setMessage('');
    setMissingFields([]);

    setMissingName('');
    setMissingSurname('');
    setMissingTelephone('');
    setMissingEmail('');
    setMissingMessage('');
    
   
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className='jobs-container-contact-work-with-us'>

        <h2 className='titleJobs'>¿Quieres trabajar con Nosotros? <br></br> Escribenos y nos pondremos en contacto contigo</h2>
        <br></br>
        
        <form onSubmit={handleSubmit}>

            <div className="contact-form-contact-work-with-us">

                  <div className="input-group-name-contact-work-with-us-row">

                    <div className="input-group-name-contact-work-with-us">
                      <label htmlFor="name-contact-work-with-us">Nombre:</label>
                      <input
                        type="text"
                        id="name-contact-work-with-us"
                        value={name}
                        placeholder="Introduce tu nombre"
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => {
                          setNameTouched(true);
                          if (!name.trim()) {
                            setNameError();
                          }
                        }}
                        className={`input-field ${nameError && nameTouched ? 'error' : ''}`}
                      />
                      {nameError && <p>{nameError}</p>}
                    </div>

                    <div className="input-group-surname-contact-work-with-us">
                      <label htmlFor="surname-contact-work-with-us">Apellido:</label>
                      <input
                        type="text"
                        id="surname-contact-work-with-us"
                        value={surname}
                        placeholder="Introduce tu apellido"
                        onChange={(e) => setSurname(e.target.value)}
                        onBlur={() => {
                          setSurnameTouched(true);
                          if (!surname.trim()) {
                            setSurnameError();
                          }
                        }}
                        className={`input-field ${surnameError && surnameTouched ? 'error' : ''}`}
                      />
                      {surnameError && <p>{surnameError}</p>}
                    </div>

                  </div>

                  <div className="input-group-contact-work-row">

                    <div className="input-group-telephone-contact-work-with-us">
                      <label htmlFor="telephone-contact-work-with-us">Teléfono:</label>
                      <input
                        type="tel"
                        id="telephone-contact-work-with-us"
                        value={telephone}
                        placeholder="Introduce tu telféfono"
                        onChange={(e) => setTelephone(e.target.value)}
                        onBlur={() => {
                          setTelephoneTouched(true);
                          if (!telephone.trim()) {
                            setTelephoneError();
                          }
                        }}
                        className={`input-field ${telephoneError && telephoneTouched ? 'error' : ''}`}
                      />
                      {telephoneError && <p>{telephoneError}</p>}
                    </div>

                    <div className="input-group-email-contact-work-with-us">
                      <label htmlFor="email-contact-work-with-us">Correo Electrónico:</label>
                      <input
                        type="email"
                        id="email-contact-work-with-us"
                        value={email}
                        placeholder="Introduce tu correo electrónico"
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => {
                          setEmailTouched(true);
                          if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                            setEmailError();
                          }
                        }}
                        className={`input-field half-width ${missingFields.includes('Introduce email') && emailTouched ? 'error' : ''}`}
                      />
                      {emailError && <p>{emailError}</p>}
                    </div>

                  </div>

                  <div className="input-group-message-contact-work-with-us">
                    <label htmlFor="message-contact-work-with-us">Mensaje:</label>
                    <textarea
                      id="message-contact-work-with-us"
                      value={message}
                      placeholder="Introduce tu consulta"
                      onChange={(e) => setMessage(e.target.value)}
                      onBlur={() => {
                        setMessageTouched(true);
                        if (message.length < 5) {
                          setMessageError();
                        }
                      }}
                      required
                      className={`textarea-field ${messageTouched && message.length < 5 ? 'error' : ''}`}
                    />
                    {messageError && <p>{messageError}</p>}
                  </div>
                      
                  <div className="submit-button-wrapper-contact-work-with-us">
                     <button type="submit" className="submit-button-contact-work-with-us">Enviar Mensaje</button>
                  </div>
            </div>
          </form>
          {showAlert && (
            <div className="alert" data-testid="success-message">
              <span className="close-btn-contact-work-with-us" onClick={handleCloseAlert}>X</span>
              <p>Mensaje enviado, nuestro administrador se pondrá en contacto con usted. Gracias por confiar en Inner Visuals.</p>
            </div>
          )}
        </div>
      </>
  );
};

export default Jobs;