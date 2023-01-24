import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/Workoutcontext';
import { AuthContextProvider } from './context/Authcontext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
  <WorkoutsContextProvider>
  <App />

  </WorkoutsContextProvider>
  </AuthContextProvider>

  </React.StrictMode>
);

