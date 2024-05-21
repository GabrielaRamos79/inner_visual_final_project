import React, { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';
import { useUserHandler } from '../../handler/AuthHandler';
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useUserHandler();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      handleLogin(email, password, userType);
      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Tu solicitud ha sido procesada.',
 
     }).then(() =>{
       setEmail('');
       setPassword('');
     })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al iniciar sesión. Compruebe sus datos e inténtelo de nuevo.',
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
            onChange={(e) => setEmail(e.target.value)} />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
              <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
            </div>
          </div>
          <div className="col">
            <button type="button" className="btn btn-link">Forgot password?</button>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

        <div className="text-center">
          <p>Not a member? <button type="button" className="btn btn-link">Register</button></p>
          {/* <p>or sign up with:</p>
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
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;







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