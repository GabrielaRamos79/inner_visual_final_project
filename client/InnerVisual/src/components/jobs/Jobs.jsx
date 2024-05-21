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

  const emailRegex = /^\S+@\S+\.\S+$/;
  const telephoneRegex = /^\d{9}$/;
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;    

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

    CustomSweetAlertOk('Mensaje enviado correctamente, nuestro administrador se pondará en contacto usted. Gracias');

    setName('');
    setSurname('');
    setTelephone('');
    setEmail('');
    setMessage('');
       
    setNameTouched(false);
    setSurnameTouched(false);
    setTelephoneTouched(false);
    setEmailTouched(false);
    setMessageTouched(false);
    
   
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
                        onBlur={() =>  setNameTouched(true)}
                        className={`input-field ${nameTouched && !name.trim() ? 'error' : ''}`}
                     />
                    </div>

                    <div className="input-group-surname-contact-work-with-us">
                      <label htmlFor="surname-contact-work-with-us">Apellido:</label>
                      <input
                        type="text"
                        id="surname-contact-work-with-us"
                        value={surname}
                        placeholder="Introduce tu apellido"
                        onChange={(e) => setSurname(e.target.value)}
                        onBlur={() =>  setSurnameTouched(true)}
                        className={`input-field ${surnameTouched && !surname.trim() ? 'error' : ''}`}
                      />
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
                        onBlur={() =>setTelephoneTouched(true)}
                        className={`input-field ${telephoneTouched && (!telephone.trim() || !telephoneRegex.test(telephone)) ? 'error' : ''}`}
                       />
                     </div>

                    <div className="input-group-email-contact-work-with-us">
                      <label htmlFor="email-contact-work-with-us">Correo Electrónico:</label>
                      <input
                        type="email"
                        id="email-contact-work-with-us"
                        value={email}
                        placeholder="Introduce tu correo electrónico"
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setEmailTouched(true)}
                        className={`input-field half-width ${emailTouched && !emailRegex.test(email) ? 'error' : ''}`}
                      />
                    </div>

                  </div>

                  <div className="input-group-message-contact-work-with-us">
                    <label htmlFor="message-contact-work-with-us">Mensaje:</label>
                    <textarea
                      id="message-contact-work-with-us"
                      value={message}
                      placeholder="Introduce tu consulta"
                      onChange={(e) => setMessage(e.target.value)}
                      onBlur={() => setMessageTouched(true)}
                      className={`textarea-field ${messageTouched && message.length < 5 ? 'error' : ''}`}
                     />
                   </div>                     
             
                  <div className="submit-button-wrapper-contact-with-us">
                      <button type="submit" className="submit-button-contact-with-us">Enviar Mensaje</button>
                  </div>
             </div>        
          </form>
        </div>
      </>
  );
};

export default Jobs;
