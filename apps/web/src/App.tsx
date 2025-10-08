import { Layout } from './components/Layout';

import { Routes, Route } from 'react-router-dom';
import ComponentsPage from './pages/ComponentsPage';
import HomePage from './pages/home/HomePage';
import { ComponentsLayout } from './components/ComponentsLayout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="components" element={<ComponentsLayout />} >
          <Route index element={<ComponentsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
