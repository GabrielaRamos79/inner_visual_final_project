import { Routes, Route } from 'react-router-dom';
import LayoutAdmin from '../layout/LayoutAdmin'
import AdminDashboard from "../pages/privatePages/AdminDashboard";
import LayoutClient from '../layout/LayoutClient'
import ClientDashboard from "../pages/privatePages/ClientDashboard";
import Home from "../pages/publicPages/Home";
import Login from "../pages/publicPages/Login";
import About from "../pages/publicPages/About";
import LayoutPublic from "../layout/LayoutPublic";
import Unauthorized from '../components/unauthorized/Unauthorized';
import ProtectedRouteAdmin from '../utils/ProtectedRouteAdmin';
import ProtectedRouteClient from '../utils/ProtectedRouteClient'
import ErrorPage from '../pages/publicPages/ErrorPage';


export const RouterProvider = () => {
  return (

    <Routes>
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route path="dashboard" element={<ProtectedRouteAdmin><AdminDashboard /></ProtectedRouteAdmin>} />
      </Route>

      <Route path="/client" element={<LayoutClient />}>
        <Route path="dashboard" element={<ProtectedRouteClient><ClientDashboard /></ProtectedRouteClient>} />
      </Route>
      
      <Route path="/unauthorized" element={<ErrorPage />} />

      <Route path="/" element={<LayoutPublic />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>

  );
};