import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from './router/RouterProvider';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RouterProvider />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
