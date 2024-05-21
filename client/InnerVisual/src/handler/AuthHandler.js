import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  loginUser  from '../services/AuthService';
import Swal from 'sweetalert2'

export const useUserHandler = () => {
 const [userType, setUserType] = useState(null);
 const navigate = useNavigate(); 

 const handleLogin = async (email, password,user_type) => {
    const response = await loginUser(email, password,user_type);
    if (response.success) {
      setUserType(response.user_type);
      // Redirigir basado en el tipo de usuario
      switch (response.user_type) {
         case 'admin' :
            navigate('/admin/dashboard');
         break;
         case  'client':
            navigate('/client/dashboard'); 
         break;
        default:
          // Manejar caso no esperado
          break;
      }
    } else {
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Revisa tu email o contraseña",
        confirmButtonColor: '#000000',
      });
    }
 };

 return { handleLogin };
};

export default useUserHandler;