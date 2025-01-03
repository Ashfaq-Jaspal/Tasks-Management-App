import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename='/Tasks-Management-App'>
            <App />
        </BrowserRouter>
    </StrictMode>
);
