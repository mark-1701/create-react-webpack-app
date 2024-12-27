import { createRoot } from 'react-dom/client'; // Asegúrate de importar desde 'react-dom/client'
import App from './components/App';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
