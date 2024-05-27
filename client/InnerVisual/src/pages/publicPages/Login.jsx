import { useState } from 'react';
import LoginComponent from './../../components/loginComponent/LoginComponent';
import Register from './../../components/register/Register';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const showRegisterForm = () => {
    setShowLogin(false);
  };

  const showLoginForm = () => {
    setShowLogin(true);
  };

  return (
    <>
      {showLogin ? (
        <LoginComponent showRegisterForm={showRegisterForm} />
      ) : (
        <Register showLoginForm={showLoginForm} />
      )}

    </>
  )
}

export default Login
