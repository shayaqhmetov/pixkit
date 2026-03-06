import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import '@pixkit/react/index.css';
import { PixkitProvider } from '@pixkit/react';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <PixkitProvider font="press-start-2p">
    <HashRouter basename="">
      <App />
    </HashRouter>
  </PixkitProvider>
);
