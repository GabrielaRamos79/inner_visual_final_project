
// import { useEffect } from 'react'


// function LoginComponent() {
//   const loginUser = async () => {
//     try {
//     const response = await fetch('http://127.0.0.1:5000/login/', {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email:"yulia@mail.com",
//           password:"12345"
//         })
//       });
//       const data = await response.json();
//       console.log(data);
//   } catch (error) {
//     console.log(error);
//     }
//   };

// useEffect (() => {
//   loginUser();
//   console.log("hola Yuliia");
// }), [];
 
  
//   return (
//     <>
//      <h1>Esto es login</h1>
//     </>
//   )
// }

// export default LoginComponent

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import Swal from 'sweetalert2'
import {handleLogin} from '../../handler/AuthHandler'





const LoginComponent = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');
  //const { handleLogin } = useUserHandler();

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const authData = await handleLogin(email, password);
      // Виведення токена у консоль замість використання SweetAlert
      console.log('Токен:', authData.token);
    } catch (error) {
      // Використання SweetAlert для відображення помилки
      Swal.fire({
        icon: 'error',
        title: 'Помилка',
        text: 'Вхід не вдалося. Перевірте дані та спробуйте знову.',
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>

      <form onSubmit={handleSubmit}>

        <h2 className='title'>Login</h2>

        <div className="form-outline mb-4">
          <input type="email" 
          id="form2Example1" 
          className="form-control"  
          value={email} 
          onChange={(e) => setEmail(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" 
          id="form2Example2" 
          className="form-control" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form2Example31"/>
              <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
            </div>
          </div>
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <FontAwesomeIcon icon={faGoogle} />
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <FontAwesomeIcon icon={faTwitter} />
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
