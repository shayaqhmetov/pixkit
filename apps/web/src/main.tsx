import { createRoot } from 'react-dom/client';

// импорт наших пакетов (локальные workspace-линки)
import '@pixkit/styles/index.css';
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, Button, Panel } from '@pixkit/react';
import { Breadcrumb } from '@pixkit/react'; // новый импорт

function App() {
    return (
        <div className="min-h-screen p-8" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
            <Panel className="p-6 max-w-sm">
                <h1 className="mb-4" style={{ fontSize: 24 }}>PixKit</h1>
                <Button className="mr-3" variant="primary">Primary</Button>
                <Button className="mr-3" variant="danger">Danger</Button>
                <Button variant="default">Default</Button>
                <Breadcrumb className="mb-4">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink isCurrent>Breadcrumb</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </Panel>
        </div>
    );
}

createRoot(document.getElementById('root')!).render(<App />);
