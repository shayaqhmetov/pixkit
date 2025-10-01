import { createRoot } from 'react-dom/client';

import '@pixkit/styles/index.css';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, Button } from '@pixkit/react';

import { Layout } from './components/Layout';

import { Routes, Route } from 'react-router-dom';
import ComponentsPage from './pages/components';
// import DocsPage from './pages/docs';

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route index path="/" element={<DocsPage />} /> */}
        <Route path="/components" element={<ComponentsPage />} />
      </Routes>
    </Layout>
  );
}
