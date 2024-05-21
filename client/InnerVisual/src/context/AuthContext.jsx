import { createContext, useState, useEffect } from "react";
import { useCookies } from 'react-cookie';


export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies([
    "id_user",
    "name",
    "surname",
    "email",
    "phone",
    "photo",
    "user_type"
  ]);

  useEffect(() => {
    if (cookies.id_user) {
      setUser({
        id: cookies.id_user,
        role: cookies.name,
        name: cookies.surname,
        namePerson: cookies.email,
        surnamePerson: cookies.phone,
        surnamePerson: cookies.photo,
        surnamePerson: cookies.user_type,
      });
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false)
    }
  }, [cookies]);

  const logout = () => {
    removeCookie("id_user");
    removeCookie("name");
    removeCookie("surname");
    removeCookie("email");
    removeCookie("phone");
    removeCookie("photo");
    removeCookie("user_type");

    setUser(null);

    setIsLoggedIn(false);
  };


  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, logout }}>
      {children}
    </UserContext.Provider>
  );

};
