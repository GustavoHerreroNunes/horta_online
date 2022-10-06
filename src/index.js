import React from 'react';
import ReactDOM from 'react-dom/client';
import routes from './routes';
import { RouterProvider } from 'react-router-dom';
import './bootstrap-dist/js/bootstrap';
import './bootstrap-dist/css/bootstrap.css';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

