import { createRoot } from 'react-dom/client';

import '@pixkit/styles/index.css';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, Button } from '@pixkit/react';

import { Layout } from './components/Layout';

function App() {
    return (
        <Layout>
            <section>
                <div>
                    <Button variant="primary">Primary Action</Button>
                    <Button variant="danger">Danger Action</Button>
                    <Button variant="default">Secondary Action</Button>
                </div>
                <section>
                    <h2>Breadcrumb</h2>
                    <Breadcrumb>
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
                </section>
            </section>
        </Layout>
    );
}

createRoot(document.getElementById('root')!).render(<App />);
