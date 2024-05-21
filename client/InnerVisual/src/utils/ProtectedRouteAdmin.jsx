import { useNavigate } from 'react-router-dom';
import {useUserHandler} from './../handler/UserHandler'
import { useUserHandler } from './../handler/AuthHandler';

const ProtectedRouteAdmin = ({ children }) => {
  const navigate = useNavigate();
  const { userType } = useUserHandler();

  useEffect(() => {
    if (userType!== 'admin') {
      navigate('/unauthorized');
    }
  }, [userType, navigate]);

  return userType === 'admin'? children : null;
};

export default ProtectedRouteAdmin;