import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientGoogleId = import.meta.env.VITE_CLIENT_GOOGLE_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientGoogleId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
