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
      <div className='jobs-container-about'>
        <h2 className='titleJobs'>Contacta con Nosotros</h2>
        <div className='jobs-section'>
          <form onSubmit={handleSubmit}>
            <div className="contact-form">
              <div className="input-group-email">
                <label htmlFor="email-contact">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email-contact"
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

              <div className='input-group-name'>
                <label htmlFor="name-contact">Nombre:</label>
                <input
                  type="text"
                  id="name-contact"
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

              <div className='input-group-surname'>
                <label htmlFor="surname-contact">Apellido:</label>
                <input
                  type="text"
                  id="surname-contact"
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

              <div className='input-group-telephone'>
                <label htmlFor="telephone-contact">Teléfono:</label>
                <input
                  type="tel"
                  id="telephone-contact"
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

              <div className='input-group-message'>
                <label htmlFor="message-contact">Mensaje:</label>
                <textarea
                  id="message-contact"
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

              <div className="submit-button-wrapper">
                <button type="submit" className="submit-button-contact">Enviar Mensaje</button>
              </div>
            </div>
          </form>
          {showAlert && (
            <div className="alert">
              <span className="close-btn" onClick={handleCloseAlert}>X</span>
              <p>Mensaje enviado, nuestro administrador se pondrá en contacto con usted. Gracias por confiar en Inner Visuals.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;


/*
PRIMERA PRUEBA




import React, { useState } from 'react';
import './jobs.css';

const Jobs = () => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [message, setMessage] = useState('');
  const [messageTouched, setMessageTouched] = useState(false);
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
            <div className="contact-form">
              <div>
                <label htmlFor="email-contact">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  className={`input-field ${missingFields.includes('Introduce email') && emailTouched ? 'error' : ''}`}
                />
              </div>

              <div>
                <label htmlFor="name-contact">Mensaje:</label>

                <input textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setMessageTouched(true)}
                  required
                  className={`textarea-field ${messageTouched && message.length < 5 ? 'error' : ''}`}
                />
              </div>

              <div>
                <label htmlFor="msurname-contact">Mensaje:</label>

                <input textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setMessageTouched(true)}
                  required
                  className={`textarea-field ${messageTouched && message.length < 5 ? 'error' : ''}`}
                />
              </div>
              <div>
                <label htmlFor="telephone-contact">Mensaje:</label>

                <input textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setMessageTouched(true)}
                  required
                  className={`textarea-field ${messageTouched && message.length < 5 ? 'error' : ''}`}
                />
              </div>

              <div>
                <label htmlFor="message-contact">Mensaje:</label>

                <input textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setMessageTouched(true)}
                  required
                  className={`textarea-field ${messageTouched && message.length < 5 ? 'error' : ''}`}
                />
              </div>


              <div className="submit-button-wrapper">
                <button type="submit" className="submit-button-contact">Enviar Mensaje</button>
              </div>
            </div>
          </form>
          {showAlert && (
            <div className="alert">
              <span className="close-btn" onClick={handleCloseAlert}>X</span>
              <p>Mensaje enviado, nuestro administrador se pondrá en contacto con usted. Gracias por confiar en Inner Visuals.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;





ORIGINAL


// import React, { useState } from 'react';
// import './jobs.css';

//   const Jobs = () => {
//     const [email, setEmail] = useState('');
//     const [emailTouched, setEmailTouched] = useState(false); // Nuevo estado para el campo de correo electrónico
//     const [message, setMessage] = useState('');
//     const [messageTouched, setMessageTouched] = useState(false); // Nuevo estado para el campo de mensaje
//     const [showAlert, setShowAlert] = useState(false);
//     const [missingFields, setMissingFields] = useState([]);

 
//     const handleSubmit = async (e) => {
//       e.preventDefault();
        
//       const emailRegex = /^\S+@\S+\.\S+$/;
//       const missing = [];

//     if (!emailRegex.test(email)) {
//       missing.push('Introduce email');
//       alert('Por favor, introduce un correo electrónico válido.');
//       return;
//     }

//     if (message.length < 5) {
//       setMissingFields(missing);
//       alert('El mensaje debe tener al menos 5 caracteres.');
//       return;
//     }

//     if (missing.length > 0) {
//       setMissingFields(missing);
//       alert('')
//       return;
//     }

//     setShowAlert(true);
//     setEmail('');
//     setMessage('');
//     setMissingFields([]);
//   };
//     const handleCloseAlert = () => {
//      setShowAlert(false);
//   };

//   return (
//     <>
//       <div className='jobs-container-about'>
//         <h2 className='titleJobs'>Contacta con Nosotros</h2>
//         <div className='jobs-section'>      
//           <form onSubmit={handleSubmit}>
//             <div className="contact-form">
//               <div>
//                 <label htmlFor="email">Correo Electrónico:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onBlur={() => setEmailTouched(true)}
//                   style={{ border: missingFields.includes('Introduce email') && emailTouched? '2px solid red' : '1px solid #ccc' }}
//                 />
//               </div>

//               <div>
//                  <label htmlFor="name-contact">Nombre:</label>
//                  <textarea
//                   id="name-contact"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   onBlur={() => setMessageTouched(true)} 
//                   required
//                   className="name-contacttextarea"
//                 />
//               </div>

//               <div>
//                  <label htmlFor="surname-contact-textarea">Apellido:</label>
//                  <textarea
//                   id="surname-contact-textarea"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   onBlur={() => setMessageTouched(true)} 
//                   required
//                   className="surname-contact-textarea"
//                 />
//               </div>

//               <div>
//                  <label htmlFor="telephone-contact-textarea">Teléfono:</label>
//                  <textarea
//                   id="telephone-contact-textarea"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   onBlur={() => setMessageTouched(true)} 
//                   required
//                   className="telephone-contact-textarea"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message">Mensaje:</label>
//                 <textarea
//                   id="message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   onBlur={() => setMessageTouched(true)} 
//                   required
//                   className="message-textarea"
//                 />
//               </div>
//               <div className="submit-button-wrapper">
//                 <button type="submit" className="submit-button-contact">Enviar Mensaje</button>
//               </div>
//             </div>
//           </form>
//           {showAlert && (
//             <div className="alert">
//               <span className="close-btn" onClick={handleCloseAlert}>X</span>
//               <p>Mensaje enviado, nuestro administrador se pondrá en contacto con usted. Gracias por confiar en Inner Visuals.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Jobs;*/