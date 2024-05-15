//import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/AuthService';
//import Swal from 'sweetalert2'

export const useUserHandler = () => {
 //const [userRol, setUserRol] = useState(null);
 //const navigate = useNavigate(); 

 const handleLogin = async (email, password) => {
    const response = await loginUser(email, password);
    // if (response.success) {
    //   setUserRol(response.user_type_name);
    //   // Redirigir basado en el tipo de usuario
    //   switch (response.user_type_name) {
    //     case 'admin' :
    //         navigate('/admin/dashboard');
    //       break;
    //       case  'client':
    //         navigate('/'); 
    //       break;
    //     default:
    //       // Manejar caso no esperado
    //       break;
    //   }
    // } else {
      
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "¡Revisa tu usuario o contraseña, Artista!",
    //     confirmButtonColor: '#000000',
    //   });
    // }
 };

 return {handleLogin};
};

export default useUserHandler