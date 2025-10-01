import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@pixkit/styles/index.css';
import App from './App';


const base = (() => {
  const trimmed = import.meta.env.BASE_URL.replace(/\/$/, '');
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
})();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={base}>
    <App />
  </BrowserRouter>
);
