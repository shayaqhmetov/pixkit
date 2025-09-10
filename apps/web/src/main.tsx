import { createRoot } from 'react-dom/client';

// импорт наших пакетов (локальные workspace-линки)
import '@pixkit/styles/index.css';
import { Button, Panel } from '@pixkit/react';

function App() {
    return (
        <div className="min-h-screen p-8" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
            <Panel className="p-6 max-w-sm">
                <h1 className="mb-4" style={{ fontSize: 24 }}>PixKit</h1>
                <Button className="mr-3" variant="primary">Test</Button>
                <Button variant="default">Delete</Button>
            </Panel>
        </div>
    );
}

createRoot(document.getElementById('root')!).render(<App />);
