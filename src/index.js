import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {App} from './component';
import { ToastProvider } from 'react-toast-notifications';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider autoDismiss={true} autoDismissTimeout={3000} placement="top-left">
    <App />
    </ToastProvider>
  </React.StrictMode>
);

