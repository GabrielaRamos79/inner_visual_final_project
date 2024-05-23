import React, { useState } from 'react';
import { CustomSweetAlertOk, CustomSweetAlertError } from '../../components/sweetAlertComponent/CustomSweetAlert';
import './jobs.css';

const Jobs = () => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
 
  const [surname, setSurname] = useState('');
  const [surnameTouched, setSurnameTouched] = useState(false);
  
  const [telephone, setTelephone] = useState('');
  const [telephoneTouched, setTelephoneTouched] = useState(false);
  
  const [message, setMessage] = useState('');
  const [messageTouched, setMessageTouched] = useState(false);

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptTermsTouched, setAcceptTermsTouched] = useState(false); 
  
  const emailRegex = /^\S+@\S+\.\S+$/;
  const telephoneRegex = /^\d{9}$/;
  
  const handleSubmit = async (e) => {
    e.preventDefault();   

    if (!name.trim()) {
      CustomSweetAlertError('El nombre es obligatorio.');
      setNameTouched(true);
      return; 
    }

    if (!surname.trim()) {
      CustomSweetAlertError('El apellido es obligatorio.');
      setSurnameTouched(true);
      return;  
    }
    if (!telephone.trim()) {
      CustomSweetAlertError('Introduce un teléfono válido.');
      setTelephoneTouched(true);
      return;
    }

    if (!emailRegex.test(email)) {
      CustomSweetAlertError('Introduce un email válido.');
      setEmailTouched(true);
      return;
    }

    if (message.length < 5) {
      CustomSweetAlertError('El mensaje debe tener al menos 5 caracteres.');
      setMessageTouched(true);
      return;
    }
    if (!acceptTerms) { 
      CustomSweetAlertError('Debes aceptar el tratamiento de datos.');
      setAcceptTermsTouched(true);
      return;
    } 

    CustomSweetAlertOk('Mensaje enviado correctamente, nuestro administrador se pondará en contacto usted. Gracias');

    setName('');
    setSurname('');
    setTelephone('');
    setEmail('');
    setMessage('');
    setAcceptTerms('');
       
    setNameTouched(false);
    setSurnameTouched(false);
    setTelephoneTouched(false);
    setEmailTouched(false);
    setMessageTouched(false);
    setAcceptTermsTouched(false);   
  };

  return (
    <>
      <div className='jobs-container-jobs-work-with-us'>

        <div className='container-title-Jobs'>
          <h2 className='titleJobs-jobs-work-with-us'>WORK WITH US</h2>
          <br></br>
          <h1 className='subtitleJobs-jobs-work-with-us'>Aqui te invitamos a que trabajes con nosotros, cuentanos sobre ti </h1>
         </div> 

         <div className="contact-form-jobs-work-with-us">
          <form onSubmit={handleSubmit}>                    

                   
                        <label htmlFor="name-jobs-work-with-us">Nombre:</label>
                        <input
                          type="text"
                          id="name-jobs-work-with-us"
                          value={name}
                          placeholder="Introduce tu nombre"
                          onChange={(e) => setName(e.target.value)}
                          onBlur={() =>  setNameTouched(true)}
                          className={`input-field ${nameTouched && !name.trim() ? 'error' : ''}`}
                      />
                  
                       <label htmlFor="surname-contact-work-with-us">Apellido:</label>
                        <input
                          type="text"
                          id="surname-jobs-work-with-us"
                          value={surname}
                          placeholder="Introduce tu apellido"
                          onChange={(e) => setSurname(e.target.value)}
                          onBlur={() =>  setSurnameTouched(true)}
                          className={`input-field ${surnameTouched && !surname.trim() ? 'error' : ''}`}
                        />

                        <label htmlFor="telephone-contact-work-with-us">Teléfono:</label>
                        <input
                          type="tel"
                          id="telephone-jobs-work-with-us"
                          value={telephone}
                          placeholder="Introduce tu telféfono"
                          onChange={(e) => setTelephone(e.target.value)}
                          onBlur={() =>setTelephoneTouched(true)}
                          className={`input-field ${telephoneTouched && (!telephone.trim() || !telephoneRegex.test(telephone)) ? 'error' : ''}`}
                        />

                        <label htmlFor="email-jobs-work-with-us">Correo Electrónico:</label>
                        <input
                          type="email"
                          id="email-jobs-work-with-us"
                          value={email}
                          placeholder="Introduce tu correo electrónico"
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={() => setEmailTouched(true)}
                          className={`input-field half-width ${emailTouched && !emailRegex.test(email) ? 'error' : ''}`}
                        />
                         <label htmlFor="message-jobs-work-with-us">Mensaje:</label>
                          <textarea
                            id="message-jobs-work-with-us"
                            value={message}
                            placeholder="Introduce tu consulta"
                            onChange={(e) => setMessage(e.target.value)}
                            onBlur={() => setMessageTouched(true)}
                            className={`textarea-field ${messageTouched && message.length < 5 ? 'error' : ''}`}
                          />
                        <div className="input-group-terms-work-with-us">
                          <input
                            type="checkbox"
                            id="terms-work-with-us"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            onBlur={() => setAcceptTermsTouched(true)}
                          />
                          <label htmlFor="terms-work-with-us">He leido y acepto los <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">términos y condiciones</a></label>
                        </div> 
                          <div className="submit-button-jobs-work-with-us">
                              <button type="submit" className="submit-button-jobs-work-with-us">Enviar Mensaje</button>
                          </div>
                                    
            </form>
            </div>  
          </div>
        </>
    );
  };

  export default Jobs;