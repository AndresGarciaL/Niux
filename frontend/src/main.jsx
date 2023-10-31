import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
/* Login Google */
import { GoogleOAuthProvider } from '@react-oauth/google';
/* Login Microsoft */
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';

const clientGoogleId = import.meta.env.VITE_CLIENT_GOOGLE_ID;
const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    msalInstance.setActiveAccount(event.payload.account);
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <GoogleOAuthProvider clientId={clientGoogleId}>
        <App />
      </GoogleOAuthProvider>
    </MsalProvider>
  </React.StrictMode>,
);
