import { createRoot } from 'react-dom/client'; // Asegúrate de importar desde 'react-dom/client'
import { StrictMode } from 'react';
import App from './App';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
